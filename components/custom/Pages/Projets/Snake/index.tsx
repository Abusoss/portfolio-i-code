"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const Snake = () => {
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
      <Title Title="Snake" Subtitle="Création du jeu Snake." />
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
        <Image
          src="https://res.cloudinary.com/do9jfuuqy/image/upload/v1716432564/Snake1_idpsb6.jpg"
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
        <p>Dans le cadre de notre cursus, nous avons réalisé un projet de développement d’un jeu en langage C. Mon rôle principal a été la direction et la gestion du projet, en plus de contribuer activement au développement, notamment à la conception du terrain de jeu.</p>
        <h3 className="text-2xl font-medium mb-2">Planification et Organisation :</h3>
        <p>Dès le début, j’ai défini les objectifs du projet et planifié les différentes étapes, incluant la conception, le développement, les tests et le déploiement. Nous avons utilisé des outils comme Trello pour le suivi des tâches et Slack pour la communication.</p>
        <h3 className="text-2xl font-medium mb-2">Répartition des Tâches :</h3>
        <p>J’ai attribué les tâches en fonction des compétences de chaque membre de l’équipe, maximisant ainsi l’efficacité. Cela a permis à chacun de travailler sur des aspects où il pourrait apporter le plus de valeur.</p>
        <h3 className="text-2xl font-medium mb-2">Suivi et Ajustements :</h3>
        <p>J’ai organisé des réunions hebdomadaires pour faire le point sur l’avancement et résoudre les problèmes éventuels. Cela nous a permis d’ajuster notre planning et de redistribuer les tâches si nécessaire, tout en discutant des solutions techniques et partageant les meilleures pratiques. Contributions Techniques</p>
        <h3 className="text-2xl font-medium mb-2">Conception du Terrain de Jeu :</h3>
        <p>J’ai créé le terrain de jeu en utilisant des tableaux et des cellules, ce qui permet une gestion efficace et flexible de l’espace de jeu.</p>
        <h2 className="text-3xl font-semibold mb-4">Ressentit/Bilan du projet</h2>
        <p>Cette expérience m’a permis de développer à la fois mes compétences en gestion de projet et en programmation. J’ai appris à organiser et à diriger une équipe vers un objectif commun, tout en me plongeant dans des aspects techniques concrets. Ce projet a été une expérience enrichissante et formatrice, et je suis fier du travail accompli par l’ensemble de l’équipe.</p>
      </motion.section>
    </div>
  )
}