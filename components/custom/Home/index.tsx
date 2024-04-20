"use client"
import { getHome } from "@/lib/data"
import { useQuery } from "@tanstack/react-query"
import DevCard from "../DevCard"
import Hero from "../Hero"

export default function Home() {
   const { data: Home, error, isFetched } = useQuery({
      queryKey: ['Home'],
      queryFn: getHome,
   })
   console.log(Home);
   return (
      <main
         className="flex min-h-screen flex-col items-center justify-between"
      >
         <Hero Hero_description={Home?.Hero_description} Hero_title={Home?.Hero_title} />

         <DevCard />

      </main>
   )
}
