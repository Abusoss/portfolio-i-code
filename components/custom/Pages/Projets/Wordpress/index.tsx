"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const Wordpress = () => {
  // <NormalCard key={key} title={point} />
  const functionalRequirements = [
    {
      title: 'Inscription et Authentification des Utilisateurs',
      points: [
        "Les utilisateurs peuvent s'inscrire et se connecter en utilisant un email et un mot de passe.",
        "Option de connexion via les réseaux sociaux.",
      ],
    },
    {
      title: 'Service de Shopping Personnalisé',
      points: [
        "Les utilisateurs peuvent soumettre des URL des produits souhaités.",
        "L'équipe de Vivo in Paris se charge de l'achat au nom de l'utilisateur.",
      ],
    },
    {
      title: 'Service d\'Estimation',
      points: [
        "Les utilisateurs peuvent demander une estimation des coûts d'expédition en fournissant les URL des produits.",
        "Le système génère un devis détaillé.",
      ],
    },
    {
      title: 'Gestion des Commandes',
      points: [
        "Les utilisateurs peuvent suivre le statut de leurs commandes.",
        "Notifications par email ou WhatsApp pour les mises à jour des commandes.",
      ],
    },
    {
      title: 'Reconditionnement de Colis',
      points: [
        "Plusieurs commandes sont regroupées en un seul envoi pour réduire les coûts d'expédition.",
      ],
    },
    {
      title: 'Expédition Internationale',
      points: [
        "Options d'expédition sécurisées et suivies.",
        "Gestion des droits de douane et des taxes.",
      ],
    },
    {
      title: 'Support Client',
      points: [
        "Disponible via WhatsApp, email et les réseaux sociaux.",
        "Section FAQ pour les questions courantes.",
      ],
    },
  ];

  const nonFunctionalRequirements = [
    {
      title: 'Performance',
      points: [
        "Temps de chargement rapide pour toutes les pages.",
        "Gestion efficace de plusieurs utilisateurs simultanés.",
      ],
    },
    {
      title: 'Scalabilité',
      points: [
        "Capacité à gérer une charge accrue pendant les périodes de pointe.",
      ],
    },
    {
      title: 'Sécurité',
      points: [
        "Gestion sécurisée des données des utilisateurs.",
        "Conformité au RGPD pour les utilisateurs européens.",
      ],
    },
    {
      title: 'Utilisabilité',
      points: [
        "Interface intuitive et facile à naviguer.",
        "Design responsive pour mobile.",
      ],
    },
    {
      title: 'Fiabilité',
      points: [
        "Haute disponibilité et temps d'arrêt minimaux.",
        "Processus de sauvegarde et de récupération robustes.",
      ],
    },
  ];
  return (
    <div className="container mx-auto p-8 space-y-12">
      <Title Title="Wordpress" Subtitle="Création du site E-Enseignement sur WordPress." />
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
        <Image
          src="https://res.cloudinary.com/do9jfuuqy/image/upload/v1716433450/wordpress-589121_1280_yyu4bu.jpg"
          className='object-cover'
          alt="BTS SIO"
          fill
        />
      </motion.div>
      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <p className="font-semibold mb-4">Rôle : Directeur de Projet et Développeur</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid grid-flow-row gap-10">
        <h3 className="text-2xl font-medium mb-2">Quel en était le but ?</h3>
        <p>Création d’un client léger sur WordPress en groupe.Nous devions réaliser la facade d’un site internet qui nous permet de rassembler des informations sur l’école, nos entreprises, sur nous et nos cours !</p>
        <embed

          className="aspect-[9/11] place-self-center w-full rounded-lg shadow-lg overflow-hidden border-gray-200 border object-fill"
          src="/wp_projet.pdf?zoom=50#view=FitH">
        </embed>
        <h2 className="text-3xl font-semibold mb-4">Ressentit/Bilan du projet</h2>
        <p>Lorsque j’ai entrepris mon premier projet impliquant l’utilisation de WordPress, j’ai été immédiatement intrigué. En effet, le concept d’un CMS était totalement nouveau pour moi, suscitant à la fois de l’excitation et une certaine appréhension. Au fil de mon immersion dans ce projet, j’ai été agréablement surpris par la simplicité d’utilisation de WordPress.
        <br/><br/>
          La possibilité de créer un site sans nécessiter de compétences en codage m’a profondément séduit. Ce qui m’a le plus marqué, c’est le rendu final du site. J’ai énormément apprécié la qualité du résultat obtenu et la fluidité de sa réalisation grâce à la facilité offerte par WordPress.
<br/><br/>
          Ce projet m’a ouvert les portes d’un univers où la création de sites web devient accessible à tous, renforçant ainsi mon intérêt pour les technologies de ce domaine. En conclusion, cette première expérience avec WordPress a été très enrichissante pour moi, me permettant de découvrir un outil puissant et intuitif pour la conception de sites web, tout en élargissant mes perspectives professionnelles dans le domaine de l’informatique.</p>
      </motion.section>
    </div>
  )
}