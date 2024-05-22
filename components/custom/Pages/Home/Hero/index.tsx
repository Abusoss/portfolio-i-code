import { TypeAnimation } from "react-type-animation";
import { HeroType } from "../index";
type Wrapper = "span" | "div" | "p" | "strong" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b"
type GranularSpeed = {
   type: "keyStrokeDelayInMs";
   value: number;
}
type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 16 | 55 | 50 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 51 | 52 | 53 | 54 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;
type TypeParams = {
   wrapper: Wrapper;
   speed: Speed | GranularSpeed;
   deletionSpeed: Speed | GranularSpeed;
   repeat: number;
   startDelay: number;
   betweenDelay: number;
   endDelay: number;
   sequence: string[];
}
function Hero<T>(props: T & HeroType) {
   const Params:TypeParams = {
      wrapper: "span",
      speed: 20,
      deletionSpeed: 20,
      repeat: Infinity,
      startDelay: 1000,
      betweenDelay: 2000,
      endDelay: 10000,
      sequence: [
         // Same substring at the start will only be typed out once, initially
         "Salut, moi c&apos;est",
         // wait 1s before replacing "design" with "code"
         'const JeSuis = () => {',
      ]

   };
   const buildSequence = () => {
      const sequence = [];
      sequence.push(Params.startDelay);
      Params.sequence.forEach((text, index) => {
         if (index <= Params.sequence.length - 1) {
            sequence.push(text);
            sequence.push(Params.betweenDelay);
         }
      })
      sequence.push(Params.endDelay);
      return sequence;
   }
   return (
      <div className="grid grid-flow-col md:grid-cols-[0.1fr,2.8fr,0.1fr] lg:grid-cols-[0.25fr,2.5fr,0.25fr]  2xl:grid-cols-[0.625fr,1.75fr,0.625fr]  -z-0 h-[50rem] w-full bg-background  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  items-center justify-center">
         {/* Radial gradient for the container to give a faded look */}
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div className="grid col-start-2 grid-flow-row gap-5 ">
            <TypeAnimation
               sequence={buildSequence()}
               wrapper={Params.wrapper}
               deletionSpeed={Params.deletionSpeed}
               speed={Params.speed}
               className=' text-2xl h-[2rem] w-full text-[var(--background)] dark:text-[#59f687] text-left'
               repeat={Params.repeat}
            />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 text-[var(--background)] dark:text-white">
               <p className="grid gap-5 w-fit">
                  <span className="w-fit">

                     {props.Hero_title}
                  </span>
                  <span className="w-fit">
                     {props.Hero_description}
                  </span>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Hero;