"use client";

import { Icon } from "@iconify/react";
import { useAppKit } from "@reown/appkit/react";
import { useParams } from "next/navigation";
import React from "react";
import { useAccount, useAccountEffect } from "wagmi";
import ShowBalance from "./showBalance";
import { compactHash } from "../../utils/hash";

export default function Header() {
  const { open } = useAppKit();
  const searchParams = useParams();

  const { address, isReconnecting } = useAccount();

  useAccountEffect({
    onConnect(data) {
      // if(data)
      if (data?.chainId === 1) {
        setTimeout(() => {
          open({ view: "Networks" });
        }, 1000);
      }
    },
  });

  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex flex-col  h-full">
        <span className="font-normal text-lg  ">
          {"id" in searchParams ? `NFT` : "Discover"}
        </span>
        <span className="font-extrabold  text-lg ">
          {"id" in searchParams ? `#${searchParams?.id}` : "Your Nft"}
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        {address && <ShowBalance />}
        <button
          onClick={() =>
            !isReconnecting && open({ view: address ? "Account" : "Connect" })
          }
          className="rounded-3xl ring-2 ring-black/10 flex items-center justify-center h-16 w-auto px-3 "
        >
          {address ? (
            <span className="rotate-90 text-xs">{compactHash(address)}</span>
          ) : (
            <Icon icon="solar:wallet-bold" className="text-" width="25" />
          )}
        </button>
      </div>
    </header>
  );
}
