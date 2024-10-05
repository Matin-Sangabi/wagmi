"use client";

import Image from "next/image";
import React from "react";
import { filterData } from "../../data/filter";

export default function FilterButton() {
  return (
    <div className="w-full flex items-center justify-center max-w-sm overflow-hidden gap-x-4 ">
      {filterData.map((item, index) => (
        <button
          key={index}
          onClick={() => console.log("run")}
          className={`flex-auto py-4 px-2 h-14  text-sm font-bold  rounded-full flex items-center justify-center gap-x-2 ${
            item?.is_active ? "bg-gradient" : "bg-light-primary"
          }`}
        >
          {item?.image && (
            <Image
              quality={100}
              className="rounded-full w-[30px] h-[30px] object-cover"
              src={item.image}
              alt="test"
              width={60}
              height={60}
            />
          )}

          {item?.title && <span>{item?.title}</span>}
          {item?.icon && <span className="text-xl">{item?.icon}</span>}
        </button>
      ))}
    </div>
  );
}
