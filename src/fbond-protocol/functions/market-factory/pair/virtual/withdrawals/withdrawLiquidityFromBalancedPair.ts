import { BN, web3 } from '@project-serum/anchor';
import { ASSOCIATED_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { findAssociatedTokenAddress } from '../../../../../../common';
import {
  EMPTY_PUBKEY,
  ENCODER,
  NFTS_OWNER_PREFIX,
  METADATA_PROGRAM_PUBKEY,
  SOL_FUNDS_PREFIX,
  FEE_PREFIX,
  NFT_PAIR_BOX_PREFIX,
} from '../../../../../constants';

import { getMetaplexMetadataPda, returnAnchorProgram } from '../../../../../helpers';

type WithdrawLiquidityFromBalancedPair = (params: {
  programId: web3.PublicKey;
  connection: web3.Connection;

  args: {
    amountOfTokensToWithdraw: number;
  };

  accounts: {
    pair: web3.PublicKey;
    authorityAdapter: web3.PublicKey;
    userPubkey: web3.PublicKey;
    nftMint: web3.PublicKey;
  };

  sendTxn: (transaction: web3.Transaction, signers: web3.Signer[]) => Promise<void>;
}) => Promise<{ account: null; instructions: web3.TransactionInstruction[]; signers: web3.Signer[] }>;

// Virtual
// at least 1 buy and 1 sell order
export const withdrawLiquidityFromBalancedPair: WithdrawLiquidityFromBalancedPair = async ({
  programId,
  connection,
  args,
  accounts,
  sendTxn,
}) => {
  const program = returnAnchorProgram(programId, connection);
  const instructions: web3.TransactionInstruction[] = [];

  const [solFundsVault, solVaultSeed] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(SOL_FUNDS_PREFIX), accounts.pair.toBuffer()],
    program.programId,
  );
  const [nftsOwner, nftsOwnerSeed] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(NFTS_OWNER_PREFIX), accounts.pair.toBuffer()],
    program.programId,
  );

  const [feeSolVault, feeVaultSeed] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(FEE_PREFIX), accounts.pair.toBuffer()],
    program.programId,
  );

  const [nftPairBox] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(NFT_PAIR_BOX_PREFIX), accounts.pair.toBuffer(), accounts.nftMint.toBuffer()],
    program.programId,
  );

  const userNftTokenAccount = await findAssociatedTokenAddress(accounts.userPubkey, accounts.nftMint);
  const vaultNftTokenAccount = await findAssociatedTokenAddress(nftsOwner, accounts.nftMint);

  instructions.push(
    await program.methods
      .withdrawLiquidityFromBalancedPair(new BN(args.amountOfTokensToWithdraw))
      .accounts({
        nftPairBox: nftPairBox,
        pair: accounts.pair,
        authorityAdapter: accounts.authorityAdapter,
        user: accounts.userPubkey,
        fundsSolVault: solFundsVault,
        feeSolVault: feeSolVault,
        nftsOwner: nftsOwner,
        nftMint: accounts.nftMint,
        nftUserTokenAccount: userNftTokenAccount,
        vaultNftTokenAccount: vaultNftTokenAccount,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,

        systemProgram: web3.SystemProgram.programId,
        rent: web3.SYSVAR_RENT_PUBKEY,
      })
      .instruction(),
  );
  const transaction = new web3.Transaction();
  for (let instruction of instructions) transaction.add(instruction);

  const signers = [];
  await sendTxn(transaction, signers);
  return { account: null, instructions, signers };
};
