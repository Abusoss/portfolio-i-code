import { useMemo } from "react";

type RangeConverter = (num: number | null, inMin: number, inMax: number, outMin: number, outMax: number) => number;
const useRange:RangeConverter = (
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

export default useRange;