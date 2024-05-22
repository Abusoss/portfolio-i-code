
"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../Title';
export const Entreprise = () => {
  return (
    <div className="grid grid-flow-row gap-y-20 place-items-center">
      <Title Title="Mon Entreprise !" Subtitle="J'ai été pour mes deux années de BTS au sein de Vivo in Paris !"/>
         {/* image placeholder */}
         <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
            <Image
               src="https://via.placeholder.com/1000"
               className='object-cover'
               alt="BTS SIO"
               fill
            />
         </motion.div>
         <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="grid place-items-center grid-cols-[400px,1fr,400px]">
            <div className="grid col-start-2 min-h-screen place-items-center gap-x-10 gap-y-20 px-6 grid-cols-[min-content,1fr] items-center justify-center">
               <p className="text-2xl font-bold text-nowrap">Qui somme-nous ?</p>
               <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               Vivo in Paris est une entreprise spécialisée dans &apos;assistance d&apos;achat et la réexpédition de produits à &apos;international, facilitant ainsi l&apos;accès aux marchés européens pour des clients du monde entier. Notre équipe propose un service de personal shopper qui vous aide à choisir des articles sur des sites e-commerce européens et s&apos;occupe de tout le processus d&apos;achat, d&apos;estimation des frais, et d&apos;expédition. Nous nous distinguons par notre capacité à regrouper vos achats pour réduire les coûts de livraison et par un suivi complet des commandes jusqu&apos;à leur livraison, en garantissant la résolution de tout litige douanier éventuel. Pour ceux moins familiers avec les achats en ligne, nous offrons aussi un service où nous gérons entièrement les achats en votre nom, assurant une expérience sans tracas et efficace du début à la fin. Chez Vivo in Paris, nous nous efforçons d&apos;entretenir des liens de confiance et des rapports privilégiés avec chacun de nos clients, en mettant un point d&apos;honneur à garantir satisfaction et support tout au long du processus.
               </p>
               <p className="text-2xl font-bold text-nowrap">Ce que je fais ?</p>
               <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               Chez Vivo in Paris, je m&apos;occupe de tout ce qui touche à notre site web et à son bon fonctionnement, en utilisant des outils modernes pour nous assurer que tout marche bien et rapidement. Je participe également à la communication et au marketing de l&apos;entreprise, en apportant des idées pour améliorer notre image et notre relation avec les clients. Mon but est d&apos;aider Vivo in Paris à grandir en combinant technologie et créativité dans tout ce que nous faisons.
               </p>
            </div>

         </motion.div>

      </div>
  )
}
