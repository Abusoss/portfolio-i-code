"use client"
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Image from 'next/image';
import { AProposType, PresentationType } from "../index";

function Presentation<T>(props: T & PresentationType['Portrait'] & AProposType) {
   return (
      <div className="grid grid-flow-col md:grid-cols-[0.1fr,2.8fr,0.1fr] lg:grid-cols-[0.25fr,2.5fr,0.25fr]  2xl:grid-cols-[0.625fr,1.75fr,0.625fr] w-full bg-background relative items-center justify-center">
         <div className="grid col-start-2 grid-flow-row gap-">
            <motion.div initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }} className='grid grid-flow-row gap-5 justify-items-center place-content-center h-[100vh]'>

               <p className="text-sm uppercase font-bold opacity-[.8]">
                  À propos
               </p>
               <p className="text-4xl uppercase font-bold">SYNOPSIS</p>
               <p className="text-center">
                  Après avoir obtenu mon baccalauréat STL et fait des études supérieur en LEA, j'ai rapidement ressenti le besoin de découvrir d'autres horizons. J'ai alors travailler en Angleterre pendant près de 2ans ce qui m'a permis de développer mes compétences relationnelles et perfectionner mon niveau d'anglais. Geek en puissance depuis mon plus jeune âge, je suis passionné par le développement informatique. Cette passion m'a guidé vers une toute nouvelle voie. J'ai saisi l'opportunité de me former au CFA INSTA, où j'ai entrepris une formation approfondie en informatique. Autodidacte, je mets mon expérience à votre service en créant des sites internet et applications web sur mesure. Je vous accompagne sur vos projets de digitalisation, réponds à vos besoins et vous conseils sur les technicités.
               </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }} className='grid grid-flow-col gap-5 justify-items-center place-content-center h-[100vh]'>
               <Image sizes={"(min-width: 75em) 25vw, (min-width: 48em) 25vw,70vw"} key="Portrait" alt="" id="Portrait" src={`https://res.cloudinary.com/do9jfuuqy/image/upload/v1713712977/uploads/199585f9-e0f7-42fe-96a3-ceda8b43c399__7abd30a2f63f675625d6888e2ed9d65992751e3c.avif`} width={350} height={400} className={`aspect-[3/5] object-cover rounded-md shadow-lg`} />
               <div className='grid grid-flow-row gap-5'>
                  <div className="grid p-5 dark:bg-[#1c1b23] h-fit rounded-md shadow-lg gap-2">
                     <p className='text-xl font-bold'>
                        <span className='text-2xl'>🗣️</span> Soft skills
                     </p>
                     <p className='opacity-[.8]'>
                        Avec des bases solides en conception et une compétence technique en développement, je suis un jeune développeur qui s'efforce de fournir des solutions de qualité. Je possède des compétences en codage et je développe également des compétences en gestion du temps et en multitâche, que j'apprends à maîtriser à travers des projets de développement de petite et moyenne envergure. Motivé et engagé, je suis constamment à la recherche d'opportunités pour accroître mes connaissances et rester informé des nouveautés du secteur. Avec un intérêt particulier pour la création d'applications à la fois innovantes et efficaces, je suis déterminé à apporter ma contribution et à réussir dans mes projets de développement.
                     </p>
                  </div>
                  <div className="grid p-5 dark:bg-[#1c1b23] h-fit rounded-md shadow-lg gap-2">
                     <div className='inline-block text-xl font-bold'>
                        <p className='inline-block text-[#4ca5d4]'>{'<'}</p>
                        <p className='inline-block text-[#f84534]'>{'/'}</p>
                        <p className='inline-block text-[#4ca5d4]'>{'>'}</p> Développent et Projects
                     </div>
                     <p className='opacity-[.8]'>
                        Le développement et l'exécution de projets sont ma passion. Je m'épanouis à relever les défis de concrétiser des idées par la programmation et de transformer des concepts en solutions fonctionnelles et robustes. Avec une planification minutieuse, des flux de travail efficaces et un souci du détail, je garantie la réussite de la livraison des projets, en atteignant les objectifs et en dépassant les attentes.
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
         <motion.div className="col-start-2 place-self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}>
            <a href="/CV-Nadjib-Loulou-V-CFA.pdf" download>
               <Button className="w-fit">Voir mon CV</Button>
            </a>
         </motion.div>
      </div>
   )
}

export default Presentation