"use client"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { useQuery } from "@tanstack/react-query"
import { Separator } from "../../Separator"
import { ProfileForm } from "./Contact"
import Hero from "./Hero"
import Presentation from "./Presentation"

export interface HeroType {
   Hero_description?: string | null | undefined;
   Hero_title?: string | null | undefined;
}
export interface PresentationType {
   Portrait?: {
      focal_point_y?: number | null;
      focal_point_x?: number | null;
      filename_disk?: string | null;
   } | null;
}
export interface AProposType {
   Hero_a_propos_titre?: string | null | undefined;
   Hero_a_propos_sous_titre?: string | null | undefined;
   Hero_a_propos_texte?: string | null | undefined;
}

export interface HomeType extends PresentationType, HeroType {

}
export default function Home() {
   // const { data: Home, error, isFetched } = useQuery({
   //    queryKey: ['Home'],
   //    queryFn: getHome,
   // })
   const { data: Home, error, isFetched } = useQuery({
      queryKey: ['Home'],
      queryFn: async () => {
        const data = await new Promise(resolve => {
          setTimeout(() => {
            resolve({
              Home: {
                title: 'Home',
              },
            });
          }, 1000);
        });
        return data;
      },
    })
   const a_propos = {
      Hero_a_propos_titre: Home?.Hero_a_propos_titre || '',
      Hero_a_propos_sous_titre: Home?.Hero_a_propos_sous_titre || '',
      Hero_a_propos_texte: Home?.Hero_a_propos_texte || '',
   }

   return (
      <main
         className="grid min-h-screen place-items-center"
      >
         <Hero<HomeType> {...Home} />
         <Separator />
         <TracingBeam>
            <div className="grid grid-flow-row gap-y-20 md:gap-y-0 px-2 md:px-6">

               <Presentation<HomeType['Portrait']> {...Home?.Portrait} {...a_propos} />
               <Separator />
               <section className="grid w-full overflow-hidden snap-start">
                  <ProfileForm />
               </section>
            </div>
            {/* <DevCard /> */}
         </TracingBeam>
      </main>
   )
}
