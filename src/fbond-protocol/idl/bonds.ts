export type Bonds = {
  version: '0.1.0';
  name: 'bonds';
  instructions: [
    {
      name: 'initializeFbond';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'FBondBumps';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'addCollateralBox';
      accounts: [
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'activateFbond';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'FBondParams';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'repayFbond';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'redeemFbonds';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'getRepaidCollateralPnft';
      accounts: [
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMetadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ownerTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorizationRulesProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'authorizationData';
          type: {
            option: {
              defined: 'AuthorizationDataLocal';
            };
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'getRepaidCollateral';
      accounts: [
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'liquidateFbond';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondCollateralOrSolReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newAmountToReturn';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'rescueLostEscrowlessCollateral';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'depositReturnedSolToLiquidatingBond';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newAmountToReturn';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'extractCollateralToLiquidatePnft';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMetadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ownerTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorizationRulesProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'authorizationData';
          type: {
            option: {
              defined: 'AuthorizationDataLocal';
            };
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'liquidateReceivingNftFbondPnft';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMetadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ownerTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorizationRulesProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'authorizationData';
          type: {
            option: {
              defined: 'AuthorizationDataLocal';
            };
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'extractCollateralToLiquidate';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'updateActualReturnedAmount';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newAmountToReturn';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'setBondCollateralOrSolReceiver';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondCollateralOrSolReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'unsetBondCollateralOrSolReceiver';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'createBondWithSingleCollateralPnft';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMetadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ownerTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destTokenRecord';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorizationRulesProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'FBondBumps';
          };
        },
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
        {
          name: 'params';
          type: {
            defined: 'FBondParams';
          };
        },
        {
          name: 'authorizationData';
          type: {
            option: {
              defined: 'AuthorizationDataLocal';
            };
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'createBondWithSingleCollateral';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'FBondBumps';
          };
        },
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
        {
          name: 'params';
          type: {
            defined: 'FBondParams';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'createValidation';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'validation';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'loanToValueFilter';
          type: 'u64';
        },
        {
          name: 'durationFilter';
          type: 'u64';
        },
        {
          name: 'maxReturnAmountFilter';
          type: 'u64';
        },
        {
          name: 'bondFeatures';
          type: {
            defined: 'BondFeatures';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'updateValidation';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'validation';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'loanToValueFilter';
          type: 'u64';
        },
        {
          name: 'durationFilter';
          type: 'u64';
        },
        {
          name: 'maxReturnAmountFilter';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'boundHadoMarketToFraktMarket';
      accounts: [
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fraktMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'hadoRegistry';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'initializePair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'pairAuthorityAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAssetReceiver';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fundsTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetReceiverTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'PairBumps';
          };
        },
        {
          name: 'params';
          type: {
            defined: 'PairParams';
          };
        },
        {
          name: 'bondingCurveType';
          type: {
            defined: 'BondingCurveType';
          };
        },
        {
          name: 'pairType';
          type: {
            defined: 'PairType';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'createClassicAuthorityAdapter';
      accounts: [
        {
          name: 'authorityAdapter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'depositSolToPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountOfTokensToBuy';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'validateNft';
      accounts: [
        {
          name: 'nftValidationAdapter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'validationWhitelist';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'depositNftToPair';
      accounts: [
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftValidationAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'initializeHadoMarket';
      accounts: [
        {
          name: 'hadoMarket';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'validationAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pairTokenMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'marketParams';
          type: {
            defined: 'InitializeHadoMarketParams';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'finishHadoMarket';
      accounts: [
        {
          name: 'hadoMarket';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'addClassicWhitelistToMarket';
      accounts: [
        {
          name: 'validationWhitelist';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'hadoMarket';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'whitelistedAddress';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'whitelistType';
          type: {
            defined: 'NftValidationWhitelistType';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'depositLiquidityToPair';
      accounts: [
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftValidationAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'putPairOnMarket';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'buyNftFromPair';
      accounts: [
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolFeeReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'maxAmountToPay';
          type: 'u64';
        },
        {
          name: 'skipFailed';
          type: 'bool';
        },
        {
          name: 'amountToBuy';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'sellNftToLiquidityPair';
      accounts: [
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftValidationAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'newVaultTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolFeeReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'minAmountToGet';
          type: 'u64';
        },
        {
          name: 'skipFailed';
          type: 'bool';
        },
        {
          name: 'amountToSell';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawSolFromPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountOfTokensToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawNftFromPair';
      accounts: [
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawLiquidityFromBalancedPair';
      accounts: [
        {
          name: 'nftPairBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'modifyPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'PairParams';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawLiquidityFromBuyOrdersPair';
      accounts: [
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawLiquidityFromSellOrdersPair';
      accounts: [
        {
          name: 'nftPairBoxFirst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMintFirst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultNftTokenAccountFirst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccountFirst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftPairBoxSecond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMintSecond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultNftTokenAccountSecond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccountSecond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawLiquidityOrderVirtualFees';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'makeLiquidityPairTokenized';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'closeVirtualNftSwapPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'customValidateNft';
      accounts: [
        {
          name: 'nftValidationAdapter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'whitelistedAddress';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'adapterProgramSigner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'duration';
          type: 'u64';
        },
        {
          name: 'nftValidationWhitelistType';
          type: {
            defined: 'NftValidationWhitelistType';
          };
        },
        {
          name: 'scopeType';
          type: {
            defined: 'ScopeType';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'validateAndSellNftToTokenToNftPair';
      accounts: [
        {
          name: 'validation';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'collateralBox';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadoRegistry';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fraktMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'oracleFloor';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'whitelistEntry';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'assetReceiverOrAutocompoundDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftUserTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolFeeReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'proof';
          type: {
            vec: {
              array: ['u8', 32];
            };
          };
        },
        {
          name: 'minAmountToGet';
          type: 'u64';
        },
        {
          name: 'skipFailed';
          type: 'bool';
        },
        {
          name: 'amountToSell';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'initializeAndDepositTokenForNftPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'pairAuthorityAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAssetReceiver';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiverTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'PairBumps';
          };
        },
        {
          name: 'params';
          type: {
            defined: 'PairParams';
          };
        },
        {
          name: 'bondingCurveType';
          type: {
            defined: 'BondingCurveType';
          };
        },
        {
          name: 'pairType';
          type: {
            defined: 'PairType';
          };
        },
        {
          name: 'amountOfTokensToBuy';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'initializeDepositAndCreateValidationTokenForNftPair';
      accounts: [
        {
          name: 'pair';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'hadoMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'pairAuthorityAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAdapterProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partialAssetReceiver';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'feeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiverTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authorityAdapter';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'validation';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'PairBumps';
          };
        },
        {
          name: 'params';
          type: {
            defined: 'PairParams';
          };
        },
        {
          name: 'bondingCurveType';
          type: {
            defined: 'BondingCurveType';
          };
        },
        {
          name: 'pairType';
          type: {
            defined: 'PairType';
          };
        },
        {
          name: 'amountOfTokensToBuy';
          type: 'u64';
        },
        {
          name: 'loanToValueFilter';
          type: 'u64';
        },
        {
          name: 'durationFilter';
          type: 'u64';
        },
        {
          name: 'maxReturnAmountFilter';
          type: 'u64';
        },
        {
          name: 'bondFeatures';
          type: {
            defined: 'BondFeatures';
          };
        },
      ];
      returns: undefined;
    },
    {
      name: 'initializeFlashLoanPool';
      accounts: [
        {
          name: 'pool';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'loanFeePoints';
          type: 'u16';
        },
      ];
      returns: undefined;
    },
    {
      name: 'depositSolToFlashLoanPool';
      accounts: [
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'solAmountToDeposit';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'withdrawSolFromFlashLoanPool';
      accounts: [
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'solAmountToWithdraw';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'takeFlashLoan';
      accounts: [
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'solAmountToBorrow';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'repayFlashLoan';
      accounts: [
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instructions';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'solAmountToRepay';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'mortgageBuyNftSellBondToTokenForNftPair';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'bondProgramAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userFbondTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralBox';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'collateralTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'validation';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadoRegistry';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'fraktMarket';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'oracleFloor';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'whitelistEntry';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'crossMintAmmPairFundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolFeeReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolFundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapNftPairBox';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'hadeswapPair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapPairFundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapPairNftsOwner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'hadeswapPairFeeSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapPairVaultNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapPairAssetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapProtocolFeeReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'hadeswapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'editionInfo';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'bumps';
          type: {
            defined: 'FBondBumps';
          };
        },
        {
          name: 'amountToDeposit';
          type: 'u64';
        },
        {
          name: 'params';
          type: {
            defined: 'FBondParams';
          };
        },
        {
          name: 'proof';
          type: {
            vec: {
              array: ['u8', 32];
            };
          };
        },
        {
          name: 'minAmountToGet';
          type: 'u64';
        },
        {
          name: 'skipFailed';
          type: 'bool';
        },
        {
          name: 'amountToSell';
          type: 'u64';
        },
        {
          name: 'maxAmountToPay';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
    {
      name: 'redeemFbondsFromAutocompoundToPair';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'assetReceiver';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'redeemFbondsFromAutocompoundToUser';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'redeemFbondsAutoreceiveSol';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'returnFundsOwner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'redeemAutocompoundAndAutoreceiveLiquidatedNft';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'adminTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiver';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'assetReceiverTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
      returns: undefined;
    },
    {
      name: 'claimFbondsFromAutocompoundDeposit';
      accounts: [
        {
          name: 'fbond';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fbondTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundDeposit';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'autocompoundBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fundsSolVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userBondsTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToClaim';
          type: 'u64';
        },
      ];
      returns: undefined;
    },
  ];
  accounts: [
    {
      name: 'adapterWhitelist';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'whitelistedAdapterProgram';
            type: 'publicKey';
          },
          {
            name: 'adapterType';
            type: {
              defined: 'AdapterType';
            };
          },
        ];
      };
    },
    {
      name: 'authorityAdapter';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'authorityAdapterProgram';
            type: 'publicKey';
          },
          {
            name: 'authorityOwner';
            type: 'publicKey';
          },
          {
            name: 'authorityType';
            type: {
              defined: 'AuthorityAdapterType';
            };
          },
          {
            name: 'expiringAt';
            type: 'u64';
          },
          {
            name: 'authorityState';
            type: {
              defined: 'AuthorityState';
            };
          },
        ];
      };
    },
    {
      name: 'autocompoundDeposit';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fraktBondState';
            type: {
              defined: 'AutocompoundDepositState';
            };
          },
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'user';
            type: 'publicKey';
          },
          {
            name: 'amountOfBonds';
            type: 'u64';
          },
          {
            name: 'depositedAt';
            type: 'u64';
          },
          {
            name: 'autocompoundType';
            type: {
              defined: 'AutocompoundType';
            };
          },
          {
            name: 'fbondTokenMint';
            type: 'publicKey';
          },
          {
            name: 'solAmount';
            type: 'u64';
          },
          {
            name: 'collateralTokenMint';
            type: 'publicKey';
          },
          {
            name: 'redeemedAt';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'bondsNftValidationAdapterRaw';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'publicKey';
          },
          {
            name: 'scopeType';
            type: {
              defined: 'ScopeType';
            };
          },
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'nftValidationProgram';
            type: 'publicKey';
          },
          {
            name: 'nftValidationWhitelistType';
            type: {
              defined: 'NftValidationWhitelistType';
            };
          },
          {
            name: 'whitelistedAddress';
            type: 'publicKey';
          },
          {
            name: 'nftValidationDurationType';
            type: {
              defined: 'NftValidationDurationType';
            };
          },
          {
            name: 'validUntil';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'classicValidationWhitelist';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'publicKey';
          },
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'whitelistType';
            type: {
              defined: 'NftValidationWhitelistType';
            };
          },
          {
            name: 'whitelistedAddress';
            type: 'publicKey';
          },
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'collateralBox';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fbond';
            type: 'publicKey';
          },
          {
            name: 'collateralBoxType';
            type: {
              defined: 'CollateralBoxType';
            };
          },
          {
            name: 'collateralTokenMint';
            type: 'publicKey';
          },
          {
            name: 'collateralTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'collateralAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'flashLoanPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'borrowing';
            type: 'bool';
          },
          {
            name: 'balance';
            type: 'u64';
          },
          {
            name: 'loanFeePoints';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'fraktBond';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fraktBondState';
            type: {
              defined: 'FraktBondState';
            };
          },
          {
            name: 'bondProgramAuthoritySeed';
            type: 'u8';
          },
          {
            name: 'collateralBoxesQuantity';
            type: 'u64';
          },
          {
            name: 'returnTokenMint';
            type: 'publicKey';
          },
          {
            name: 'returnTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'amountToReturn';
            type: 'u64';
          },
          {
            name: 'actualReturnedAmount';
            type: 'u64';
          },
          {
            name: 'returnFundsOwnerSeed';
            type: 'u8';
          },
          {
            name: 'fbondTokenMint';
            type: 'publicKey';
          },
          {
            name: 'fbondTokenSupply';
            type: 'u64';
          },
          {
            name: 'activatedAt';
            type: 'u64';
          },
          {
            name: 'liquidatingAt';
            type: 'u64';
          },
          {
            name: 'fbondIssuer';
            type: 'publicKey';
          },
          {
            name: 'bondCollateralOrSolReceiver';
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'hadoMarketRegistry';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'publicKey';
          },
          {
            name: 'fraktMarket';
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'hadoMarket';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'marketAuthority';
            type: 'publicKey';
          },
          {
            name: 'marketState';
            type: {
              defined: 'MarketState';
            };
          },
          {
            name: 'marketTrustType';
            type: {
              defined: 'MarketTrustType';
            };
          },
          {
            name: 'pairValidationType';
            type: {
              defined: 'PairValidationType';
            };
          },
          {
            name: 'validationAdapterProgram';
            type: 'publicKey';
          },
          {
            name: 'minBidCap';
            type: 'u64';
          },
          {
            name: 'marketDecimals';
            type: 'u64';
          },
          {
            name: 'pairTokenType';
            type: {
              defined: 'PairTokenType';
            };
          },
          {
            name: 'pairTokenMint';
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'nftPairBox';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'nftMint';
            type: 'publicKey';
          },
          {
            name: 'nftBoxType';
            type: {
              defined: 'NftBoxType';
            };
          },
          {
            name: 'vaultTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'activeTokensAmount';
            type: 'u64';
          },
          {
            name: 'status';
            type: {
              defined: 'NftBoxState';
            };
          },
        ];
      };
    },
    {
      name: 'nftSwapPair';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'publicKey';
          },
          {
            name: 'pairType';
            type: {
              defined: 'PairType';
            };
          },
          {
            name: 'pairState';
            type: {
              defined: 'PairState';
            };
          },
          {
            name: 'pairAuthorityType';
            type: {
              defined: 'PairAuthorityType';
            };
          },
          {
            name: 'pairAuthorityAdapterProgram';
            type: 'publicKey';
          },
          {
            name: 'lpTokensMint';
            type: 'publicKey';
          },
          {
            name: 'lpTokensInCirculation';
            type: 'u64';
          },
          {
            name: 'bondingCurve';
            type: {
              defined: 'BondingCurve';
            };
          },
          {
            name: 'baseSpotPrice';
            type: 'u64';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'mathCounter';
            type: 'i64';
          },
          {
            name: 'currentSpotPrice';
            type: 'u64';
          },
          {
            name: 'bidCap';
            type: 'u64';
          },
          {
            name: 'bidSettlement';
            type: 'i64';
          },
          {
            name: 'edgeSettlement';
            type: 'u64';
          },
          {
            name: 'feeTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'feeVaultSeed';
            type: 'u8';
          },
          {
            name: 'solOrTokenFeeAmount';
            type: 'u64';
          },
          {
            name: 'fundsTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'fundsSolVaultSeed';
            type: 'u8';
          },
          {
            name: 'fundsSolOrTokenBalance';
            type: 'u64';
          },
          {
            name: 'initialFundsSolOrTokenBalance';
            type: 'u64';
          },
          {
            name: 'buyOrdersQuantity';
            type: 'u64';
          },
          {
            name: 'nftsSeed';
            type: 'u8';
          },
          {
            name: 'sellOrdersCount';
            type: 'u64';
          },
          {
            name: 'lastTransactedAt';
            type: 'u64';
          },
          {
            name: 'concentrationIndex';
            type: 'u64';
          },
          {
            name: 'assetReceiver';
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'nftValidationAdapter';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'hadoMarket';
            type: 'publicKey';
          },
          {
            name: 'scopeType';
            type: {
              defined: 'ScopeType';
            };
          },
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'nftValidationProgram';
            type: 'publicKey';
          },
          {
            name: 'nftValidationWhitelistType';
            type: {
              defined: 'NftValidationWhitelistType';
            };
          },
          {
            name: 'whitelistedAddress';
            type: 'publicKey';
          },
          {
            name: 'nftValidationDurationType';
            type: {
              defined: 'NftValidationDurationType';
            };
          },
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'validUntil';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'protocolAdminMultisig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'protocolSettings';
            type: 'publicKey';
          },
          {
            name: 'admin';
            type: 'publicKey';
          },
          {
            name: 'weight';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'protocolSettingsV1';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'protocolFee';
            type: 'u64';
          },
          {
            name: 'protocolFeeMultiplier';
            type: 'u64';
          },
          {
            name: 'maxFee';
            type: 'u64';
          },
          {
            name: 'protocolFeeReceiver';
            type: 'publicKey';
          },
          {
            name: 'adminThresholdAmountMultisig';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'validation';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pair';
            type: 'publicKey';
          },
          {
            name: 'user';
            type: 'publicKey';
          },
          {
            name: 'loanToValueFilter';
            type: 'u64';
          },
          {
            name: 'durationFilter';
            type: 'u64';
          },
          {
            name: 'maxReturnAmountFilter';
            type: 'u64';
          },
          {
            name: 'bondFeatures';
            type: {
              defined: 'BondFeatures';
            };
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'FBondParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountToReturn';
            type: 'u64';
          },
          {
            name: 'bondDuration';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'FBondBumps';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bondProgramAuthoritySeed';
            type: 'u8';
          },
          {
            name: 'returnFundsOwnerSeed';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'InitializeHadoMarketParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'minBidCap';
            type: 'u64';
          },
          {
            name: 'marketDecimals';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'PairParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'delta';
            type: 'u64';
          },
          {
            name: 'spotPrice';
            type: 'u64';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'bidCap';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'PairBumps';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'fundsSolVaultSeed';
            type: 'u8';
          },
          {
            name: 'feeVaultSeed';
            type: 'u8';
          },
          {
            name: 'nftsSeed';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'BondingCurve';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'delta';
            type: 'u64';
          },
          {
            name: 'bondingType';
            type: {
              defined: 'BondingCurveType';
            };
          },
        ];
      };
    },
    {
      name: 'AuthorizationDataLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'payload';
            type: {
              vec: {
                defined: 'TaggedPayload';
              };
            };
          },
        ];
      };
    },
    {
      name: 'TaggedPayload';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'payload';
            type: {
              defined: 'PayloadTypeLocal';
            };
          },
        ];
      };
    },
    {
      name: 'SeedsVecLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'seeds';
            type: {
              vec: 'bytes';
            };
          },
        ];
      };
    },
    {
      name: 'ProofInfoLocal';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'proof';
            type: {
              vec: {
                array: ['u8', 32];
              };
            };
          },
        ];
      };
    },
    {
      name: 'AdapterType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Validation';
          },
          {
            name: 'Authority';
          },
          {
            name: 'Partial';
          },
        ];
      };
    },
    {
      name: 'AuthorityAdapterType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'OneTime';
          },
          {
            name: 'Persistent';
          },
        ];
      };
    },
    {
      name: 'AuthorityState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Active';
          },
          {
            name: 'Used';
          },
          {
            name: 'Expired';
          },
          {
            name: 'Revoked';
          },
        ];
      };
    },
    {
      name: 'AutocompoundDepositState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'NotActive';
          },
          {
            name: 'Active';
          },
        ];
      };
    },
    {
      name: 'AutocompoundType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Autocompound';
          },
          {
            name: 'AutoreceiveSol';
          },
          {
            name: 'AutocompoundAndReceiveNft';
          },
        ];
      };
    },
    {
      name: 'CollateralBoxType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Escrow';
          },
          {
            name: 'Escrowless';
          },
        ];
      };
    },
    {
      name: 'FraktBondState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Initialized';
          },
          {
            name: 'Active';
          },
          {
            name: 'Repaid';
          },
          {
            name: 'Liquidating';
          },
          {
            name: 'Liquidated';
          },
        ];
      };
    },
    {
      name: 'MarketTrustType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Unverified';
          },
          {
            name: 'Verified';
          },
        ];
      };
    },
    {
      name: 'MarketState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Initializing';
          },
          {
            name: 'Available';
          },
        ];
      };
    },
    {
      name: 'PairValidationType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'ClassicValidation';
          },
          {
            name: 'CustomValidation';
          },
        ];
      };
    },
    {
      name: 'PairTokenType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'NativeSol';
          },
          {
            name: 'Spl';
          },
        ];
      };
    },
    {
      name: 'NftBoxState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'NotActive';
          },
          {
            name: 'Active';
          },
        ];
      };
    },
    {
      name: 'NftBoxType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Escrow';
          },
          {
            name: 'Escrowless';
          },
        ];
      };
    },
    {
      name: 'PairType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'TokenForNft';
          },
          {
            name: 'NftForToken';
          },
          {
            name: 'LiquidityProvision';
          },
        ];
      };
    },
    {
      name: 'PairState';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Initializing';
          },
          {
            name: 'OnMarketVirtual';
          },
          {
            name: 'OnMarketTokenized';
          },
          {
            name: 'Frozen';
          },
        ];
      };
    },
    {
      name: 'PairAuthorityType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'ClassicAuthority';
          },
          {
            name: 'CustomAuthority';
          },
        ];
      };
    },
    {
      name: 'PartialSettings';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'None';
          },
          {
            name: 'CustomPartial';
          },
        ];
      };
    },
    {
      name: 'BondingCurveType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Linear';
          },
          {
            name: 'Exponential';
          },
        ];
      };
    },
    {
      name: 'ScopeType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Market';
          },
          {
            name: 'Pair';
          },
        ];
      };
    },
    {
      name: 'NftValidationDurationType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Finite';
          },
          {
            name: 'Infinite';
          },
        ];
      };
    },
    {
      name: 'NftValidationWhitelistType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Creator';
          },
          {
            name: 'Nft';
          },
          {
            name: 'MerkleTree';
          },
        ];
      };
    },
    {
      name: 'BondFeatures';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'None';
          },
          {
            name: 'Autocompound';
          },
          {
            name: 'ReceiveNftOnLiquidation';
          },
          {
            name: 'AutoreceiveSol';
          },
          {
            name: 'AutoCompoundAndReceiveNft';
          },
          {
            name: 'AutoReceiveAndReceiveNft';
          },
        ];
      };
    },
    {
      name: 'PayloadTypeLocal';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Pubkey';
            fields: ['publicKey'];
          },
          {
            name: 'Seeds';
            fields: [
              {
                defined: 'SeedsVecLocal';
              },
            ];
          },
          {
            name: 'MerkleProof';
            fields: [
              {
                defined: 'ProofInfoLocal';
              },
            ];
          },
          {
            name: 'Number';
            fields: ['u64'];
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'MetadataDoesntExist';
      msg: 'MetadataDoesntExist';
    },
    {
      code: 6001;
      name: 'DerivedKeyInvalid';
      msg: 'DerivedKeyInvalid';
    },
    {
      code: 6002;
      name: 'InvalidCollectionDetails';
      msg: 'InvalidCollectionDetails';
    },
    {
      code: 6003;
      name: 'InvalidCollection';
      msg: 'InvalidCollection';
    },
    {
      code: 6004;
      name: 'InvalidCollectionMint';
      msg: 'InvalidCollectionMint';
    },
    {
      code: 6005;
      name: 'NftNotVerified';
      msg: 'NftNotVerified';
    },
    {
      code: 6006;
      name: 'InvalidOwner';
      msg: 'InvalidOwner';
    },
    {
      code: 6007;
      name: 'InvalidDelta';
      msg: 'InvalidDelta';
    },
    {
      code: 6008;
      name: 'InvalidFee';
      msg: 'InvalidFee';
    },
    {
      code: 6009;
      name: 'InvalidPairType';
      msg: 'InvalidPairType';
    },
    {
      code: 6010;
      name: 'NotEnoughInTokenAccount';
      msg: 'NotEnoughInTokenAccount';
    },
    {
      code: 6011;
      name: 'InvalidMint';
      msg: 'InvalidMint';
    },
    {
      code: 6012;
      name: 'InvalidSolVault';
      msg: 'InvalidSolVault';
    },
    {
      code: 6013;
      name: 'InvalidFundingAmount';
      msg: 'InvalidFundingAmount';
    },
    {
      code: 6014;
      name: 'NotEnoughLamports';
      msg: 'NotEnoughLamports';
    },
    {
      code: 6015;
      name: 'InvalidJpegOwner';
      msg: 'InvalidJpegOwner';
    },
    {
      code: 6016;
      name: 'InvalidTokenAccount';
      msg: 'InvalidTokenAccount';
    },
    {
      code: 6017;
      name: 'InvalidPayer';
      msg: 'InvalidPayer';
    },
    {
      code: 6018;
      name: 'ShouldBeActive';
      msg: 'ShouldBeActive';
    },
    {
      code: 6019;
      name: 'CantMakeZeroOrders';
      msg: "Can't make 0 orders";
    },
    {
      code: 6020;
      name: 'OnlyClassicAuthority';
      msg: 'OnlyClassicAuthority';
    },
    {
      code: 6021;
      name: 'NotValidAuthorityAdapter';
      msg: 'NotValidAuthorityAdapter';
    },
    {
      code: 6022;
      name: 'UserDoesntHaveAuthority';
      msg: 'UserDoesntHaveAuthority';
    },
    {
      code: 6023;
      name: 'WrongSeed';
      msg: 'WrongSeed';
    },
    {
      code: 6024;
      name: 'CanDepositSolOnlyToTokenToNft';
      msg: 'CanDepositSolOnlyToTokenToNft';
    },
    {
      code: 6025;
      name: 'MaxAmountOfOrdersSucceeded';
      msg: 'MaxAmountOfOrdersSucceeded';
    },
    {
      code: 6026;
      name: 'CanDepositNftOnlyToNftToToken';
      msg: 'CanDepositNftOnlyToNftToToken';
    },
    {
      code: 6027;
      name: 'TokenAccountDoesntContainNft';
      msg: 'TokenAccountDoesntContainNft';
    },
    {
      code: 6028;
      name: 'MarketAuthorityIncorrect';
      msg: 'MarketAuthorityIncorrect';
    },
    {
      code: 6029;
      name: 'CanAddWhitelistOnlyToInitializingMarket';
      msg: 'CanAddWhitelistOnlyToInitializingMarket';
    },
    {
      code: 6030;
      name: 'CanPutPairsOnlyToAvailableMarkets';
      msg: 'CanPutPairsOnlyToAvailableMarkets';
    },
    {
      code: 6031;
      name: 'PairAndNftValidationMarketDoesntMatch';
      msg: 'PairAndNftValidationMarketDoesntMatch';
    },
    {
      code: 6032;
      name: 'OnlyMarketScopeSupported';
      msg: 'OnlyMarketScopeSupported';
    },
    {
      code: 6033;
      name: 'NotWhitelistedNftForThisMarket';
      msg: 'NotWhitelistedNftForThisMarket';
    },
    {
      code: 6034;
      name: 'CanDepositOnlyToLiquidityProvision';
      msg: 'CanDepositOnlyToLiquidityProvision';
    },
    {
      code: 6035;
      name: 'NftBoxDoesntMatchPair';
      msg: 'NftBoxDoesntMatchPair';
    },
    {
      code: 6036;
      name: 'NftBoxShouldBeActive';
      msg: 'NftBoxShouldBeActive';
    },
    {
      code: 6037;
      name: 'NftBoxDoesntMatchMint';
      msg: 'NftBoxDoesntMatchMint';
    },
    {
      code: 6038;
      name: 'CantBuyNftFromTokenForNft';
      msg: 'CantBuyNftFromTokenForNft';
    },
    {
      code: 6039;
      name: 'OnlyTokenForNftIsEligibleForThisSell';
      msg: 'OnlyTokenForNftIsEligibleForThisSell';
    },
    {
      code: 6040;
      name: 'NoBuyOrdersOnThisPair';
      msg: 'NoBuyOrdersOnThisPair';
    },
    {
      code: 6041;
      name: 'OnlyLiquidityProvisionIsEligibleForThisSell';
      msg: 'OnlyLiquidityProvisionIsEligibleForThisSell';
    },
    {
      code: 6042;
      name: 'OnlyTokenForNftIsEligibleForThisWithdrawal';
      msg: 'OnlyTokenForNftIsEligibleForThisWithdrawal';
    },
    {
      code: 6043;
      name: 'OnlyNftForTokenIsEligibleForThisWithdrawal';
      msg: 'OnlyNftForTokenIsEligibleForThisWithdrawal';
    },
    {
      code: 6044;
      name: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal';
      msg: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal';
    },
    {
      code: 6045;
      name: 'InstructionIsNotSupported';
      msg: 'InstructionIsNotSupported';
    },
    {
      code: 6046;
      name: 'CanTradeOnlyWithPairsOnMarket';
      msg: 'CanTradeOnlyWithPairsOnMarket';
    },
    {
      code: 6047;
      name: 'NoLiquidityFeesToWithdraw';
      msg: 'NoLiquidityFeesToWithdraw';
    },
    {
      code: 6048;
      name: 'MaxAmountToPayExceeded';
      msg: 'MaxAmountToPayExceeded';
    },
    {
      code: 6049;
      name: 'GettingLessThanMinAmountToGet';
      msg: 'GettingLessThanMinAmountToGet';
    },
    {
      code: 6050;
      name: 'UserDoesntHaveHadomarketAuthority';
      msg: 'UserDoesntHaveHadomarketAuthority';
    },
    {
      code: 6051;
      name: 'HadomarketAlreadyFinished';
      msg: 'HadomarketAlreadyFinished';
    },
    {
      code: 6052;
      name: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs';
      msg: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs';
    },
    {
      code: 6053;
      name: 'CanModifyOnlyToVirtualOrInitializingPairs';
      msg: 'CanModifyOnlyToVirtualOrInitializingPairs';
    },
    {
      code: 6054;
      name: 'LiquidityProvisionOrderPairDoesntMatch';
      msg: 'LiquidityProvisionOrderPairDoesntMatch';
    },
    {
      code: 6055;
      name: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction';
      msg: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction';
    },
    {
      code: 6056;
      name: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction';
      msg: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction';
    },
    {
      code: 6057;
      name: 'LiquidityProvisionOrderNotEdge';
      msg: 'LiquidityProvisionOrderNotEdge';
    },
    {
      code: 6058;
      name: 'NftPairBoxNotParsingFromRemaining';
      msg: 'NftPairBoxNotParsingFromRemaining';
    },
    {
      code: 6059;
      name: 'VaultNftTokenAccountNotParsingFromRemaining';
      msg: 'VaultNftTokenAccountNotParsingFromRemaining';
    },
    {
      code: 6060;
      name: 'UserTokenAccountNotParsingFromRemaining';
      msg: 'UserTokenAccountNotParsingFromRemaining';
    },
    {
      code: 6061;
      name: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs';
      msg: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs';
    },
    {
      code: 6062;
      name: 'VaultDoesntMatchBox';
      msg: 'VaultDoesntMatchBox';
    },
    {
      code: 6063;
      name: 'WithdrawingOnlyBuyOrdersPairs';
      msg: 'WithdrawingOnlyBuyOrdersPairs';
    },
    {
      code: 6064;
      name: 'WithdrawingOnlySellOrdersPairs';
      msg: 'WithdrawingOnlySellOrdersPairs';
    },
    {
      code: 6065;
      name: 'LiquidityProvisionOrderIsWithdrawn';
      msg: 'LiquidityProvisionOrderIsWithdrawn';
    },
    {
      code: 6066;
      name: 'LiquidityProvisionOrderIsNotCorrectOrderForPair';
      msg: 'LiquidityProvisionOrderIsNotCorrectOrderForPair';
    },
    {
      code: 6067;
      name: 'OnlyMarketVirtualPairsCanBeTokenized';
      msg: 'OnlyMarketVirtualPairsCanBeTokenized';
    },
    {
      code: 6068;
      name: 'OnlyLiquidityProvisionPairsCanBeTokenized';
      msg: 'OnlyLiquidityProvisionPairsCanBeTokenized';
    },
    {
      code: 6069;
      name: 'OnlyInitializingPairsCanBePutOnMarket';
      msg: 'OnlyInitializingPairsCanBePutOnMarket';
    },
    {
      code: 6070;
      name: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair';
      msg: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair';
    },
    {
      code: 6071;
      name: 'OnlyVirtualLpOrderCanBeTokenized';
      msg: 'OnlyVirtualLpOrderCanBeTokenized';
    },
    {
      code: 6072;
      name: 'OnlyTokenizedLpOrdersCanWithdrawFees';
      msg: 'OnlyTokenizedLpOrdersCanWithdrawFees';
    },
    {
      code: 6073;
      name: 'UserLpTokenAccountDoesntContainNft';
      msg: 'UserLpTokenAccountDoesntContainNft';
    },
    {
      code: 6074;
      name: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction';
      msg: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction';
    },
    {
      code: 6075;
      name: 'LpTokenMintDoesntMatchOrder';
      msg: 'LpTokenMintDoesntMatchOrder';
    },
    {
      code: 6076;
      name: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft';
      msg: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft';
    },
    {
      code: 6077;
      name: 'CantSetBidCapSmallerThanMarketMinimum';
      msg: 'CantSetBidCapSmallerThanMarketMinimum';
    },
    {
      code: 6078;
      name: 'CantDepositNftWithNotMarketDecimals';
      msg: 'CantDepositNftWithNotMarketDecimals';
    },
    {
      code: 6079;
      name: 'FndAmountCantExceedBidCap';
      msg: 'FndAmountCantExceedBidCap';
    },
    {
      code: 6080;
      name: 'CantBuyMoreThatRemainingBidSettlement';
      msg: 'CantBuyMoreThatRemainingBidSettlement';
    },
    {
      code: 6081;
      name: 'CantBuyMoreThanActiveTokensAmount';
      msg: 'CantBuyMoreThanActiveTokensAmount';
    },
    {
      code: 6082;
      name: 'CantSellMoreThanActiveTokensAmount';
      msg: 'CantSellMoreThanActiveTokensAmount';
    },
    {
      code: 6083;
      name: 'CantDepositMoreThanBidCap';
      msg: 'CantDepositMoreThanBidCap';
    },
    {
      code: 6084;
      name: 'CantDepositZero';
      msg: 'CantDepositZero';
    },
    {
      code: 6085;
      name: 'CantWithdrawMoreThanBidCap';
      msg: 'CantWithdrawMoreThanBidCap';
    },
    {
      code: 6086;
      name: 'CantWithdrawZero';
      msg: 'CantWithdrawZero';
    },
    {
      code: 6087;
      name: 'CantWithdrawMoreThanNftBoxActiveTokens';
      msg: 'CantWithdrawMoreThanNftBoxActiveTokens';
    },
    {
      code: 6088;
      name: 'CantSetReturnAmountLessThanMinimum';
      msg: 'CantSetReturnAmountLessThanMinimum';
    },
    {
      code: 6089;
      name: 'CantSetBondDuratonLessThanMinimum';
      msg: 'CantSetBondDuratonLessThanMinimum';
    },
    {
      code: 6090;
      name: 'CanAddCollateralOnlyToInitializedFBond';
      msg: 'CanAddCollateralOnlyToInitializedFBond';
    },
    {
      code: 6091;
      name: 'OnlyIssuerCanAddCollateralBox';
      msg: 'OnlyIssuerCanAddCollateralBox';
    },
    {
      code: 6092;
      name: 'FBondTokenMintDoesntMatch';
      msg: 'FBondTokenMintDoesntMatch';
    },
    {
      code: 6093;
      name: 'CanActivateOnlyInitializedBond';
      msg: 'CanActivateOnlyInitializedBond';
    },
    {
      code: 6094;
      name: 'BondAuthorityIssuerDoesntMatch';
      msg: 'BondAuthorityIssuerDoesntMatch';
    },
    {
      code: 6095;
      name: 'CanRepayOnlyActivatedBond';
      msg: 'CanRepayOnlyActivatedBond';
    },
    {
      code: 6096;
      name: 'CanRedeemOnlyRepaidFBond';
      msg: 'CanRedeemOnlyRepaidFBond';
    },
    {
      code: 6097;
      name: 'CantSetNotRoundedAmountToReturn';
      msg: 'CantSetNotRoundedAmountToReturn';
    },
    {
      code: 6098;
      name: 'CanGetOnlyRepaidCollateral';
      msg: 'CanGetOnlyRepaidCollateral';
    },
    {
      code: 6099;
      name: 'CollateralTokenMintDoesntMatchBox';
      msg: 'CollateralTokenMintDoesntMatchBox';
    },
    {
      code: 6100;
      name: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation';
      msg: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation';
    },
    {
      code: 6101;
      name: 'WrongAdmin';
      msg: 'WrongAdmin';
    },
    {
      code: 6102;
      name: 'CanBurnEntireSupplyOnlyForActiveBond';
      msg: 'CanBurnEntireSupplyOnlyForActiveBond';
    },
    {
      code: 6103;
      name: 'UserDoesntOwnAllSupply';
      msg: 'UserDoesntOwnAllSupply';
    },
    {
      code: 6104;
      name: 'WrongAllSupplyBurner';
      msg: 'WrongAllSupplyBurner';
    },
    {
      code: 6105;
      name: 'LoanToValueFilterOutOfBound';
      msg: 'LoanToValueFilterOutOfBound';
    },
    {
      code: 6106;
      name: 'ValidationDoesntMatchPair';
      msg: 'ValidationDoesntMatchPair';
    },
    {
      code: 6107;
      name: 'CollateralBoxDoesntBelongFbond';
      msg: 'CollateralBoxDoesntBelongFbond';
    },
    {
      code: 6108;
      name: 'FraktMarketDoesntMatchHadoMarketRegistry';
      msg: 'FraktMarketDoesntMatchHadoMarketRegistry';
    },
    {
      code: 6109;
      name: 'FraktMarketNotActive';
      msg: 'FraktMarketNotActive';
    },
    {
      code: 6110;
      name: 'OracleFloorDoesntMatchFraktMarket';
      msg: 'OracleFloorDoesntMatchFraktMarket';
    },
    {
      code: 6111;
      name: 'FraktMarketDoesntMatchWhitelistEntry';
      msg: 'FraktMarketDoesntMatchWhitelistEntry';
    },
    {
      code: 6112;
      name: 'ActualLoanToValueExceedsFilter';
      msg: 'ActualLoanToValueExceedsFilter';
    },
    {
      code: 6113;
      name: 'PairDoesntMatchHadomarket';
      msg: 'PairDoesntMatchHadomarket';
    },
    {
      code: 6114;
      name: 'ActualLoanDurationExceedsFilter';
      msg: 'ActualLoanDurationExceedsFilter';
    },
    {
      code: 6115;
      name: 'NftIsNotMasterEdition';
      msg: 'NftIsNotMasterEdition';
    },
    {
      code: 6116;
      name: 'NftValidationAdapterIsExpired';
      msg: 'NftValidationAdapterIsExpired';
    },
    {
      code: 6117;
      name: 'CustomValidationAdapterProgramDoesntMatchUser';
      msg: 'CustomValidationAdapterProgramDoesntMatchUser';
    },
    {
      code: 6118;
      name: 'OnlyAdminCanInitializeFlashLoanPool';
      msg: 'OnlyAdminCanInitializeFlashLoanPool';
    },
    {
      code: 6119;
      name: 'CantSetLoanFeePointsGreaterThanBasePoints';
      msg: 'CantSetLoanFeePointsGreaterThanBasePoints';
    },
    {
      code: 6120;
      name: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity';
      msg: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity';
    },
    {
      code: 6121;
      name: 'CantWithdrawMoreThanPoolBalance';
      msg: 'CantWithdrawMoreThanPoolBalance';
    },
    {
      code: 6122;
      name: 'CantBorrowAndRepayByCpi';
      msg: 'CantBorrowAndRepayByCpi';
    },
    {
      code: 6123;
      name: 'RepayAmountDoesntCorrespondBorrowAmount';
      msg: 'RepayAmountDoesntCorrespondBorrowAmount';
    },
    {
      code: 6124;
      name: 'TransactionDoesntContainRepayInstruction';
      msg: 'TransactionDoesntContainRepayInstruction';
    },
    {
      code: 6125;
      name: 'AlreadyBorrowing';
      msg: 'AlreadyBorrowing';
    },
    {
      code: 6126;
      name: 'WrongHadeswapProgramId';
      msg: 'WrongHadeswapProgramId';
    },
    {
      code: 6127;
      name: 'AmountToReturnIsHigherThanMax';
      msg: 'AmountToReturnIsHigherThanMax';
    },
    {
      code: 6128;
      name: 'AutocompoundNotSupportedYet';
      msg: 'AutocompoundNotSupportedYet';
    },
    {
      code: 6129;
      name: 'AutocompoundDepositIsNotActive';
      msg: 'AutocompoundDepositIsNotActive';
    },
    {
      code: 6130;
      name: 'AutocompoundDepositDoesntMatchPair';
      msg: 'AutocompoundDepositDoesntMatchPair';
    },
    {
      code: 6131;
      name: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair';
      msg: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair';
    },
    {
      code: 6132;
      name: 'InvalidAssetReceiverTokenAccount';
      msg: 'InvalidAssetReceiverTokenAccount';
    },
    {
      code: 6133;
      name: 'AutoreceiveSolToUserFeatureNotEnabled';
      msg: 'AutoreceiveSolToUserFeatureNotEnabled';
    },
    {
      code: 6134;
      name: 'AutocompoundFeatureNotEnabled';
      msg: 'AutocompoundFeatureNotEnabled';
    },
    {
      code: 6135;
      name: 'InvalidAssetReceiver';
      msg: 'InvalidAssetReceiver';
    },
    {
      code: 6136;
      name: 'BondCollateralOrSolReceiverNotUser';
      msg: 'BondCollateralOrSolReceiverNotUser';
    },
    {
      code: 6137;
      name: 'OnlyBuyPairsAreSupported';
      msg: 'OnlyBuyPairsAreSupported';
    },
    {
      code: 6138;
      name: 'CanModifyOnlyTokenForNftPairs';
      msg: 'CanModifyOnlyTokenForNftPairs';
    },
    {
      code: 6139;
      name: 'OraclePriceIsStale';
      msg: 'OraclePriceIsStale';
    },
    {
      code: 6140;
      name: 'NftLiquidationTimeNotPassed';
      msg: 'NftLiquidationTimeNotPassed';
    },
    {
      code: 6141;
      name: 'CanDepositReturnedSolOnlyToLiquidatingBond';
      msg: 'CanDepositReturnedSolOnlyToLiquidatingBond';
    },
    {
      code: 6142;
      name: 'Debugger';
      msg: 'Debugger';
    },
    {
      code: 6143;
      name: 'NotSupportedSellCase';
      msg: 'NotSupportedSellCase';
    },
    {
      code: 6144;
      name: 'CollateralTokenMintDoesntMatchAutocompoundDeposit';
      msg: 'CollateralTokenMintDoesntMatchAutocompoundDeposit';
    },
    {
      code: 6145;
      name: 'NotCorrectAutocompoundType';
      msg: 'NotCorrectAutocompoundType';
    },
    {
      code: 6146;
      name: 'BadRuleSet';
      msg: 'BadRuleSet';
    },
    {
      code: 6147;
      name: 'DelegateBuilderFailed';
      msg: 'DelegateBuilderFailed';
    },
    {
      code: 6148;
      name: 'LockBuilderFailed';
      msg: 'LockBuilderFailed';
    },
    {
      code: 6149;
      name: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed';
      msg: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed';
    },
    {
      code: 6150;
      name: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit';
      msg: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit';
    },
    {
      code: 6151;
      name: 'CollateralOwnerDoesntMatchCollateralTokenAccount';
      msg: 'CollateralOwnerDoesntMatchCollateralTokenAccount';
    },
    {
      code: 6152;
      name: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver';
      msg: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver';
    },
  ];
};

