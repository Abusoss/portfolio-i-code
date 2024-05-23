
"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../Title';
export const BTS = () => {
   return (
      <div className="grid grid-flow-row gap-y-20 place-items-center">
         <Title Title="BTS SIO !" Subtitle="C'est quoi le BTS SIO ?"/>
         {/* image placeholder */}
         <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
            {/* <Image
               src="bts-sio-avantages_hdnkoh.jpg"
               className='object-cover'
               alt="BTS SIO"
               fill
            /> */}
            <Image sizes={"(min-width: 75em) 25vw, (min-width: 48em) 25vw,70vw"} key="Portrait" alt="" id="Portrait" src={`https://res.cloudinary.com/do9jfuuqy/image/upload/v1716430991/uploads/bts-sio-avantages_hdnkoh.jpg`} fill className='object-cover' />
         </motion.div>
         <motion.div className="grid place-items-center grid-cols-[400px,1fr,400px]" initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="grid col-start-2 min-h-screen place-items-center gap-x-10 gap-y-20 px-6 grid-cols-[min-content,1fr] items-center justify-center">
               <p className="text-2xl font-bold text-nowrap">BTS SIO c'est quoi ?</p>
               <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de 'enseignement supérieur français de niveau bac+2 (Brevet de Technicien Supérieur). Il vise à former des professionnels capables de répondre aux besoins informatiques des organisations.

                  Les étudiants suivant ce BTS acquièrent des compétences techniques solides en informatique, en réseaux, en développement logiciel, en gestion de projets, et en maintenance des systèmes. Ils apprennent également à comprendre les besoins des organisations afin de proposer des solutions informatiques adaptées.

                  Le BTS SIO prépare les étudiants à entrer dans le monde professionnel directement après 'obtention du diplôme ou à poursuivre leurs études en licence professionnelle ou en école d'ingénieurs en informatique.
               </p>
               <p className="text-2xl font-bold text-nowrap">Options</p>
               <ul>
                  <li>
                     <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"> 1. Option SLAM (Solutions Logicielles et Applications Métiers) : Cette option forme des professionnels capables de concevoir, développer, et maintenir des applications informatiques répondant aux besoins spécifiques des entreprises. Ces applications peuvent être des logiciels métiers, des applications web, des bases de données, etc</p>
                  </li>
                  <li>
                     <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">2. Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) : Cette option forme des techniciens spécialisés dans la conception, 'installation, la configuration et la maintenance des infrastructures informatiques (matériels, réseaux, systèmes, etc.). Ils sont chargés de veiller au bon fonctionnement et à la sécurité des systèmes informatiques au sein des entreprises</p>
                  </li>
               </ul>
               <p className="text-2xl font-bold text-nowrap">Mes Objectifs !</p>
               <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Actuellement en BTS SIO, je me prépare activement pour réussir mon examen, aspirant à l'obtenir avec succès. Mon objectif à long terme est de devenir développeur web full stack. Passionné par la création digitale, j'ambitionne de maîtriser tous les aspects du développement pour concevoir des expériences en ligne captivantes et fonctionnelles, combinant ainsi ma formation actuelle avec mes aspirations professionnelles.
               </p>
            </div>

         </motion.div>

      </div>
   )
}
