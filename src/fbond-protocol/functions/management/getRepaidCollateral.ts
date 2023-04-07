import { BN, web3 } from '@project-serum/anchor';
import { ASSOCIATED_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { findAssociatedTokenAddress } from '../../../common';
import { AUTHORIZATION_RULES_PROGRAM, ENCODER, METADATA_PROGRAM_PUBKEY } from '../../constants';
import { BOND_PROOGRAM_AUTHORITY_PREFIX, RETURN_FUNDS_OWNER_PREFIX, COLLATERAL_BOX_PREFIX } from '../../constants';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

import { findTokenRecordPda, getMetaplexEditionPda, getMetaplexMetadata, returnAnchorProgram } from './../../helpers';

type GetRepaidCollateral = (params: {
  programId: web3.PublicKey;
  connection: web3.Connection;

  args: {
    nextBoxIndex: string;
  };

  accounts: {
    userPubkey: web3.PublicKey;
    fbond: web3.PublicKey;
    collateralTokenMint: web3.PublicKey;
    collateralTokenAccount: web3.PublicKey;
  };

  sendTxn: (transaction: web3.Transaction, signers: web3.Signer[]) => Promise<void>;
}) => Promise<{
  instructions: web3.TransactionInstruction[];
  signers: web3.Signer[];
}>;

export const getRepaidCollateral: GetRepaidCollateral = async ({ programId, connection, accounts, args, sendTxn }) => {
  const program = returnAnchorProgram(programId, connection);
  const instructions: web3.TransactionInstruction[] = [];

  const [collateralBox] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(COLLATERAL_BOX_PREFIX), accounts.fbond.toBuffer(), ENCODER.encode(args.nextBoxIndex)],
    program.programId,
  );

  const [bondProgramAuthority, bondProgramAuthoritySeed] = await web3.PublicKey.findProgramAddress(
    [ENCODER.encode(BOND_PROOGRAM_AUTHORITY_PREFIX), accounts.fbond.toBuffer()],
    program.programId,
  );

  const userTokenAccount = await findAssociatedTokenAddress(accounts.userPubkey, accounts.collateralTokenMint);
  // const collateralTokenAccount = await findAssociatedTokenAddress(bondProgramAuthority, accounts.collateralTokenMint);
  const editionInfo = getMetaplexEditionPda(accounts.collateralTokenMint);
  const nftMetadata = getMetaplexMetadata(accounts.collateralTokenMint);
  const ownerTokenRecord = findTokenRecordPda(accounts.collateralTokenMint, accounts.collateralTokenAccount);
  const destTokenRecord = findTokenRecordPda(accounts.collateralTokenMint, userTokenAccount);
  const meta = await Metadata.fromAccountAddress(connection, nftMetadata);
  const ruleSet = meta.programmableConfig?.ruleSet;

  instructions.push(
    await program.methods
      .getRepaidCollateral()
      .accountsStrict({
        collateralBox: collateralBox,
        fbond: accounts.fbond,
        bondProgramAuthority: bondProgramAuthority,

        tokenMint: accounts.collateralTokenMint,
        collateralTokenAccount: accounts.collateralTokenAccount,
        userTokenAccount: userTokenAccount,
        user: accounts.userPubkey,

        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
        rent: web3.SYSVAR_RENT_PUBKEY,
        metadataProgram: METADATA_PROGRAM_PUBKEY,
        editionInfo: editionInfo,
      })
      .instruction(),
  );

  const transaction = new web3.Transaction();
  for (let instruction of instructions) transaction.add(instruction);

  const signers = [];
  await sendTxn(transaction, signers);
  return { instructions, signers };
};