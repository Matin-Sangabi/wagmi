import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { bottomNavigation } from "../../data/filter";

export default function Bottom() {
  return (
    <div className="py-2 w-full flex items-center justify-between ">
      {bottomNavigation.map((item, index) => (
        <Link href={item.path} key={index}>
          {item?.isAdd ? (
            <span className="size-12 rounded-full flex items-center justify-center bg-gradient text-white">
              <Icon icon="mingcute:add-fill" width={22} />
            </span>
          ) : (
            <Icon className="text-foreground" icon={item.icon} width={30} />
          )}
        </Link>
      ))}
    </div>
  );
}
