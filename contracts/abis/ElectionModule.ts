export const abi = [
  {
    inputs: [],
    name: "AlreadyACouncilMember",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyNominated",
    type: "error",
  },
  {
    inputs: [],
    name: "ChangesCurrentPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "DuplicateCandidates",
    type: "error",
  },
  {
    inputs: [],
    name: "ElectionAlreadyEvaluated",
    type: "error",
  },
  {
    inputs: [],
    name: "ElectionNotEvaluated",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidElectionSettings",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEpochConfiguration",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMinimumActiveMembers",
    type: "error",
  },
  {
    inputs: [],
    name: "NoCandidates",
    type: "error",
  },
  {
    inputs: [],
    name: "NoVotePower",
    type: "error",
  },
  {
    inputs: [],
    name: "NotACouncilMember",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCallableInCurrentPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "NotNominated",
    type: "error",
  },
  {
    inputs: [],
    name: "VoteNotCasted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "CandidateNominated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "CouncilMemberAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "CouncilMemberRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "members",
        type: "address[]",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "CouncilMembersDismissed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "CouncilTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "CouncilTokenUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "DefaultBallotEvaluationBatchSizeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "evaluatedBallots",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBallots",
        type: "uint256",
      },
    ],
    name: "ElectionBatchEvaluated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBallots",
        type: "uint256",
      },
    ],
    name: "ElectionEvaluated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ElectionModuleInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "EmergencyElectionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "nominationPeriodStartDate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "votingPeriodStartDate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "epochEndDate",
        type: "uint64",
      },
    ],
    name: "EpochScheduleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "EpochStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "tolerance",
        type: "uint64",
      },
    ],
    name: "MaxDateAdjustmentToleranceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "minimumActiveMembers",
        type: "uint8",
      },
    ],
    name: "MinimumActiveMembersChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "minNominationPeriodDuration",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "minVotingPeriodDuration",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "minEpochDuration",
        type: "uint64",
      },
    ],
    name: "MinimumEpochDurationsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "seatCount",
        type: "uint8",
      },
    ],
    name: "NextEpochSeatCountChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "NominationWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votePower",
        type: "uint256",
      },
    ],
    name: "VoteRecorded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votePower",
        type: "uint256",
      },
    ],
    name: "VoteWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getBallotCandidatesInEpoch",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getBallotVotedAtEpoch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getBallotVotesInEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getCandidateVotesInEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getElectionWinnersInEpoch",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getEpochEndDateForIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getEpochStartDateForIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getNominationPeriodStartDateForIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getNomineesAtEpoch",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "getVotingPeriodStartDateForIndex",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "hasVotedInEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochIndex",
        type: "uint256",
      },
    ],
    name: "wasNominated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "CrossChainDebtShareAlreadyDeclared",
    type: "error",
  },
  {
    inputs: [],
    name: "DebtShareContractNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "DebtShareSnapshotIdNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMerkleProof",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleRootNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "NoChange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contr",
        type: "address",
      },
    ],
    name: "NotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyCandidates",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueAlreadyInSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueNotInSet",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongInitializer",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtShare",
        type: "uint256",
      },
    ],
    name: "CrossChainDebtShareDeclared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "CrossChainDebtShareMerkleRootSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "DebtShareContractSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "snapshotId",
        type: "uint128",
      },
    ],
    name: "DebtShareSnapshotIdSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "candidates",
        type: "address[]",
      },
    ],
    name: "calculateBallotId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "candidates",
        type: "address[]",
      },
    ],
    name: "cast",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "debtShare",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "candidates",
        type: "address[]",
      },
    ],
    name: "declareAndCast",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtShare",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "declareCrossChainDebtShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "membersToDismiss",
        type: "address[]",
      },
    ],
    name: "dismissMembers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numBallots",
        type: "uint256",
      },
    ],
    name: "evaluate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
    ],
    name: "getBallotCandidates",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getBallotVoted",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ballotId",
        type: "bytes32",
      },
    ],
    name: "getBallotVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
    ],
    name: "getCandidateVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCouncilMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCouncilToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCrossChainDebtShareMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCrossChainDebtShareMerkleRootBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getDebtShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDebtShareContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDebtShareSnapshotId",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getDeclaredCrossChainDebtShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultBallotEvaluationBatchSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getElectionWinners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpochEndDate",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpochIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpochStartDate",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxDateAdjustmenTolerance",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinEpochDurations",
    outputs: [
      {
        internalType: "uint64",
        name: "minNominationPeriodDuration",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "minVotingPeriodDuration",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "minEpochDuration",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinimumActiveMembers",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextEpochSeatCount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNominationPeriodStartDate",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNominees",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotingPeriodStartDate",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "councilTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "councilTokenSymbol",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "firstCouncil",
        type: "address[]",
      },
      {
        internalType: "uint8",
        name: "minimumActiveMembers",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "nominationPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "votingPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "epochEndDate",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "debtShareContract",
        type: "address",
      },
    ],
    name: "initializeElectionModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "initializeElectionModule",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isElectionEvaluated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isElectionModuleInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
    ],
    name: "isNominated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newNominationPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newVotingPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newEpochEndDate",
        type: "uint64",
      },
    ],
    name: "modifyEpochSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resolve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
    ],
    name: "setCrossChainDebtShareMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "debtShareContract",
        type: "address",
      },
    ],
    name: "setDebtShareContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "snapshotId",
        type: "uint128",
      },
    ],
    name: "setDebtShareSnapshotId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDefaultBallotEvaluationBatchSize",
        type: "uint256",
      },
    ],
    name: "setDefaultBallotEvaluationBatchSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newMaxDateAdjustmentTolerance",
        type: "uint64",
      },
    ],
    name: "setMaxDateAdjustmentTolerance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newMinNominationPeriodDuration",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newMinVotingPeriodDuration",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newMinEpochDuration",
        type: "uint64",
      },
    ],
    name: "setMinEpochDurations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "newMinimumActiveMembers",
        type: "uint8",
      },
    ],
    name: "setMinimumActiveMembers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "newSeatCount",
        type: "uint8",
      },
    ],
    name: "setNextEpochSeatCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newNominationPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newVotingPeriodStartDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "newEpochEndDate",
        type: "uint64",
      },
    ],
    name: "tweakEpochSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCouncilTokenImplementation",
        type: "address",
      },
    ],
    name: "upgradeCouncilToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawNomination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    name: "initializeOwnerModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwnerModuleInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newNominatedOwner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceNomination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ImplementationIsSterile",
    type: "error",
  },
  {
    inputs: [],
    name: "UpgradeSimulationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "simulateUpgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
