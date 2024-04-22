import { TracingBeam } from '@/components/ui/tracing-beam';
import { Loader } from '@/lib/ImageLoader';
import Image from 'next/image';
import { AProposType, PresentationType } from "../index";

function Presentation<T>(props: T & PresentationType['Portrait'] & AProposType) {
   console.log(props?.filename_disk);
   return (
      <TracingBeam className="px-6">
      <div className="grid grid-flow-col md:grid-cols-[0.1fr,2.8fr,0.1fr] lg:grid-cols-[0.25fr,2.5fr,0.25fr]  2xl:grid-cols-[0.625fr,1.75fr,0.625fr] w-full bg-background relative items-center justify-center">
         <div className="grid col-start-2 grid-flow-row gap-5 place-items-center">
            <p className="text-sm uppercase font-bold opacity-[.8]">
               {props.Hero_a_propos_sous_titre}
            </p>
            <p className="text-4xl uppercase font-bold">{props.Hero_a_propos_titre}</p>
            <p className="text-center">
               {props.Hero_a_propos_texte}
            </p>
            <Image loader={Loader} sizes={"(min-width: 75em) 25vw, (min-width: 48em) 25vw,70vw"} key="Portrait" alt="" id="Portrait" src={`${props?.filename_disk}`} width={200} height={200} />
         </div>
      </div>
      </TracingBeam>
   )
}

export default Presentation