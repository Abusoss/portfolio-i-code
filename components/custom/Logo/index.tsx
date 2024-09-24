"use client"
import { useWindowScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useRange } from '../Helpers/RangeConverter/RangeConverter';
type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;
interface TypeParams {
  wrapper: Wrapper | undefined;
  speed: Speed | undefined;
  repeat: number;
  startDelay: number;
  betweenDelay: number;
  endDelay: number;
  deletionSpeed: Speed | undefined;
  sequence: string[];

}

export default function MyLogo() {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const iCodeTranslate = useRange(y, 0, 75, 0, 32);
  const symbolTranslate = useRange(y, 0, 75, 0, 32);
  const wrapperTranslate = useRange(y, 0, 75, 0, 2.5);
  const iCodeScale = useRange(y, 0, 75, 0, 0.2);

  // Ajoutez ceci pour gérer la responsivité
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajustez la largeur selon vos besoins
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const TypeParams: TypeParams = {
    wrapper: "span",
    speed: 1,
    deletionSpeed: 1,
    repeat: Infinity,
    startDelay: 1000,
    betweenDelay: 1000,
    endDelay: 30000,
    sequence: [
      // Same substring at the start will only be typed out once, initially
      'i- design',
      // wait 1s before replacing "design" with "code"
      'i- code',
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
    <div style={{
      transform: `scale(calc( 1 - ${iCodeScale}))`,
      // Ajoutez ceci pour ajuster la taille sur mobile
    }} className={`text-base md:text-2xl origin-top-left justify-self-start w-fit min-w-[200px] font-fira `}>
      <Link href="/" passHref>
        <div className='grid rounded-lg dark:bg-transparent '>
          <div className="grid relative w-fit md:w-[calc(250px+2rem)] pl-3 md:pl-8 pb-1 md:py-5 pt-7  min-w-[100px] gap-2">
            <span style={{
              transform: `translate3d(0px , ${symbolTranslate}px , 0px)`
            }} className="absolute left-3 md:left-8 text-[#4ca5d4]">~</span>
            <div style={{
              transform: `translate3d( ${iCodeTranslate}px , 0px , 0px)`
            }} className='grid grid-flow-col grid-cols-[min-content,1fr] items-center justify-items-start w-fit'>
              <span className="text-[#f84534] w-fit pr-4">{'=>'}</span>
              <TypeAnimation
                sequence={buildSequence()}
                wrapper={TypeParams.wrapper}
                deletionSpeed={TypeParams.deletionSpeed}
                speed={TypeParams.speed}
                className=' text-xl md:text-3xl h-[1.5rem] md:h-[2.25rem] [word-spacing:-10px;]  md:[word-spacing:-15px;] w-fit text-[var(--background)] dark:text-[#59f687] text-left'
                repeat={TypeParams.repeat}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
