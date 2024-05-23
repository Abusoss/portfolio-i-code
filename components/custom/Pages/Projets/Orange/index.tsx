"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const Orange = () => {
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
            <Title Title="Orange" Subtitle="Création du site Orange."/>
      <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
            <Image
               src="https://res.cloudinary.com/do9jfuuqy/image/upload/v1716432167/orange_logo_qvwc4g.jpg"
               className='object-cover'
               alt="BTS SIO"
               fill
            />
         </motion.div>
      <motion.section initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
        <h2 className="text-3xl font-semibold mb-4">Quel en était le but ?</h2>
        <p>
        Création d’un client léger à l’aide de camarade, nous devions nous organiser et répartir nos tâches. Il y avait de la gestion de projet, de la base de donnée, de la programmation (MVC)…
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
        <h3 className="text-2xl font-medium mb-2">Objectif</h3>
        <p>Créer une plateforme conviviale qui simplifie l'expérience d'achat sur les boutiques en ligne européennes pour les clients internationaux.</p>
        <h3 className="text-2xl font-medium mt-6 mb-2">Ressentit/Bilan du projet</h3>
        <p>J’ai récemment mené un projet qui a été une expérience extrêmement enrichissante pour moi. Ce projet m’a plongé dans l’univers de l’entreprise, me permettant ainsi de mieux appréhender les réalités du monde professionnel. Ce qui m’a particulièrement marqué, c’est l’esprit d’entraide et le partage des connaissances au sein de l’équipe. Cette dynamique collaborative a été incroyablement bénéfique, car elle m’a permis d’apprendre énormément, d’acquérir de nouvelles compétences et d’évoluer dans un environnement où chacun contribuait au succès du projet.

Sur le plan personnel, cette expérience m’a offert une formidable opportunité de développement, notamment en matière de programmation de bases de données et dans la maîtrise de divers logiciels. J’ai pu consacrer du temps à approfondir mes connaissances en programmation, ce qui m’a permis de faire des avancées significatives dans la manipulation et la gestion de bases de données. De même, j’ai exploré et amélioré mes compétences sur différents logiciels, élargissant ainsi mes compétences techniques et renforçant ma polyvalence dans ce domaine.</p>
      </motion.section>
    </div>
  )
}