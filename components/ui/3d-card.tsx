"use client";

import { cn } from "@/lib/utils";
import React, {
   createContext,
   useContext,
   useEffect,
   useRef,
   useState,
} from "react";
// import { useRangeExtreme } from "../custom/Helpers/RangeConverter/RangeConverter";
import { useRange } from "../custom/Helpers/RangeConverter/RangeConverter";

const MouseEnterContext = createContext<
   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
   children,
   className,
   containerClassName,
   containerRef
}: {
   children?: React.ReactNode;
   className?: string;
   containerClassName?: string;
   containerRef?: React.RefObject<HTMLDivElement>;
}) => {
   const glassRef = useRef<HTMLDivElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);
   const [isMouseEntered, setIsMouseEntered] = useState(false);
   const [pos, setPos] = useState({ x: 0, y: 0 });
   console.log("pos : ", pos);
   const RangeOpacityY = useRange(pos.y, -24, 24, -0.40, 0.40);
   const RangeOpacityX = useRange(pos.x, -38, 38, -0.40, 0.40);
   // const RangeOpacityY = useRangeExtreme(pos.y, -11.4, 11.4, 0, 0.25);
   // const RangeOpacityX = useRangeExtreme(pos.x, -8, 8, 0, 0.25);

   // const RangeRotateY = useRange(pos.y, -24, 24, 0, 180);
   // const RangeRotateX = useRange(pos.x, -38, 38, 0, 180);
   // console.log("RangeRotateY : ", RangeRotateY);
   // console.log("RangeRotateX : ", RangeRotateX);

   const largest = Math.max(Math.abs(RangeOpacityY), Math.abs(RangeOpacityX));
   const opacity = largest;
   // const rotation = RangeRotateX - RangeRotateY;
   // console.log("opacity : ", opacity);


   useEffect(() => {
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
         if (!containerRef) return;
         if (!containerRef.current) return;
         if (!cardRef.current) return;
         if (!glassRef.current) return;
         const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
         const x = (e.clientX - left - width / 2) / 25;
         const y = (e.clientY - top - height / 2) / 25;
         const centerX = left + width / 2;
         const centerY = top + height / 2;

         // Calculate the angle
         const rad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
         const rotation = rad * (180 / Math.PI);
         setPos({ x, y });
         cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale3d(1, 1, 1)`;
         glassRef.current.style.transform = `rotate(${rotation}deg) translate(-50%, -50%)`;
         glassRef.current.style.opacity = `${opacity}`;
      };

      const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
         console.log("mouse enter");
         setIsMouseEntered(true);
         if (!containerRef) return;
         if (!containerRef.current) return;
         if (!cardRef.current) return;
         if (!glassRef.current) return;
      };

      const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
         console.log("mouse leave");
         if (!containerRef) return;
         if (!containerRef.current) return;
         if (!glassRef.current) return;
         if (!cardRef.current) return;
         setIsMouseEntered(false);
         cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
         glassRef.current.style.transform = `rotateY(0deg) rotateX(0deg) translate(-50%, -50%)`;
         glassRef.current.style.opacity = `0`;
      };
      if (containerRef && containerRef.current && cardRef.current && glassRef.current) {
         if (!containerRef || !containerRef.current || !glassRef.current) return;
         containerRef.current.onmouseenter = (e) => handleMouseEnter(e as unknown as React.MouseEvent<HTMLDivElement>);
         containerRef.current.onmousemove = (e) => handleMouseMove(e as unknown as React.MouseEvent<HTMLDivElement>);
         containerRef.current.onmouseleave = (e) => handleMouseLeave(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
   }, [containerRef, cardRef, glassRef, opacity]);
   return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
         <div
            ref={cardRef}
            className={cn(
               "relative w-fit [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] transition duration-200 ease-linear h-fit overflow-hidden rounded-3xl",
               containerClassName
            )}
            style={{
               perspective: "1000px",
            }}
         >
            <div
               className={cn(
                  "relative w-fit",
                  className
               )}
               style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
               }}
            >
               {children}
               <div className="z-0 glare-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-none [mask-image:_-webkit-radial-gradient(center,_white,_black);] pointer-events-none">
                  <div
                     ref={glassRef}
                     className={cn("glare opacity-0 absolute top-[50%] left-[50%] origin-[0%_0%] pointer-events-none [transition:_opacity_400ms_cubic-bezier(0.03,_0.98,_0.52,_0.99)_0s;] w-[800px] h-[800px] [background:_linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0%)_40%,_rgba(255,_255,_255,_50%)_80%,_rgb(255,_255,_255)_100%);]",
                        className
                     )}
                     style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                     }}>
                     {/* style="position: absolute; top: 50%; left: 50%; transform-origin: 0% 0%; pointer-events: none; width: 604.861px; height: 604.861px;" */}
                  </div>
               </div>
            </div>
         </div>
      </MouseEnterContext.Provider>
   );
};

export const CardBody = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <div
         className={cn(
            "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
            className
         )}
      >
         {children}
      </div>
   );
};

export const CardItem = ({
   as: Tag = "div",
   children,
   className,
   translateX = 0,
   translateY = 0,
   translateZ = 0,
   rotateX = 0,
   rotateY = 0,
   rotateZ = 0,
   ...rest
}: {
   as?: React.ElementType;
   children: React.ReactNode;
   className?: string;
   translateX?: number | string;
   translateY?: number | string;
   translateZ?: number | string;
   rotateX?: number | string;
   rotateY?: number | string;
   rotateZ?: number | string;
   [key: string]: any;
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const [isMouseEntered] = useMouseEnter();

   useEffect(() => {
      handleAnimations();
   }, [isMouseEntered]);

   const handleAnimations = () => {
      if (!ref.current) return;
      if (isMouseEntered) {
         ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
         ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
   };

   return (
      <Tag
         ref={ref}
         className={cn("w-fit transition duration-200 ease-linear", className)}
         {...rest}
      >
         {children}
      </Tag>
   );
};

// Create a hook to use the context
export const useMouseEnter = () => {
   const context = useContext(MouseEnterContext);
   if (context === undefined) {
      throw new Error("useMouseEnter must be used within a MouseEnterProvider");
   }
   return context;
};
