"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Title } from '../../../Title';
export const VivoInParis = () => {
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
    <div className="container mx-auto p-4 sm:p-8 space-y-8 sm:space-y-12">
      <Title Title="Vivo in Paris" Subtitle="Commandez sur tous vos sites préférés,
nous réexpédions où que vous soyez !"/>
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="grid place-items-center w-full h-[300px] sm:h-[400px] relative">
        <Image
          src="https://d3coo6i74goucu.cloudfront.net/7ed624dc-6186-441d-a631-e9092471cfd3.jpg?format=auto&width=1600"
          className='object-cover'
          alt="BTS SIO"
          fill
        />
      </motion.div>
      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Aperçu du Projet</h2>
        <p>
          Vivo in Paris est un service qui facilite l'achat de produits en France et leur expédition vers l'international.
          Il offre des services de shopping personnalisé, de reconditionnement des colis et d'expédition à l'internationale,
          simplifiant ainsi l'achat de produits français et européens pour les clients du monde entier.
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Spécification du Projet</h2>
        <h3 className="text-xl sm:text-2xl font-medium mb-2">Objectif</h3>
        <p>Créer une plateforme conviviale qui simplifie l'expérience d'achat sur les boutiques en ligne européennes pour les clients internationaux.</p>
        <h3 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Public Cible</h3>
        <p>Acheteurs internationaux souhaitant acheter des articles sur des sites de commerce électronique français et européens mais rencontrant des difficultés liées aux méthodes de paiement, à la livraison et aux barrières linguistiques.</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Charte Graphique / Brand Guidelines</h2>
        <h3 className="text-xl sm:text-2xl font-medium mb-2">Palette de Couleurs</h3>
        <ul className="space-y-1">
          <li>Gris Foncé: <span className="text-[#F1F1F1]">#F1F1F1</span></li>
          <li>Vivo 100: <span className="text-[rgba(49,49,49,1)]">rgba(49, 49, 49, 1)</span></li>
          <li>Vivo 200: <span className="text-[rgba(0,144,255,1)]">rgba(0, 144, 255, 1)</span></li>
          <li>Vivo 300: <span className="text-[#AAC4DC]">#AAC4DC</span></li>
          <li>Vivo 400: <span className="text-[#5DA9BF]">#5DA9BF</span></li>
          <li>Vivo 500: <span className="text-[#758EA5]">#758EA5</span></li>
          <li>Vivo 600: <span className="text-[#30495E]">#30495E</span></li>
          <li>Vivo 700: <span className="text-[#0B2A3B]">#0B2A3B</span></li>
          <li>Vivo 800: <span className="text-[#749DA3]">#749DA3</span></li>
          <li>Vivo 900: <span className="text-[#e2574c]">#e2574c</span></li>
          <li>Vivo 1000: <span className="text-[#f9f9f9]">#f9f9f9</span></li>
          <li>Accent Vivo: <span className="text-[#DE8571]">#DE8571</span></li>
        </ul>
        <h3 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Typographie</h3>
        <p>Police des Titres: Futura PT, sans-serif</p>
        <p>Police Principale: Segoe UI, sans-serif</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Exigences Fonctionnelles</h2>
        <Accordion type="single" collapsible>
          {functionalRequirements.map((req, index) => (
            <AccordionItem key={`${req.title}-${index}`} value={`${req.title}-${index}`}>
              <AccordionTrigger>{req.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  {req.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Exigences Non Fonctionnelles</h2>
        <Accordion type="single" collapsible>
          {nonFunctionalRequirements.map((req, index) => (
            <AccordionItem key={`${req.title}-${index}`} value={`${req.title}-${index}`}>
              <AccordionTrigger>{req.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  {req.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Commencer</h2>
        <h3 className="text-xl sm:text-2xl font-medium mb-2">Prérequis</h3>
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>Node.js (v18+)</li>
          <li>npm ou yarn</li>
          <li>Docker et Docker Compose</li>
          <li>pnpm</li>
        </ul>
        <h3 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Installation</h3>
        <ol className="grid gap-y-6 sm:gap-y-10 list-decimal list-inside pl-5 space-y-1">
          <li >Cloner le dépôt :
            <pre className="bg-black dark:bg-gray-100 p-2 rounded w-full max-w-[100%] mt-5">
              <code className="text-white dark:text-black whitespace-pre-wrap">git clone https://github.com/Abusoss/vivo_in_paris.git</code>
            </pre>
          </li>
          <li>Navigation
            <pre className="bg-black dark:bg-gray-100  p-2 rounded max-w-[320px] mt-5">
              <code className="text-white dark:text-black">
                cd vivo_in_paris
                <br />
                cd app
                <br />
                npm install
                <br />
                cd ../api
                <br />
                npm install
              </code>
            </pre>
          </li>
          <li>Démarrer les serveurs Next.js et Directus :
            <pre className="bg-black dark:bg-gray-100 p-2 rounded max-w-[320px] mt-5">
              <code className="text-white dark:text-black">
                cd app
                <br />
                pnpm start
                <br />
                cd ../api
                <br />
                pnpm start
              </code>
            </pre>
          </li>
          <li>Ouvrir votre navigateur et naviguer vers <a href="http://localhost:3000" className="text-blue-500">http://localhost:3000</a> pour l'application Next.js et <a href="http://localhost:8055" className="text-blue-500">http://localhost:8055</a> pour Directus.</li>
        </ol>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Tâches</h2>
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>System de connexion(fini) (Post) --&gt; Apres traduction</li>
          <li>System d'inscription(fini) (Mutation) --&gt; Apres traduction</li>
          <li>Portail utilisateur(presque fini) --&gt; Apres traduction</li>
          <li>Ajouter Sizes au Image/future dans le slider modal</li>
          <li>dynamic head page by page in component head // use assetsUrl for images</li>
          <li>use extension directus-extension-searchsync for search sync with meilisearch</li>
          <li>install and use meiliSearch with docker</li>
          <li>RediSearch ? with Redis ?</li>
          <li>use indirectus more (pnpm dlx indirectus sdk generate --url http://localhost:8055/ --token [Token])</li>
          <li>veille sur Prompt&</li>
          <li>update nextjs to nextjs 14.1.1</li>
          <li>nextjs 14 app dir + react query 5</li>
          <li>e-commerce and aide-a-l'achat/Estimation transaction</li>
          <li>implements follower system or something like that</li>
          <li>passer les mails directus sur mailjet</li>
          <li>continue in the draft api page make the type for Article_by_version_content with the content of the article</li>
          <li>add a directus interface and operation extension that import tags from a csv file and create the tags and add them to the junction after the article is created</li>
        </ul>
      </motion.section>
    </div>
  )
}