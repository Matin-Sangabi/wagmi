"use client";
import constants from "@/constants/constants";
import { abiMint } from "../../../abi/abiMint";
import React from "react";
import { useAccount, useWriteContract } from "wagmi";
import { Icon } from "@iconify/react";
import { useAppKit } from "@reown/appkit/react";
import toast from "react-hot-toast";
import { abi } from "../../../abi/abi";
import { compactHash } from "@/utils/hash";

export default function MintButton() {
  const { isConnected , address } = useAccount();
  const { open } = useAppKit();

  const { writeContractAsync, data, isPending } = useWriteContract();
  const {
    writeContractAsync: stakeWriteContract,
    data: stakeData,
    isPending: stakePending,
  } = useWriteContract();

  console.log(data, stakeData);

  const writeContract = async () => {
    try {
      if (!isConnected) {
        open({ view: "Connect" });
        return;
      }
      const data = await writeContractAsync({
        abi: abiMint,
        address: constants.SMART_CONTRACT_ID_MINT,
        functionName: "mint",
      });
      console.log(data);
      toast.success(<span>TransAction Completed : {data}</span>)
    } catch (error) {
      console.log(error);
      toast.error(error.details);
    }
  };

  const stakeContract = async () => {
    try {
      if (!isConnected) {
        open({ view: "Connect" });
        return;
      }
      const data = await stakeWriteContract({
        abi,
        address: constants.SMART_CONTRACT_ID,
        functionName: "stakeNFT",
        args: [BigInt(1n)],
        account: address,
        dataSuffix: "0x6eb604e0",
      });
      toast.success(<span>TransAction Completed : {data}</span>)

    } catch (error) {
      toast.error(<div className="w-full overflow-hidden text-xs">
        {error.message.toString()}
      </div>);
    }
  };

  return (
    <>
      <button
        onClick={writeContract}
        disabled={isPending}
        className={`w-full  ${
          isPending ? "bg-red-600" : "bg-gradient"
        } py-3 font-bold flex items-center justify-center bg-gradient text-white rounded-2xl transition-all ease-linear duration-150`}
      >
        {isPending ? (
          <Icon
            icon={"icon-park-outline:loading-two"}
            width={24}
            className="animate-spin"
          />
        ) : data ? (
          compactHash(data, 5)
        ) : (
          "Mint"
        )}
      </button>
      <button
        onClick={stakeContract}
        disabled={stakePending}
        className={`w-full  ${
          isPending ? "" : "bg-gradient"
        } py-3 font-bold flex items-center justify-center bg-gradient text-white rounded-2xl transition-all ease-linear duration-150`}
      >
        {stakePending ? (
          <Icon
            icon={"icon-park-outline:loading-two"}
            width={24}
            className="animate-spin"
          />
        ) : stakeData ? (
          compactHash(stakeData, 5)
        ) : (
          "Stake"
        )}
      </button>
    </>
  );
}
