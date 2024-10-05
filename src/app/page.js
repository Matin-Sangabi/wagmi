import { Icon } from "@iconify/react";
import FilterButton from "./filter/FilterButton";
import { nft } from "../data/nft";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 py-8 w-full flex-grow">
      <FilterButton />
      <div className="flex items-center justify-between gap-x-3">
        <span className="text-xl">
          Best <strong className="font-extrabold">Nfts</strong>
        </span>
        <Icon icon="flowbite:arrow-right-outline" width={40} />
      </div>
      <div className="w-full flex items-center px-4 ">
        {nft.map((item) => (
          <div
            className="w-full mx-auto flex items-center justify-center h-full max-h-[270px] rounded-full mt-10"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="nft"
              width={300}
              height={300}
              quality={100}
              className="rounded-3xl w-full shadow-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
