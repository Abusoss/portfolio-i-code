"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const Glpi = () => {
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
      <Title Title="Machine Virtuel et GLPI" Subtitle="Configurez une machine virtuelle pour accueillir et installer GLPI" />
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid place-items-center w-full h-[400px] relative">
        <Image
          src="https://res.cloudinary.com/do9jfuuqy/image/upload/v1716433142/glpi_ea5zli.png"
          className=''
          alt="BTS SIO"
          height={400}
          width={400}
        />
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid grid-flow-row gap-10">
        <h3 className="text-2xl font-medium mb-2">Quel en était le but ?</h3>
        <p>Nous avions pour tâche de mettre en place une machine virtuelle à l’aide de VMware et de la paramétrer. Une fois la machine prête, notre objectif était d’installer GLPI et d’utiliser l’application pour imaginer une situations en entreprise.</p>
        <h3 className="text-2xl font-medium mb-2">Les différentes étapes du projet !</h3>
        <embed

          className="aspect-[9/11] place-self-center w-full rounded-lg shadow-lg overflow-hidden border-gray-200 border object-fill"
          src="/glpi.pdf?zoom=50#view=FitH">
        </embed>
        <h2 className="text-3xl font-semibold mb-4">Bilan et compétence aquises !</h2>
        <h3 className="text-2xl font-semibold mb-4">Compréhension de la virtualisation :</h3>
        <p>Apprendre les concepts de la virtualisation, notamment comment configurer et déployer une machine virtuelle pour exécuter des logiciels</p>
        <h3 className="text-2xl font-semibold mb-4">Gestion des services informatiques :</h3>
        <p>Comprendre et mettre en pratique la gestion des services informatiques en déployant GLPI, un outil de gestion de parc informatique et de helpdesk.</p>
        <h3 className="text-2xl font-semibold mb-4">Expérience pratique avec GLPI :</h3>
        <p>Explorer les fonctionnalités de GLPI pour la gestion des ressources informatiques, la gestion des tickets d’assistance, la gestion des inventaires matériels et logiciels, etc.</p>
        <h3 className="text-2xl font-semibold mb-4">Compréhension de la virtualisation :</h3>
        <p>Apprendre les bonnes pratiques en matière de sécurité informatique, notamment en ce qui concerne la sauvegarde des données et la sécurisation des informations sensibles via des processus de sauvegarde et de restauration.</p>
        <h3 className="text-2xl font-semibold mb-4">Documentation et rapport :</h3>
        <p>Apprendre les bonnes pratiques en matière de sécurité informatique, notamment en ce qui concerne la sauvegarde des données et la sécurisation des informations sensibles via des processus de sauvegarde et de restauration.</p>
      </motion.section>
    </div>
  )
}