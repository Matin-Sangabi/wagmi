import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import { readContract, writeContract, simulateContract } from "@wagmi/core";
import { config } from "../config/wagmiConfig";
import { abiMint } from "../data/abiMint";
import { abi } from "../data/abi";
import constants from "../constants/constants";

export default function HomePage() {
  const [balance, setBalance] = useState(null);
  const [hash, setHash] = useState(null);
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const getBalanceOf = async () => {
    try {
      const result = await readContract(config, {
        abi: abiMint,
        address: constants.SMART_CONTRACT_ID_MINT,
        functionName: "balanceOf",
        args: [`${address}`],
      });
      setBalance(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const mintToken = async () => {
    try {
      const { request } = await simulateContract(config, {
        abi: abiMint,
        address: constants.SMART_CONTRACT_ID_MINT,
        functionName: "mint",
      });
      console.log(request);
      const hash = await writeContract(config, request);
      setHash(hash);
    } catch (error) {
      console.log(error);
    }
  };

  const stakeNft = async () => {
    try {
      console.log(BigInt(1n));
      const { request } = await simulateContract(config, {
        abi,
        address: constants.SMART_CONTRACT_ID,
        functionName: "stakeNFT",
        args: [BigInt(1n)],
        account: address,
        dataSuffix: "0x6eb604e0",
      });
      console.log(request);
      const hash = await writeContract(config, request);
      setHash(hash);
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-col gap-y-4 items-center justify-center">
      <div className="w-full max-w-md flex flex-col gap-y-2">
        <button
          onClick={() => open()}
          className="p-2 bg-white rounded-xl max-w-xs w-full flex items-center justify-center"
        >
          {address
            ? `${address.slice(0, 10)} ... ${address.slice(-4)}`
            : "connect wallet"}
        </button>
      </div>
      <div className="w-full max-w-md flex flex-col gap-y-2">
        <button
          onClick={getBalanceOf}
          className="p-2 bg-white rounded-xl max-w-xs w-full flex items-center justify-center"
        >
          {balance ? `balance : ${balance}` : "get balance of user"}
        </button>
      </div>

      <div className="w-full max-w-md flex flex-col gap-y-2">
        <button
          onClick={mintToken}
          className="p-2 bg-white rounded-xl max-w-xs w-full flex items-center justify-center"
        >
          {hash
            ? `success : ${hash.slice(0, 10)}...${hash?.slice(-4)}`
            : "mint"}
        </button>
      </div>
      <div className="w-full max-w-md flex flex-col gap-y-2">
        <button
          onClick={stakeNft}
          className="p-2 bg-white rounded-xl max-w-xs w-full flex items-center justify-center"
        >
          stake
        </button>
      </div>
    </div>
  );
}
