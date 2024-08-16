export const abi = [
  {
    inputs: [
      { internalType: "address", name: "_nftContract", type: "address" },
      { internalType: "uint64", name: "_endStaking", type: "uint64" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "NFTNoStaked", type: "error" },
  { inputs: [], name: "NFTStaked", type: "error" },
  { inputs: [], name: "NFTStakedYet", type: "error" },
  { inputs: [], name: "StakeFinished", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "_endStakingDate",
        type: "uint64",
      },
    ],
    name: "EndStakingDateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "NewOwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      { indexed: false, internalType: "uint256", name: "_id", type: "uint256" },
      {
        indexed: false,
        internalType: "uint64",
        name: "_stakeDate",
        type: "uint64",
      },
    ],
    name: "onNFTStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      { indexed: false, internalType: "uint256", name: "_id", type: "uint256" },
      {
        indexed: false,
        internalType: "uint64",
        name: "_endStakeDate",
        type: "uint64",
      },
    ],
    name: "onNFTWithdrawn",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint64", name: "_endStaking", type: "uint64" }],
    name: "changeEndStakingDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endStaking",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getUserNFTs",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint64", name: "stakeStartDate", type: "uint64" },
          { internalType: "uint64", name: "stakeEndDate", type: "uint64" },
        ],
        internalType: "struct KidenPFPStaking.KidenPFPNFT[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "_id", type: "uint256" },
    ],
    name: "isNFTStakedByOwner",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerPendingClaim",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "proposeChangeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "stakeNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "withdrawNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
