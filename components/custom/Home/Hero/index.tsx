import { TypeAnimation } from "react-type-animation";
import { HeroType } from "../index";

function Hero<T>(props: T & HeroType) {
   const TypeParams: TypeParams = {
      wrapper: "span",
      speed: 20,
      deletionSpeed: 20,
      repeat: Infinity,
      startDelay: 1000,
      betweenDelay: 2000,
      endDelay: 10000,
      sequence: [
         // Same substring at the start will only be typed out once, initially
         "Salut, moi c'est",
         // wait 1s before replacing "design" with "code"
         'const JeSuis = () => {',
      ]

   }
   const buildSequence = () => {
      const sequence = [];
      sequence.push(TypeParams.startDelay);
      TypeParams.sequence.forEach((text, index) => {
         if (index <= TypeParams.sequence.length - 1) {
            sequence.push(text);
            sequence.push(TypeParams.betweenDelay);
         }
      })
      sequence.push(TypeParams.endDelay);
      return sequence;
   }
   return (
      <div className="grid grid-flow-col md:grid-cols-[0.1fr,2.8fr,0.1fr] lg:grid-cols-[0.25fr,2.5fr,0.25fr]  2xl:grid-cols-[0.625fr,1.75fr,0.625fr]  -z-0 h-[50rem] w-full bg-background  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  items-center justify-center">
         {/* Radial gradient for the container to give a faded look */}
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div className="grid col-start-2 grid-flow-row gap-5 ">
            <TypeAnimation
               sequence={buildSequence()}
               wrapper={TypeParams.wrapper}
               deletionSpeed={TypeParams.deletionSpeed}
               speed={TypeParams.speed}
               className=' text-2xl h-[2rem] w-full text-[var(--background)] dark:text-[#59f687] text-left'
               repeat={TypeParams.repeat}
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