"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const Switchiru = () => {
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
          src="https://res.cloudinary.com/do9jfuuqy/image/upload/v1716434537/Switchiru_rud3ao.jpg"
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
        <p>Développer une application en arrière-plan (background app) qui détecte le focus des applications actives et interagit avec l'application TouchPortal pour changer d'interface de manière dynamique.</p>
        <h3 className="text-2xl font-medium mb-2">Description du Projet :</h3>
        <p>Le projet Switchiru vise à créer une application qui fonctionne en arrière-plan sur le système d'exploitation, surveille les applications actives, et communique avec TouchPortal pour adapter l'interface utilisateur en fonction de l'application en focus. Cela permettra une meilleure intégration des applications et une expérience utilisateur fluide.</p>
        <h3 className="text-2xl font-medium mb-2">Contexte :</h3>
        <p>Dans un environnement de travail multitâche, la capacité à adapter dynamiquement l'interface utilisateur en fonction de l'application active peut considérablement améliorer l'efficacité et la convivialité. Switchiru se propose de répondre à ce besoin en utilisant des technologies modernes pour détecter les changements de focus des applications et modifier l'interface TouchPortal en conséquence.</p>
        <h3 className="text-2xl font-medium mb-2">Enjeux :</h3>
        <ul>
          <li>Détection précise et en temps réel des applications actives.</li>
          <li>Communication fluide et rapide avec TouchPortal.</li>
          <li>Interface utilisateur réactive et personnalisable.</li>
        </ul>
      </motion.section>
    </div>
  )
}