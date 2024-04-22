"use client"
import { getHome } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import DevCard from "../DevCard"
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
   const { data: Home, error, isFetched } = useQuery({
      queryKey: ['Home'],
      queryFn: getHome,
   })
   const a_propos = {
      Hero_a_propos_titre: Home?.Hero_a_propos_titre,
      Hero_a_propos_sous_titre: Home?.Hero_a_propos_sous_titre,
      Hero_a_propos_texte: Home?.Hero_a_propos_texte,
   }

   return (
      <main
         className="grid min-h-screen place-items-center gap-20"
      >
         <Hero<HomeType> {...Home} />
         <Presentation<HomeType['Portrait']> {...Home?.Portrait} {...a_propos}/>

         <DevCard />

      </main>
   )
}
