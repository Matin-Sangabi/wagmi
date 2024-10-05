import { Icon } from "@iconify/react";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex flex-col  h-full">
        <span className="font-normal text-lg  ">Discover</span>
        <span className="font-extrabold  text-lg ">Your Nft</span>
      </div>
      <button className="rounded-3xl ring-2 ring-black/10 flex items-center justify-center h-16 w-auto px-3 ">
        <Icon icon="tabler:align-right" width="20" />
      </button>
    </header>
  );
}
