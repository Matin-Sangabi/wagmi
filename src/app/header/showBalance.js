`'use client'`;

import React, { useEffect, useState } from "react";
import { abiMint } from "../../abi/abiMint";
import constants from "../../constants/constants";
import { useAccount, useReadContract } from "wagmi";

export default function ShowBalance() {
  const { address } = useAccount();

  const {data , error , isLoading} = useReadContract({
    abi: abiMint,
    address: constants.SMART_CONTRACT_ID_MINT,
    functionName: "balanceOf",
    args: [`${address}`],
    enabled : !!address,
  });


  


  return <span className="text-xs">{!error && !isLoading && data ? data + "n" : ""}</span>;
}
