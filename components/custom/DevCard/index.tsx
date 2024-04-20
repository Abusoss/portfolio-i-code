"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CardContainer } from "../../ui/3d-card";

const ThreeDCardDemo = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   return (
      <div className="h-[calc(100vh_-_150px)] grid place-items-center w-full overflow-hidden" ref={containerRef}>
         <CardContainer className="inter-var" containerRef={containerRef}>
            <Link target="__blank"
               className="rounded-xl text-xs font-normal dark:text-white" href="https://app.daily.dev/abusoss">
               <Image src="https://api.daily.dev/devcards/v2/UaJ9v6LdV1D2W56oRyKER.png?type=default&r=y0z" width={356} height={0} alt="Mohamed Nadjib Loulou's Dev Card" className="w-full border-[1px] dark:border-transparent object-cover rounded-xl group-hover/card:shadow-xl" />
            </Link>
         </CardContainer>
      </div>
   );
}

export default ThreeDCardDemo;