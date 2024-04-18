import { useMemo } from "react";

type RangeConverter = (num: number | null, inMin: number, inMax: number, outMin: number, outMax: number) => number;
type RangeConverterExtreme = (num: number | null, inMin: number, inMax: number, outMin: number, outMax: number) => number;

export const useRange:RangeConverter = (
   num,
   inMin,
   inMax,
   outMin,
   outMax) => {
      const mappedValue = useMemo(()=>{
         if (num === null) {
            return 0; // or any other default value
         }
         const newValue = (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
         const largest = Math.max(outMin, outMax);
         const smallest = Math.min(outMin, outMax);
         return Math.min(Math.max(newValue, smallest), largest);
      },[inMax, inMin, num, outMax, outMin]);
      return mappedValue;
}


export const useRangeExtreme:RangeConverterExtreme = (
   num,
   inMin,
   inMax,
   outMin,
   outMax) => {
      const mappedValue = useMemo(()=>{
         if (num === null) {
            return 0; // or any other default value
         }
         // console.log("distanceToInMin : ", distanceToInMin);
         // console.log("distanceToInMax :", distanceToInMax);

         const range:RangeConverter = (num, inMin, inMax, outMin, outMax) =>{
            if (num === null) {
               return 0; // or any other default value
            }
            const newValue = (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
            const largest = Math.max(outMin, outMax);
            const smallest = Math.min(outMin, outMax);
            return Math.min(Math.max(newValue, smallest), largest);
         }
         const distanceToInMin = range(Math.abs(num), 0, Math.abs(inMin), outMin, outMax);
         const distanceToInMax = range(Math.abs(num), 0, Math.abs(inMax), outMin, outMax);

         return (distanceToInMin + distanceToInMax)/2;
      },[inMax, inMin, num, outMax, outMin]);
      return mappedValue;
}