export const IDL: Bonds = {
  version: '0.1.0',
  name: 'bonds',
  instructions: [
    {
      name: 'initializeFbond',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'FBondBumps',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'addCollateralBox',
      accounts: [
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'activateFbond',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'FBondParams',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'repayFbond',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'redeemFbonds',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'getRepaidCollateralPnft',
      accounts: [
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'authorizationData',
          type: {
            option: {
              defined: 'AuthorizationDataLocal',
            },
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'getRepaidCollateral',
      accounts: [
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'liquidateFbond',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondCollateralOrSolReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newAmountToReturn',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'rescueLostEscrowlessCollateral',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'depositReturnedSolToLiquidatingBond',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newAmountToReturn',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'extractCollateralToLiquidatePnft',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'authorizationData',
          type: {
            option: {
              defined: 'AuthorizationDataLocal',
            },
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'liquidateReceivingNftFbondPnft',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'authorizationData',
          type: {
            option: {
              defined: 'AuthorizationDataLocal',
            },
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'extractCollateralToLiquidate',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondCollateralOrSolReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'updateActualReturnedAmount',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newAmountToReturn',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'setBondCollateralOrSolReceiver',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondCollateralOrSolReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'unsetBondCollateralOrSolReceiver',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'createBondWithSingleCollateralPnft',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ownerTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destTokenRecord',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorizationRulesProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'FBondBumps',
          },
        },
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
        {
          name: 'params',
          type: {
            defined: 'FBondParams',
          },
        },
        {
          name: 'authorizationData',
          type: {
            option: {
              defined: 'AuthorizationDataLocal',
            },
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'createBondWithSingleCollateral',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'FBondBumps',
          },
        },
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
        {
          name: 'params',
          type: {
            defined: 'FBondParams',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'createValidation',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanToValueFilter',
          type: 'u64',
        },
        {
          name: 'durationFilter',
          type: 'u64',
        },
        {
          name: 'maxReturnAmountFilter',
          type: 'u64',
        },
        {
          name: 'bondFeatures',
          type: {
            defined: 'BondFeatures',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'updateValidation',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanToValueFilter',
          type: 'u64',
        },
        {
          name: 'durationFilter',
          type: 'u64',
        },
        {
          name: 'maxReturnAmountFilter',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'boundHadoMarketToFraktMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'initializePair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'pairAuthorityAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAssetReceiver',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fundsTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetReceiverTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'PairBumps',
          },
        },
        {
          name: 'params',
          type: {
            defined: 'PairParams',
          },
        },
        {
          name: 'bondingCurveType',
          type: {
            defined: 'BondingCurveType',
          },
        },
        {
          name: 'pairType',
          type: {
            defined: 'PairType',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'createClassicAuthorityAdapter',
      accounts: [
        {
          name: 'authorityAdapter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'depositSolToPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfTokensToBuy',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'validateNft',
      accounts: [
        {
          name: 'nftValidationAdapter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validationWhitelist',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'depositNftToPair',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftValidationAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'initializeHadoMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validationAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pairTokenMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'marketParams',
          type: {
            defined: 'InitializeHadoMarketParams',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'finishHadoMarket',
      accounts: [
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'addClassicWhitelistToMarket',
      accounts: [
        {
          name: 'validationWhitelist',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'hadoMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'whitelistedAddress',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'whitelistType',
          type: {
            defined: 'NftValidationWhitelistType',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'depositLiquidityToPair',
      accounts: [
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftValidationAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'putPairOnMarket',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'buyNftFromPair',
      accounts: [
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'maxAmountToPay',
          type: 'u64',
        },
        {
          name: 'skipFailed',
          type: 'bool',
        },
        {
          name: 'amountToBuy',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'sellNftToLiquidityPair',
      accounts: [
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftValidationAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'newVaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'minAmountToGet',
          type: 'u64',
        },
        {
          name: 'skipFailed',
          type: 'bool',
        },
        {
          name: 'amountToSell',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawSolFromPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountOfTokensToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawNftFromPair',
      accounts: [
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawLiquidityFromBalancedPair',
      accounts: [
        {
          name: 'nftPairBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'modifyPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'PairParams',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawLiquidityFromBuyOrdersPair',
      accounts: [
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawLiquidityFromSellOrdersPair',
      accounts: [
        {
          name: 'nftPairBoxFirst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMintFirst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultNftTokenAccountFirst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccountFirst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftPairBoxSecond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMintSecond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultNftTokenAccountSecond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccountSecond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawLiquidityOrderVirtualFees',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'makeLiquidityPairTokenized',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'closeVirtualNftSwapPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'customValidateNft',
      accounts: [
        {
          name: 'nftValidationAdapter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'whitelistedAddress',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'adapterProgramSigner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'duration',
          type: 'u64',
        },
        {
          name: 'nftValidationWhitelistType',
          type: {
            defined: 'NftValidationWhitelistType',
          },
        },
        {
          name: 'scopeType',
          type: {
            defined: 'ScopeType',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'validateAndSellNftToTokenToNftPair',
      accounts: [
        {
          name: 'validation',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'collateralBox',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'oracleFloor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'assetReceiverOrAutocompoundDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftUserTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'proof',
          type: {
            vec: {
              array: ['u8', 32],
            },
          },
        },
        {
          name: 'minAmountToGet',
          type: 'u64',
        },
        {
          name: 'skipFailed',
          type: 'bool',
        },
        {
          name: 'amountToSell',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'initializeAndDepositTokenForNftPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'pairAuthorityAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAssetReceiver',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiverTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'PairBumps',
          },
        },
        {
          name: 'params',
          type: {
            defined: 'PairParams',
          },
        },
        {
          name: 'bondingCurveType',
          type: {
            defined: 'BondingCurveType',
          },
        },
        {
          name: 'pairType',
          type: {
            defined: 'PairType',
          },
        },
        {
          name: 'amountOfTokensToBuy',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'initializeDepositAndCreateValidationTokenForNftPair',
      accounts: [
        {
          name: 'pair',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'hadoMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'pairAuthorityAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAdapterProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'partialAssetReceiver',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiverTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorityAdapter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'validation',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'PairBumps',
          },
        },
        {
          name: 'params',
          type: {
            defined: 'PairParams',
          },
        },
        {
          name: 'bondingCurveType',
          type: {
            defined: 'BondingCurveType',
          },
        },
        {
          name: 'pairType',
          type: {
            defined: 'PairType',
          },
        },
        {
          name: 'amountOfTokensToBuy',
          type: 'u64',
        },
        {
          name: 'loanToValueFilter',
          type: 'u64',
        },
        {
          name: 'durationFilter',
          type: 'u64',
        },
        {
          name: 'maxReturnAmountFilter',
          type: 'u64',
        },
        {
          name: 'bondFeatures',
          type: {
            defined: 'BondFeatures',
          },
        },
      ],
      returns: undefined,
    },
    {
      name: 'initializeFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'loanFeePoints',
          type: 'u16',
        },
      ],
      returns: undefined,
    },
    {
      name: 'depositSolToFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToDeposit',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'withdrawSolFromFlashLoanPool',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToWithdraw',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'takeFlashLoan',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToBorrow',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'repayFlashLoan',
      accounts: [
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instructions',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmountToRepay',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'mortgageBuyNftSellBondToTokenForNftPair',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'bondProgramAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userFbondTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralBox',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'validation',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadoRegistry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'fraktMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'oracleFloor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'whitelistEntry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'crossMintAmmPairFundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolFundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapNftPairBox',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadeswapPair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapPairFundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapPairNftsOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'hadeswapPairFeeSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapPairVaultNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapPairAssetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapProtocolFeeReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'hadeswapProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'editionInfo',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bumps',
          type: {
            defined: 'FBondBumps',
          },
        },
        {
          name: 'amountToDeposit',
          type: 'u64',
        },
        {
          name: 'params',
          type: {
            defined: 'FBondParams',
          },
        },
        {
          name: 'proof',
          type: {
            vec: {
              array: ['u8', 32],
            },
          },
        },
        {
          name: 'minAmountToGet',
          type: 'u64',
        },
        {
          name: 'skipFailed',
          type: 'bool',
        },
        {
          name: 'amountToSell',
          type: 'u64',
        },
        {
          name: 'maxAmountToPay',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
    {
      name: 'redeemFbondsFromAutocompoundToPair',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'assetReceiver',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'redeemFbondsFromAutocompoundToUser',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'redeemFbondsAutoreceiveSol',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'returnFundsOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'redeemAutocompoundAndAutoreceiveLiquidatedNft',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'adminTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiver',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'assetReceiverTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: undefined,
    },
    {
      name: 'claimFbondsFromAutocompoundDeposit',
      accounts: [
        {
          name: 'fbond',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fbondTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundDeposit',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'autocompoundBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pair',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'fundsSolVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userBondsTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToClaim',
          type: 'u64',
        },
      ],
      returns: undefined,
    },
  ],
  accounts: [
    {
      name: 'adapterWhitelist',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'whitelistedAdapterProgram',
            type: 'publicKey',
          },
          {
            name: 'adapterType',
            type: {
              defined: 'AdapterType',
            },
          },
        ],
      },
    },
    {
      name: 'authorityAdapter',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'authorityAdapterProgram',
            type: 'publicKey',
          },
          {
            name: 'authorityOwner',
            type: 'publicKey',
          },
          {
            name: 'authorityType',
            type: {
              defined: 'AuthorityAdapterType',
            },
          },
          {
            name: 'expiringAt',
            type: 'u64',
          },
          {
            name: 'authorityState',
            type: {
              defined: 'AuthorityState',
            },
          },
        ],
      },
    },
    {
      name: 'autocompoundDeposit',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fraktBondState',
            type: {
              defined: 'AutocompoundDepositState',
            },
          },
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'amountOfBonds',
            type: 'u64',
          },
          {
            name: 'depositedAt',
            type: 'u64',
          },
          {
            name: 'autocompoundType',
            type: {
              defined: 'AutocompoundType',
            },
          },
          {
            name: 'fbondTokenMint',
            type: 'publicKey',
          },
          {
            name: 'solAmount',
            type: 'u64',
          },
          {
            name: 'collateralTokenMint',
            type: 'publicKey',
          },
          {
            name: 'redeemedAt',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'bondsNftValidationAdapterRaw',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'scopeType',
            type: {
              defined: 'ScopeType',
            },
          },
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'nftValidationProgram',
            type: 'publicKey',
          },
          {
            name: 'nftValidationWhitelistType',
            type: {
              defined: 'NftValidationWhitelistType',
            },
          },
          {
            name: 'whitelistedAddress',
            type: 'publicKey',
          },
          {
            name: 'nftValidationDurationType',
            type: {
              defined: 'NftValidationDurationType',
            },
          },
          {
            name: 'validUntil',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'classicValidationWhitelist',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'whitelistType',
            type: {
              defined: 'NftValidationWhitelistType',
            },
          },
          {
            name: 'whitelistedAddress',
            type: 'publicKey',
          },
          {
            name: 'root',
            type: {
              array: ['u8', 32],
            },
          },
        ],
      },
    },
    {
      name: 'collateralBox',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fbond',
            type: 'publicKey',
          },
          {
            name: 'collateralBoxType',
            type: {
              defined: 'CollateralBoxType',
            },
          },
          {
            name: 'collateralTokenMint',
            type: 'publicKey',
          },
          {
            name: 'collateralTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'collateralAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'flashLoanPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'borrowing',
            type: 'bool',
          },
          {
            name: 'balance',
            type: 'u64',
          },
          {
            name: 'loanFeePoints',
            type: 'u16',
          },
        ],
      },
    },
    {
      name: 'fraktBond',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fraktBondState',
            type: {
              defined: 'FraktBondState',
            },
          },
          {
            name: 'bondProgramAuthoritySeed',
            type: 'u8',
          },
          {
            name: 'collateralBoxesQuantity',
            type: 'u64',
          },
          {
            name: 'returnTokenMint',
            type: 'publicKey',
          },
          {
            name: 'returnTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'amountToReturn',
            type: 'u64',
          },
          {
            name: 'actualReturnedAmount',
            type: 'u64',
          },
          {
            name: 'returnFundsOwnerSeed',
            type: 'u8',
          },
          {
            name: 'fbondTokenMint',
            type: 'publicKey',
          },
          {
            name: 'fbondTokenSupply',
            type: 'u64',
          },
          {
            name: 'activatedAt',
            type: 'u64',
          },
          {
            name: 'liquidatingAt',
            type: 'u64',
          },
          {
            name: 'fbondIssuer',
            type: 'publicKey',
          },
          {
            name: 'bondCollateralOrSolReceiver',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadoMarketRegistry',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'fraktMarket',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'hadoMarket',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'marketAuthority',
            type: 'publicKey',
          },
          {
            name: 'marketState',
            type: {
              defined: 'MarketState',
            },
          },
          {
            name: 'marketTrustType',
            type: {
              defined: 'MarketTrustType',
            },
          },
          {
            name: 'pairValidationType',
            type: {
              defined: 'PairValidationType',
            },
          },
          {
            name: 'validationAdapterProgram',
            type: 'publicKey',
          },
          {
            name: 'minBidCap',
            type: 'u64',
          },
          {
            name: 'marketDecimals',
            type: 'u64',
          },
          {
            name: 'pairTokenType',
            type: {
              defined: 'PairTokenType',
            },
          },
          {
            name: 'pairTokenMint',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'nftPairBox',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'nftMint',
            type: 'publicKey',
          },
          {
            name: 'nftBoxType',
            type: {
              defined: 'NftBoxType',
            },
          },
          {
            name: 'vaultTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'activeTokensAmount',
            type: 'u64',
          },
          {
            name: 'status',
            type: {
              defined: 'NftBoxState',
            },
          },
        ],
      },
    },
    {
      name: 'nftSwapPair',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'pairType',
            type: {
              defined: 'PairType',
            },
          },
          {
            name: 'pairState',
            type: {
              defined: 'PairState',
            },
          },
          {
            name: 'pairAuthorityType',
            type: {
              defined: 'PairAuthorityType',
            },
          },
          {
            name: 'pairAuthorityAdapterProgram',
            type: 'publicKey',
          },
          {
            name: 'lpTokensMint',
            type: 'publicKey',
          },
          {
            name: 'lpTokensInCirculation',
            type: 'u64',
          },
          {
            name: 'bondingCurve',
            type: {
              defined: 'BondingCurve',
            },
          },
          {
            name: 'baseSpotPrice',
            type: 'u64',
          },
          {
            name: 'fee',
            type: 'u64',
          },
          {
            name: 'mathCounter',
            type: 'i64',
          },
          {
            name: 'currentSpotPrice',
            type: 'u64',
          },
          {
            name: 'bidCap',
            type: 'u64',
          },
          {
            name: 'bidSettlement',
            type: 'i64',
          },
          {
            name: 'edgeSettlement',
            type: 'u64',
          },
          {
            name: 'feeTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'feeVaultSeed',
            type: 'u8',
          },
          {
            name: 'solOrTokenFeeAmount',
            type: 'u64',
          },
          {
            name: 'fundsTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'fundsSolVaultSeed',
            type: 'u8',
          },
          {
            name: 'fundsSolOrTokenBalance',
            type: 'u64',
          },
          {
            name: 'initialFundsSolOrTokenBalance',
            type: 'u64',
          },
          {
            name: 'buyOrdersQuantity',
            type: 'u64',
          },
          {
            name: 'nftsSeed',
            type: 'u8',
          },
          {
            name: 'sellOrdersCount',
            type: 'u64',
          },
          {
            name: 'lastTransactedAt',
            type: 'u64',
          },
          {
            name: 'concentrationIndex',
            type: 'u64',
          },
          {
            name: 'assetReceiver',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'nftValidationAdapter',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'hadoMarket',
            type: 'publicKey',
          },
          {
            name: 'scopeType',
            type: {
              defined: 'ScopeType',
            },
          },
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'nftValidationProgram',
            type: 'publicKey',
          },
          {
            name: 'nftValidationWhitelistType',
            type: {
              defined: 'NftValidationWhitelistType',
            },
          },
          {
            name: 'whitelistedAddress',
            type: 'publicKey',
          },
          {
            name: 'nftValidationDurationType',
            type: {
              defined: 'NftValidationDurationType',
            },
          },
          {
            name: 'root',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'validUntil',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'protocolAdminMultisig',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'protocolSettings',
            type: 'publicKey',
          },
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'weight',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'protocolSettingsV1',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'protocolFee',
            type: 'u64',
          },
          {
            name: 'protocolFeeMultiplier',
            type: 'u64',
          },
          {
            name: 'maxFee',
            type: 'u64',
          },
          {
            name: 'protocolFeeReceiver',
            type: 'publicKey',
          },
          {
            name: 'adminThresholdAmountMultisig',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'validation',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'pair',
            type: 'publicKey',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'loanToValueFilter',
            type: 'u64',
          },
          {
            name: 'durationFilter',
            type: 'u64',
          },
          {
            name: 'maxReturnAmountFilter',
            type: 'u64',
          },
          {
            name: 'bondFeatures',
            type: {
              defined: 'BondFeatures',
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'FBondParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountToReturn',
            type: 'u64',
          },
          {
            name: 'bondDuration',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'FBondBumps',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bondProgramAuthoritySeed',
            type: 'u8',
          },
          {
            name: 'returnFundsOwnerSeed',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'InitializeHadoMarketParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'minBidCap',
            type: 'u64',
          },
          {
            name: 'marketDecimals',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'PairParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'delta',
            type: 'u64',
          },
          {
            name: 'spotPrice',
            type: 'u64',
          },
          {
            name: 'fee',
            type: 'u64',
          },
          {
            name: 'bidCap',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'PairBumps',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'fundsSolVaultSeed',
            type: 'u8',
          },
          {
            name: 'feeVaultSeed',
            type: 'u8',
          },
          {
            name: 'nftsSeed',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'BondingCurve',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'delta',
            type: 'u64',
          },
          {
            name: 'bondingType',
            type: {
              defined: 'BondingCurveType',
            },
          },
        ],
      },
    },
    {
      name: 'AuthorizationDataLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'payload',
            type: {
              vec: {
                defined: 'TaggedPayload',
              },
            },
          },
        ],
      },
    },
    {
      name: 'TaggedPayload',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'payload',
            type: {
              defined: 'PayloadTypeLocal',
            },
          },
        ],
      },
    },
    {
      name: 'SeedsVecLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'seeds',
            type: {
              vec: 'bytes',
            },
          },
        ],
      },
    },
    {
      name: 'ProofInfoLocal',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'proof',
            type: {
              vec: {
                array: ['u8', 32],
              },
            },
          },
        ],
      },
    },
    {
      name: 'AdapterType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Validation',
          },
          {
            name: 'Authority',
          },
          {
            name: 'Partial',
          },
        ],
      },
    },
    {
      name: 'AuthorityAdapterType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'OneTime',
          },
          {
            name: 'Persistent',
          },
        ],
      },
    },
    {
      name: 'AuthorityState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Active',
          },
          {
            name: 'Used',
          },
          {
            name: 'Expired',
          },
          {
            name: 'Revoked',
          },
        ],
      },
    },
    {
      name: 'AutocompoundDepositState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NotActive',
          },
          {
            name: 'Active',
          },
        ],
      },
    },
    {
      name: 'AutocompoundType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Autocompound',
          },
          {
            name: 'AutoreceiveSol',
          },
          {
            name: 'AutocompoundAndReceiveNft',
          },
        ],
      },
    },
    {
      name: 'CollateralBoxType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Escrow',
          },
          {
            name: 'Escrowless',
          },
        ],
      },
    },
    {
      name: 'FraktBondState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initialized',
          },
          {
            name: 'Active',
          },
          {
            name: 'Repaid',
          },
          {
            name: 'Liquidating',
          },
          {
            name: 'Liquidated',
          },
        ],
      },
    },
    {
      name: 'MarketTrustType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Unverified',
          },
          {
            name: 'Verified',
          },
        ],
      },
    },
    {
      name: 'MarketState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initializing',
          },
          {
            name: 'Available',
          },
        ],
      },
    },
    {
      name: 'PairValidationType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'ClassicValidation',
          },
          {
            name: 'CustomValidation',
          },
        ],
      },
    },
    {
      name: 'PairTokenType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NativeSol',
          },
          {
            name: 'Spl',
          },
        ],
      },
    },
    {
      name: 'NftBoxState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NotActive',
          },
          {
            name: 'Active',
          },
        ],
      },
    },
    {
      name: 'NftBoxType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Escrow',
          },
          {
            name: 'Escrowless',
          },
        ],
      },
    },
    {
      name: 'PairType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'TokenForNft',
          },
          {
            name: 'NftForToken',
          },
          {
            name: 'LiquidityProvision',
          },
        ],
      },
    },
    {
      name: 'PairState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Initializing',
          },
          {
            name: 'OnMarketVirtual',
          },
          {
            name: 'OnMarketTokenized',
          },
          {
            name: 'Frozen',
          },
        ],
      },
    },
    {
      name: 'PairAuthorityType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'ClassicAuthority',
          },
          {
            name: 'CustomAuthority',
          },
        ],
      },
    },
    {
      name: 'PartialSettings',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'CustomPartial',
          },
        ],
      },
    },
    {
      name: 'BondingCurveType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Linear',
          },
          {
            name: 'Exponential',
          },
        ],
      },
    },
    {
      name: 'ScopeType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Market',
          },
          {
            name: 'Pair',
          },
        ],
      },
    },
    {
      name: 'NftValidationDurationType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Finite',
          },
          {
            name: 'Infinite',
          },
        ],
      },
    },
    {
      name: 'NftValidationWhitelistType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Creator',
          },
          {
            name: 'Nft',
          },
          {
            name: 'MerkleTree',
          },
        ],
      },
    },
    {
      name: 'BondFeatures',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Autocompound',
          },
          {
            name: 'ReceiveNftOnLiquidation',
          },
          {
            name: 'AutoreceiveSol',
          },
          {
            name: 'AutoCompoundAndReceiveNft',
          },
          {
            name: 'AutoReceiveAndReceiveNft',
          },
        ],
      },
    },
    {
      name: 'PayloadTypeLocal',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Pubkey',
            fields: ['publicKey'],
          },
          {
            name: 'Seeds',
            fields: [
              {
                defined: 'SeedsVecLocal',
              },
            ],
          },
          {
            name: 'MerkleProof',
            fields: [
              {
                defined: 'ProofInfoLocal',
              },
            ],
          },
          {
            name: 'Number',
            fields: ['u64'],
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'MetadataDoesntExist',
      msg: 'MetadataDoesntExist',
    },
    {
      code: 6001,
      name: 'DerivedKeyInvalid',
      msg: 'DerivedKeyInvalid',
    },
    {
      code: 6002,
      name: 'InvalidCollectionDetails',
      msg: 'InvalidCollectionDetails',
    },
    {
      code: 6003,
      name: 'InvalidCollection',
      msg: 'InvalidCollection',
    },
    {
      code: 6004,
      name: 'InvalidCollectionMint',
      msg: 'InvalidCollectionMint',
    },
    {
      code: 6005,
      name: 'NftNotVerified',
      msg: 'NftNotVerified',
    },
    {
      code: 6006,
      name: 'InvalidOwner',
      msg: 'InvalidOwner',
    },
    {
      code: 6007,
      name: 'InvalidDelta',
      msg: 'InvalidDelta',
    },
    {
      code: 6008,
      name: 'InvalidFee',
      msg: 'InvalidFee',
    },
    {
      code: 6009,
      name: 'InvalidPairType',
      msg: 'InvalidPairType',
    },
    {
      code: 6010,
      name: 'NotEnoughInTokenAccount',
      msg: 'NotEnoughInTokenAccount',
    },
    {
      code: 6011,
      name: 'InvalidMint',
      msg: 'InvalidMint',
    },
    {
      code: 6012,
      name: 'InvalidSolVault',
      msg: 'InvalidSolVault',
    },
    {
      code: 6013,
      name: 'InvalidFundingAmount',
      msg: 'InvalidFundingAmount',
    },
    {
      code: 6014,
      name: 'NotEnoughLamports',
      msg: 'NotEnoughLamports',
    },
    {
      code: 6015,
      name: 'InvalidJpegOwner',
      msg: 'InvalidJpegOwner',
    },
    {
      code: 6016,
      name: 'InvalidTokenAccount',
      msg: 'InvalidTokenAccount',
    },
    {
      code: 6017,
      name: 'InvalidPayer',
      msg: 'InvalidPayer',
    },
    {
      code: 6018,
      name: 'ShouldBeActive',
      msg: 'ShouldBeActive',
    },
    {
      code: 6019,
      name: 'CantMakeZeroOrders',
      msg: "Can't make 0 orders",
    },
    {
      code: 6020,
      name: 'OnlyClassicAuthority',
      msg: 'OnlyClassicAuthority',
    },
    {
      code: 6021,
      name: 'NotValidAuthorityAdapter',
      msg: 'NotValidAuthorityAdapter',
    },
    {
      code: 6022,
      name: 'UserDoesntHaveAuthority',
      msg: 'UserDoesntHaveAuthority',
    },
    {
      code: 6023,
      name: 'WrongSeed',
      msg: 'WrongSeed',
    },
    {
      code: 6024,
      name: 'CanDepositSolOnlyToTokenToNft',
      msg: 'CanDepositSolOnlyToTokenToNft',
    },
    {
      code: 6025,
      name: 'MaxAmountOfOrdersSucceeded',
      msg: 'MaxAmountOfOrdersSucceeded',
    },
    {
      code: 6026,
      name: 'CanDepositNftOnlyToNftToToken',
      msg: 'CanDepositNftOnlyToNftToToken',
    },
    {
      code: 6027,
      name: 'TokenAccountDoesntContainNft',
      msg: 'TokenAccountDoesntContainNft',
    },
    {
      code: 6028,
      name: 'MarketAuthorityIncorrect',
      msg: 'MarketAuthorityIncorrect',
    },
    {
      code: 6029,
      name: 'CanAddWhitelistOnlyToInitializingMarket',
      msg: 'CanAddWhitelistOnlyToInitializingMarket',
    },
    {
      code: 6030,
      name: 'CanPutPairsOnlyToAvailableMarkets',
      msg: 'CanPutPairsOnlyToAvailableMarkets',
    },
    {
      code: 6031,
      name: 'PairAndNftValidationMarketDoesntMatch',
      msg: 'PairAndNftValidationMarketDoesntMatch',
    },
    {
      code: 6032,
      name: 'OnlyMarketScopeSupported',
      msg: 'OnlyMarketScopeSupported',
    },
    {
      code: 6033,
      name: 'NotWhitelistedNftForThisMarket',
      msg: 'NotWhitelistedNftForThisMarket',
    },
    {
      code: 6034,
      name: 'CanDepositOnlyToLiquidityProvision',
      msg: 'CanDepositOnlyToLiquidityProvision',
    },
    {
      code: 6035,
      name: 'NftBoxDoesntMatchPair',
      msg: 'NftBoxDoesntMatchPair',
    },
    {
      code: 6036,
      name: 'NftBoxShouldBeActive',
      msg: 'NftBoxShouldBeActive',
    },
    {
      code: 6037,
      name: 'NftBoxDoesntMatchMint',
      msg: 'NftBoxDoesntMatchMint',
    },
    {
      code: 6038,
      name: 'CantBuyNftFromTokenForNft',
      msg: 'CantBuyNftFromTokenForNft',
    },
    {
      code: 6039,
      name: 'OnlyTokenForNftIsEligibleForThisSell',
      msg: 'OnlyTokenForNftIsEligibleForThisSell',
    },
    {
      code: 6040,
      name: 'NoBuyOrdersOnThisPair',
      msg: 'NoBuyOrdersOnThisPair',
    },
    {
      code: 6041,
      name: 'OnlyLiquidityProvisionIsEligibleForThisSell',
      msg: 'OnlyLiquidityProvisionIsEligibleForThisSell',
    },
    {
      code: 6042,
      name: 'OnlyTokenForNftIsEligibleForThisWithdrawal',
      msg: 'OnlyTokenForNftIsEligibleForThisWithdrawal',
    },
    {
      code: 6043,
      name: 'OnlyNftForTokenIsEligibleForThisWithdrawal',
      msg: 'OnlyNftForTokenIsEligibleForThisWithdrawal',
    },
    {
      code: 6044,
      name: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal',
      msg: 'OnlyLiquidityProvisionIsEligibleForThisWithdrawal',
    },
    {
      code: 6045,
      name: 'InstructionIsNotSupported',
      msg: 'InstructionIsNotSupported',
    },
    {
      code: 6046,
      name: 'CanTradeOnlyWithPairsOnMarket',
      msg: 'CanTradeOnlyWithPairsOnMarket',
    },
    {
      code: 6047,
      name: 'NoLiquidityFeesToWithdraw',
      msg: 'NoLiquidityFeesToWithdraw',
    },
    {
      code: 6048,
      name: 'MaxAmountToPayExceeded',
      msg: 'MaxAmountToPayExceeded',
    },
    {
      code: 6049,
      name: 'GettingLessThanMinAmountToGet',
      msg: 'GettingLessThanMinAmountToGet',
    },
    {
      code: 6050,
      name: 'UserDoesntHaveHadomarketAuthority',
      msg: 'UserDoesntHaveHadomarketAuthority',
    },
    {
      code: 6051,
      name: 'HadomarketAlreadyFinished',
      msg: 'HadomarketAlreadyFinished',
    },
    {
      code: 6052,
      name: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs',
      msg: 'CanDepositLiqudityOnlyToVirtualOrInitializingPairs',
    },
    {
      code: 6053,
      name: 'CanModifyOnlyToVirtualOrInitializingPairs',
      msg: 'CanModifyOnlyToVirtualOrInitializingPairs',
    },
    {
      code: 6054,
      name: 'LiquidityProvisionOrderPairDoesntMatch',
      msg: 'LiquidityProvisionOrderPairDoesntMatch',
    },
    {
      code: 6055,
      name: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction',
      msg: 'OnlyVirtualLpOrdersCanBeWithdrawnByThisFunction',
    },
    {
      code: 6056,
      name: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction',
      msg: 'OnlyVirtualOrTokenizedLpOrdersCanBeReplacedByThisFunction',
    },
    {
      code: 6057,
      name: 'LiquidityProvisionOrderNotEdge',
      msg: 'LiquidityProvisionOrderNotEdge',
    },
    {
      code: 6058,
      name: 'NftPairBoxNotParsingFromRemaining',
      msg: 'NftPairBoxNotParsingFromRemaining',
    },
    {
      code: 6059,
      name: 'VaultNftTokenAccountNotParsingFromRemaining',
      msg: 'VaultNftTokenAccountNotParsingFromRemaining',
    },
    {
      code: 6060,
      name: 'UserTokenAccountNotParsingFromRemaining',
      msg: 'UserTokenAccountNotParsingFromRemaining',
    },
    {
      code: 6061,
      name: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs',
      msg: 'WithdrawingOnlyAtLeastOneBuyAndOneSellPairs',
    },
    {
      code: 6062,
      name: 'VaultDoesntMatchBox',
      msg: 'VaultDoesntMatchBox',
    },
    {
      code: 6063,
      name: 'WithdrawingOnlyBuyOrdersPairs',
      msg: 'WithdrawingOnlyBuyOrdersPairs',
    },
    {
      code: 6064,
      name: 'WithdrawingOnlySellOrdersPairs',
      msg: 'WithdrawingOnlySellOrdersPairs',
    },
    {
      code: 6065,
      name: 'LiquidityProvisionOrderIsWithdrawn',
      msg: 'LiquidityProvisionOrderIsWithdrawn',
    },
    {
      code: 6066,
      name: 'LiquidityProvisionOrderIsNotCorrectOrderForPair',
      msg: 'LiquidityProvisionOrderIsNotCorrectOrderForPair',
    },
    {
      code: 6067,
      name: 'OnlyMarketVirtualPairsCanBeTokenized',
      msg: 'OnlyMarketVirtualPairsCanBeTokenized',
    },
    {
      code: 6068,
      name: 'OnlyLiquidityProvisionPairsCanBeTokenized',
      msg: 'OnlyLiquidityProvisionPairsCanBeTokenized',
    },
    {
      code: 6069,
      name: 'OnlyInitializingPairsCanBePutOnMarket',
      msg: 'OnlyInitializingPairsCanBePutOnMarket',
    },
    {
      code: 6070,
      name: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair',
      msg: 'CanMakeLpOrderTokenizedOnlyFromTokenizedPair',
    },
    {
      code: 6071,
      name: 'OnlyVirtualLpOrderCanBeTokenized',
      msg: 'OnlyVirtualLpOrderCanBeTokenized',
    },
    {
      code: 6072,
      name: 'OnlyTokenizedLpOrdersCanWithdrawFees',
      msg: 'OnlyTokenizedLpOrdersCanWithdrawFees',
    },
    {
      code: 6073,
      name: 'UserLpTokenAccountDoesntContainNft',
      msg: 'UserLpTokenAccountDoesntContainNft',
    },
    {
      code: 6074,
      name: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction',
      msg: 'OnlyTokenizedLpOrdersCanBeWithdrawnByThisFunction',
    },
    {
      code: 6075,
      name: 'LpTokenMintDoesntMatchOrder',
      msg: 'LpTokenMintDoesntMatchOrder',
    },
    {
      code: 6076,
      name: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft',
      msg: 'CanCloseVirtualPoolOnlyIfNoLiquidityLeft',
    },
    {
      code: 6077,
      name: 'CantSetBidCapSmallerThanMarketMinimum',
      msg: 'CantSetBidCapSmallerThanMarketMinimum',
    },
    {
      code: 6078,
      name: 'CantDepositNftWithNotMarketDecimals',
      msg: 'CantDepositNftWithNotMarketDecimals',
    },
    {
      code: 6079,
      name: 'FndAmountCantExceedBidCap',
      msg: 'FndAmountCantExceedBidCap',
    },
    {
      code: 6080,
      name: 'CantBuyMoreThatRemainingBidSettlement',
      msg: 'CantBuyMoreThatRemainingBidSettlement',
    },
    {
      code: 6081,
      name: 'CantBuyMoreThanActiveTokensAmount',
      msg: 'CantBuyMoreThanActiveTokensAmount',
    },
    {
      code: 6082,
      name: 'CantSellMoreThanActiveTokensAmount',
      msg: 'CantSellMoreThanActiveTokensAmount',
    },
    {
      code: 6083,
      name: 'CantDepositMoreThanBidCap',
      msg: 'CantDepositMoreThanBidCap',
    },
    {
      code: 6084,
      name: 'CantDepositZero',
      msg: 'CantDepositZero',
    },
    {
      code: 6085,
      name: 'CantWithdrawMoreThanBidCap',
      msg: 'CantWithdrawMoreThanBidCap',
    },
    {
      code: 6086,
      name: 'CantWithdrawZero',
      msg: 'CantWithdrawZero',
    },
    {
      code: 6087,
      name: 'CantWithdrawMoreThanNftBoxActiveTokens',
      msg: 'CantWithdrawMoreThanNftBoxActiveTokens',
    },
    {
      code: 6088,
      name: 'CantSetReturnAmountLessThanMinimum',
      msg: 'CantSetReturnAmountLessThanMinimum',
    },
    {
      code: 6089,
      name: 'CantSetBondDuratonLessThanMinimum',
      msg: 'CantSetBondDuratonLessThanMinimum',
    },
    {
      code: 6090,
      name: 'CanAddCollateralOnlyToInitializedFBond',
      msg: 'CanAddCollateralOnlyToInitializedFBond',
    },
    {
      code: 6091,
      name: 'OnlyIssuerCanAddCollateralBox',
      msg: 'OnlyIssuerCanAddCollateralBox',
    },
    {
      code: 6092,
      name: 'FBondTokenMintDoesntMatch',
      msg: 'FBondTokenMintDoesntMatch',
    },
    {
      code: 6093,
      name: 'CanActivateOnlyInitializedBond',
      msg: 'CanActivateOnlyInitializedBond',
    },
    {
      code: 6094,
      name: 'BondAuthorityIssuerDoesntMatch',
      msg: 'BondAuthorityIssuerDoesntMatch',
    },
    {
      code: 6095,
      name: 'CanRepayOnlyActivatedBond',
      msg: 'CanRepayOnlyActivatedBond',
    },
    {
      code: 6096,
      name: 'CanRedeemOnlyRepaidFBond',
      msg: 'CanRedeemOnlyRepaidFBond',
    },
    {
      code: 6097,
      name: 'CantSetNotRoundedAmountToReturn',
      msg: 'CantSetNotRoundedAmountToReturn',
    },
    {
      code: 6098,
      name: 'CanGetOnlyRepaidCollateral',
      msg: 'CanGetOnlyRepaidCollateral',
    },
    {
      code: 6099,
      name: 'CollateralTokenMintDoesntMatchBox',
      msg: 'CollateralTokenMintDoesntMatchBox',
    },
    {
      code: 6100,
      name: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation',
      msg: 'CanLiquidateOnlyActiveFBondWhichEnteredLiquidation',
    },
    {
      code: 6101,
      name: 'WrongAdmin',
      msg: 'WrongAdmin',
    },
    {
      code: 6102,
      name: 'CanBurnEntireSupplyOnlyForActiveBond',
      msg: 'CanBurnEntireSupplyOnlyForActiveBond',
    },
    {
      code: 6103,
      name: 'UserDoesntOwnAllSupply',
      msg: 'UserDoesntOwnAllSupply',
    },
    {
      code: 6104,
      name: 'WrongAllSupplyBurner',
      msg: 'WrongAllSupplyBurner',
    },
    {
      code: 6105,
      name: 'LoanToValueFilterOutOfBound',
      msg: 'LoanToValueFilterOutOfBound',
    },
    {
      code: 6106,
      name: 'ValidationDoesntMatchPair',
      msg: 'ValidationDoesntMatchPair',
    },
    {
      code: 6107,
      name: 'CollateralBoxDoesntBelongFbond',
      msg: 'CollateralBoxDoesntBelongFbond',
    },
    {
      code: 6108,
      name: 'FraktMarketDoesntMatchHadoMarketRegistry',
      msg: 'FraktMarketDoesntMatchHadoMarketRegistry',
    },
    {
      code: 6109,
      name: 'FraktMarketNotActive',
      msg: 'FraktMarketNotActive',
    },
    {
      code: 6110,
      name: 'OracleFloorDoesntMatchFraktMarket',
      msg: 'OracleFloorDoesntMatchFraktMarket',
    },
    {
      code: 6111,
      name: 'FraktMarketDoesntMatchWhitelistEntry',
      msg: 'FraktMarketDoesntMatchWhitelistEntry',
    },
    {
      code: 6112,
      name: 'ActualLoanToValueExceedsFilter',
      msg: 'ActualLoanToValueExceedsFilter',
    },
    {
      code: 6113,
      name: 'PairDoesntMatchHadomarket',
      msg: 'PairDoesntMatchHadomarket',
    },
    {
      code: 6114,
      name: 'ActualLoanDurationExceedsFilter',
      msg: 'ActualLoanDurationExceedsFilter',
    },
    {
      code: 6115,
      name: 'NftIsNotMasterEdition',
      msg: 'NftIsNotMasterEdition',
    },
    {
      code: 6116,
      name: 'NftValidationAdapterIsExpired',
      msg: 'NftValidationAdapterIsExpired',
    },
    {
      code: 6117,
      name: 'CustomValidationAdapterProgramDoesntMatchUser',
      msg: 'CustomValidationAdapterProgramDoesntMatchUser',
    },
    {
      code: 6118,
      name: 'OnlyAdminCanInitializeFlashLoanPool',
      msg: 'OnlyAdminCanInitializeFlashLoanPool',
    },
    {
      code: 6119,
      name: 'CantSetLoanFeePointsGreaterThanBasePoints',
      msg: 'CantSetLoanFeePointsGreaterThanBasePoints',
    },
    {
      code: 6120,
      name: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity',
      msg: 'OnlyPoolAuthorityCanDepositAndWithdrawLiquidity',
    },
    {
      code: 6121,
      name: 'CantWithdrawMoreThanPoolBalance',
      msg: 'CantWithdrawMoreThanPoolBalance',
    },
    {
      code: 6122,
      name: 'CantBorrowAndRepayByCpi',
      msg: 'CantBorrowAndRepayByCpi',
    },
    {
      code: 6123,
      name: 'RepayAmountDoesntCorrespondBorrowAmount',
      msg: 'RepayAmountDoesntCorrespondBorrowAmount',
    },
    {
      code: 6124,
      name: 'TransactionDoesntContainRepayInstruction',
      msg: 'TransactionDoesntContainRepayInstruction',
    },
    {
      code: 6125,
      name: 'AlreadyBorrowing',
      msg: 'AlreadyBorrowing',
    },
    {
      code: 6126,
      name: 'WrongHadeswapProgramId',
      msg: 'WrongHadeswapProgramId',
    },
    {
      code: 6127,
      name: 'AmountToReturnIsHigherThanMax',
      msg: 'AmountToReturnIsHigherThanMax',
    },
    {
      code: 6128,
      name: 'AutocompoundNotSupportedYet',
      msg: 'AutocompoundNotSupportedYet',
    },
    {
      code: 6129,
      name: 'AutocompoundDepositIsNotActive',
      msg: 'AutocompoundDepositIsNotActive',
    },
    {
      code: 6130,
      name: 'AutocompoundDepositDoesntMatchPair',
      msg: 'AutocompoundDepositDoesntMatchPair',
    },
    {
      code: 6131,
      name: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair',
      msg: 'OnlyAdminCanRedeemFbondsFromAutocompoundToPair',
    },
    {
      code: 6132,
      name: 'InvalidAssetReceiverTokenAccount',
      msg: 'InvalidAssetReceiverTokenAccount',
    },
    {
      code: 6133,
      name: 'AutoreceiveSolToUserFeatureNotEnabled',
      msg: 'AutoreceiveSolToUserFeatureNotEnabled',
    },
    {
      code: 6134,
      name: 'AutocompoundFeatureNotEnabled',
      msg: 'AutocompoundFeatureNotEnabled',
    },
    {
      code: 6135,
      name: 'InvalidAssetReceiver',
      msg: 'InvalidAssetReceiver',
    },
    {
      code: 6136,
      name: 'BondCollateralOrSolReceiverNotUser',
      msg: 'BondCollateralOrSolReceiverNotUser',
    },
    {
      code: 6137,
      name: 'OnlyBuyPairsAreSupported',
      msg: 'OnlyBuyPairsAreSupported',
    },
    {
      code: 6138,
      name: 'CanModifyOnlyTokenForNftPairs',
      msg: 'CanModifyOnlyTokenForNftPairs',
    },
    {
      code: 6139,
      name: 'OraclePriceIsStale',
      msg: 'OraclePriceIsStale',
    },
    {
      code: 6140,
      name: 'NftLiquidationTimeNotPassed',
      msg: 'NftLiquidationTimeNotPassed',
    },
    {
      code: 6141,
      name: 'CanDepositReturnedSolOnlyToLiquidatingBond',
      msg: 'CanDepositReturnedSolOnlyToLiquidatingBond',
    },
    {
      code: 6142,
      name: 'Debugger',
      msg: 'Debugger',
    },
    {
      code: 6143,
      name: 'NotSupportedSellCase',
      msg: 'NotSupportedSellCase',
    },
    {
      code: 6144,
      name: 'CollateralTokenMintDoesntMatchAutocompoundDeposit',
      msg: 'CollateralTokenMintDoesntMatchAutocompoundDeposit',
    },
    {
      code: 6145,
      name: 'NotCorrectAutocompoundType',
      msg: 'NotCorrectAutocompoundType',
    },
    {
      code: 6146,
      name: 'BadRuleSet',
      msg: 'BadRuleSet',
    },
    {
      code: 6147,
      name: 'DelegateBuilderFailed',
      msg: 'DelegateBuilderFailed',
    },
    {
      code: 6148,
      name: 'LockBuilderFailed',
      msg: 'LockBuilderFailed',
    },
    {
      code: 6149,
      name: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed',
      msg: 'CanRedeemFromAutocompoundToUserOnlyIfPairClosed',
    },
    {
      code: 6150,
      name: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit',
      msg: 'AmountToClaimCantExceedAmountOfBondsInAutocompoundDeposit',
    },
    {
      code: 6151,
      name: 'CollateralOwnerDoesntMatchCollateralTokenAccount',
      msg: 'CollateralOwnerDoesntMatchCollateralTokenAccount',
    },
    {
      code: 6152,
      name: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver',
      msg: 'CanLiquidateOnlyBondsWithBondCollateralOrSolReceiver',
    },
  ],
};
