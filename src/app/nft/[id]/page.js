import Image from "next/image";
import { nft } from "../../../data/nft";
import { Icon } from "@iconify/react";

export async function generateMetadata({ params }) {
  return { title: `Nft - ${params.id}` };
}

export function getNftsList(params) {
  const id = params.id;
  const findData = nft.find((item) => +item.id === +id);
  return findData;
}

export default function Page({ params }) {
  const nftData = getNftsList(params);

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4">
      <div className="w-full flex items-center justify-center h-full max-h-[320px] min-h-[270px] rounded-3xl">
        <Image
          src={nftData.image}
          alt="nft"
          width={300}
          height={300}
          quality={100}
          className="rounded-3xl w-full h-full shadow-md "
        />
      </div>
      <div className="flex items-center flex-col gap-y-0 text-black/80 my-4">
        <span className="font-semibold text-lg">Highest Bid</span>
        <span className="font- text-2xl flex items-center justify-center gap-x-2">
          <Icon icon="ri:eth-fill" width={40} />
          <span className="text-6xl  -mt-1">{nftData?.price}</span>
        </span>
      </div>
      <button className="w-full py-3 flex items-center justify-center bg-gradient text-white rounded-2xl">Mint</button>
    </div>
  );
}
