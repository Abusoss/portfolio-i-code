import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// <ProjetCard key={project.id} title={project.title} image={project.image} link={project.link} />

export const ProjetCard = ({ key, title, image, link }: { key: number, title: string, image: string, link: string }) => {
   return (
      <Card
         key={key}
         className="rounded-lg overflow-hidden shadow-lg mx-auto hover:shadow-xl transition-all duration-200 min-w-[320px] max-w-[320px] h-fit"
      >
         <Image
            alt="Profile picture"
            className="object-cover w-full"
            height="320"
            src={image}
            style={{
               aspectRatio: "320/320",
               objectFit: "cover",
            }}
            width="320"
         />
         <Link href={link} passHref >
            <CardContent className="p-4">
               <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200"> {title} </h2>
               {/* <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">Front-end Developer</h3>
            <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
               Passionate about creating interactive user interfaces.
            </p> */}
               <div className="flex mt-4 space-x-2">
                  <Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
                     Voir
                  </Button>
               </div>
            </CardContent>
         </Link>
      </Card>
   )
}