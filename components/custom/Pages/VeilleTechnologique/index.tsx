"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import DevCard from "../../DevCard";
import { Title } from "../../Title";

export const VeilleTech = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   return (
      <div className="grid grid-flow-row gap-y-20">
         <Title Title="Ma veille technologique !" Subtitle="Découvrez comment je reste à la pointe de l&apos;innovation" />
         {/* Section Formation AWS et DevOps */}
         <motion.section
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
               <div className="grid gap-y-10">
                  <div className="w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                     Formation AWS et DevOps
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                     Améliorez mes compétences en cloud et en DevOps
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                     Je me forme régulièrement sur les outils AWS à travers AWS Educate, où je développe mes compétences en programmation et DevOps en utilisant exclusivement les technologies AWS. Cette formation complète mes compétences pratiques avec des outils comme EBS, Docker, et Ansible, me permettant d&apos;intégrer ces technologies dans mon environnement de travail quotidien chez Vivo in Paris. Cette démarche renforce ma compréhension des infrastructures cloud et améliore ma capacité à gérer des projets complexes sur AWS, assurant ainsi une mise en œuvre efficace et à la pointe de la technologie pour nos services.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                     <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://aws.amazon.com/fr/education/awseducate/"
                        target="_blank"
                     >
                        En savoir plus sur AWS Educate
                     </Link>
                  </div>
                  <div className="grid gap-y-5">
                     <h3 className="text-lg font-semibold">Articles et Sources :</h3>
                     <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                        <li>
                           <a className="hover:underline" href="https://docs.ansible.com/" target="_blank">
                              <div className="flex items-center gap-2">
                                 {/* <Image
                                    alt="Ansible"
                                    className="rounded-md"
                                    height={40}
                                    src="/placeholder.svg"
                                    style={{
                                       aspectRatio: "40/40",
                                       objectFit: "cover",
                                    }}
                                    width={40}
                                 /> */}
                                 <svg xmlns="http://www.w3.org/2000/svg" height={50} preserveAspectRatio="xMidYMid" viewBox="0 0 256 315" width={50} >
                                    <g fill="#1a1918" transform="translate(0 281.86)">
                                       <path d="m67.5168 32.0035c-.54152 0-1.12617-.13685-1.53212-.68583l-17.3835-22.8612v23.3187h-3.96431v-28.7142c0-1.14253.94592-2.0571 2.0278-2.0571.62971 0 1.17084.1826 1.57485.73158l17.3396 22.8159v-23.2276h3.96392v28.6681c0 1.18907-.94592 2.01175-2.02625 2.01175" />
                                       <path d="m100.306 32.278c-3.96276 0-8.10693-.82347-11.9803-2.28584l.94631-3.2927c3.55797 1.14332 7.43099 1.96639 11.034 1.96639 4.99958 0 7.61163-1.7834 7.61163-4.29759 0-2.28663-2.02741-3.42956-9.00817-6.72187-6.98076-3.29192-9.72722-5.39477-9.72722-9.51055 0-5.16563 3.96276-7.27006 11.4384-7.27006 3.10813 0 7.88162.64087 10.63 1.46395l-.63087 3.38302c-3.01839-.73119-6.80051-1.23402-9.90864-1.23402-5.26839 0-7.4306 1.00528-7.4306 3.52066 0 2.46844 1.57562 3.52026 8.96194 6.94982 7.79188 3.61216 9.77345 5.4413 9.77345 9.18992 0 5.4417-5.13515 8.13888-11.71 8.13888" />
                                       <path d="m130.798 1.32367h4.09833v30.4511h-4.09833z" />
                                       <path d="m169.758 17.9669h-10.1798v10.334h10.1798c3.46746 0 5.58422-2.19514 5.58422-5.2591 0-2.88057-2.2065-5.07492-5.58422-5.07492m-1.98274-13.1685h-8.19705v9.73929h8.19705c3.28838 0 5.67512-2.10364 5.67512-5.02957 0-2.88057-2.07208-4.70972-5.67512-4.70972m2.02741 26.9766h-12.2499c-1.17162 0-2.07247-.91497-2.07247-2.0575v-26.3361c0-1.09796.90086-2.0575 2.07247-2.0575h10.1332c6.21509 0 9.90786 3.06317 9.90786 7.86439 0 2.60569-1.53134 5.02917-3.8738 6.44659 3.4694 1.05182 5.80992 3.932 5.80992 7.40691 0 4.84657-4.00743 8.73322-9.72722 8.73322" />
                                       <path d="m199.212 31.7751c-1.12422 0-2.02547-.96032-2.02547-2.0575v-28.3936h4.09755v26.7479h16.304v3.70326h-18.3761z" />
                                       <path d="m245.526 32.278c-8.3773 0-13.4215-3.10892-13.4215-9.37291 0-2.97207 1.66691-5.8069 4.90984-7.13281-2.61244-1.64616-3.96314-3.97814-3.96314-6.53848 0-5.66926 4.36987-8.36802 12.5658-8.36802 2.74763 0 6.62026.32063 9.86358 1.05261l-.45101 3.38302c-3.42201-.54898-6.62104-.86804-9.72839-.86804-5.31462 0-8.15238 1.46237-8.15238 4.98343 0 2.78947 2.61283 4.98382 6.08146 4.98382h7.02504c.99098 0 1.75626.77733 1.75626 1.73726 0 1.00568-.76528 1.78301-1.75626 1.78301h-7.56501c-3.9647 0-6.48546 1.96561-6.48546 4.98421 0 4.43484 4.09833 5.76075 9.23232 5.76075 2.79269 0 6.57442-.3648 9.63671-1.09678l.58697 3.33727c-2.92827.82347-6.757 1.37166-10.1347 1.37166" />
                                       <path d="m14.138 7.0347 7.17771 17.9843-10.8406-8.66933 3.66286-9.31493zm12.7514 22.1277-11.0399-26.9746c-.31505-.77733-.94592-1.18907-1.71159-1.18907s-1.44121.41174-1.75626 1.18907l-12.1179 29.5874h4.14456l4.79757-12.1983 14.3142 11.7408c.57571.47208.99098.68583 1.53212.68583 1.08033 0 2.02625-.82268 2.02625-2.01135 0-.19285-.06798-.49968-.18918-.82978z" />
                                    </g>
                                    <path d="m255.879 127.868c0 70.4551-57.1101 127.565-127.566 127.565-70.4501 0-127.566-57.1096-127.566-127.565 0-70.4501 57.1161-127.566 127.566-127.566 70.4561 0 127.566 57.1161 127.566 127.566" fill="#1a1918" />
                                    <path d="m130.46 78.2289 33.0116 81.4763-49.8635-39.2778 16.8519-42.1984zm58.6445 100.245-50.7786-122.202c-1.44952-3.52436-4.34807-5.38926-7.86591-5.38926-3.52436 0-6.63386 1.86489-8.08339 5.38926l-55.7329 134.04h19.0653l22.0623-55.2653 65.8389 53.1899c2.64792 2.14114 4.55852 3.1095 7.0422 3.1095 4.97389 0 9.32146-3.72878 9.32146-9.11101 0-.87594-.30939-2.2662-.86941-3.76143z" fill="#fff" />
                                 </svg>
                                 Ansible Documentation
                                 {/* <Image
                                    alt="AWS Training"
                                    className="rounded-md"
                                    height="40"
                                    src="/placeholder.svg"
                                    style={{
                                       aspectRatio: "40/40",
                                       objectFit: "cover",
                                    }}
                                    width="40"
                                 /> */}
                              </div>
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://aws.amazon.com/fr/certification/" target="_blank">
                              <div className="flex items-center gap-2">
                                 {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" fill="#FF9900" />
                                    <path d="M12 2L14.66 7.66L20.83 8.16L16 12.59L17.58 18.77L12 15.53L6.42 18.77L8 12.59L3.17 8.16L9.34 7.66L12 2Z" fill="white" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" fill="#232F3E" />
                                    <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" fill="#FF9900" />
                                 </svg> */}
                                 <Image
                                    alt="Formation AWS Educate"
                                    className=" aspect-square object-cover object-center "
                                    height="50"
                                    width="50"
                                    src="https://d1.awsstatic.com/aws-educate/educate-badge-images/AWS-CredlyBadges_Educate-Start-With-Storage.3b5c6295bccf3883b924957cc3b3865a359656af.png"
                                 />
                                 AWS Training et Certifications
                              </div>
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://docs.docker.com/" target="_blank">
                              <div className="flex items-center gap-2">


                                 <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} id="Layer_1" data-name="Layer 1" viewBox="0 0 756.26 596.9">
                                    <path fill="#1d63ed" strokeWidth={"0px"} d="M743.96,245.25c-18.54-12.48-67.26-17.81-102.68-8.27-1.91-35.28-20.1-65.01-53.38-90.95l-12.32-8.27-8.21,12.4c-16.14,24.5-22.94,57.14-20.53,86.81,1.9,18.28,8.26,38.83,20.53,53.74-46.1,26.74-88.59,20.67-276.77,20.67H.06c-.85,42.49,5.98,124.23,57.96,190.77,5.74,7.35,12.04,14.46,18.87,21.31,42.26,42.32,106.11,73.35,201.59,73.44,145.66.13,270.46-78.6,346.37-268.97,24.98.41,90.92,4.48,123.19-57.88.79-1.05,8.21-16.54,8.21-16.54l-12.3-8.27ZM189.67,206.39h-81.7v81.7h81.7v-81.7ZM295.22,206.39h-81.7v81.7h81.7v-81.7ZM400.77,206.39h-81.7v81.7h81.7v-81.7ZM506.32,206.39h-81.7v81.7h81.7v-81.7ZM84.12,206.39H2.42v81.7h81.7v-81.7ZM189.67,103.2h-81.7v81.7h81.7v-81.7ZM295.22,103.2h-81.7v81.7h81.7v-81.7ZM400.77,103.2h-81.7v81.7h81.7v-81.7ZM400.77,0h-81.7v81.7h81.7V0Z" />
                                 </svg>


                                 Docker Documentation
                              </div>
                           </a>
                        </li>
                     </ul>
                     <p>
                        Je consulte régulièrement ces ressources pour approfondir mes connaissances en DevOps et rester informé
                        des meilleures pratiques et des nouveautés.
                     </p>
                  </div>
                  <div className="grid gap-y-5">
                     <h3 className="text-lg font-semibold">Projets GitHub :</h3>
                     <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                        <li>
                           <a className="hover:underline" href="https://github.com/ansible/ansible" target="_blank">
                              Ansible
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://github.com/aws/aws-sdk-js" target="_blank">
                              AWS SDK
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://github.com/docker/docker-ce" target="_blank">
                              Docker
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <Image
                  alt="Formation AWS et DevOps"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/educate.jpg"
                  width="550"
               />
            </div>
         </motion.section >
         {/* Section Communautés et Apprentissage */}
         <motion.section
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} ref={containerRef}>
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
               <DevCard containerRef={containerRef}/>
               {/* <Image
                  alt="Communautés et Apprentissage"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
               /> */}
               <div className="grid gap-y-10">
                  <div className="w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                     Communautés et Apprentissage
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Découvrez mes sources d&apos;apprentissage</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                     Je reste constamment informé des dernières tendances en développement web en suivant plusieurs sources fiables et en participant à des communautés dynamiques.
                  </p>
                  <div className="space-y-2">
                     <h3 className="text-lg font-semibold">Chaînes YouTube :</h3>
                     <div className="space-y-1 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                           <a className="hover:underline" href="https://www.youtube.com/channel/UCEBpSZh-_77D1VgwP1C5obQ" target="_blank">
                              TechWorld with Nana
                           </a>
                        </div>
                        <div className="flex items-center gap-2">
                           <a className="hover:underline" href="https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA" target="_blank">
                              The Net Ninja
                           </a>
                        </div>
                        <div className="flex items-center gap-2">
                           <a className="hover:underline" href="https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ" target="_blank">
                              Fireship
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-lg font-semibold">Projets GitHub :</h3>
                     <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                        <li>
                           <a className="hover:underline" href="https://github.com/vercel/next.js" target="_blank">
                              Next.js
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://github.com/directus/directus" target="_blank">
                              Directus
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://github.com/docker/docker-ce" target="_blank">
                              Docker
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-lg font-semibold">Communautés :</h3>
                     <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                        <li>
                           <a className="hover:underline" href="https://www.daily.dev/" target="_blank">
                              Daily.dev
                           </a>
                        </li>
                        <li>
                           <a className="hover:underline" href="https://twitter.com/" target="_blank">
                              Twitter
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </motion.section >


         {/* Section Conclusion */}
         <motion.section
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} >
            <div className="grid gap-y-10 place-items-center text-center">
               <div className="w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Conclusion</div>
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Restez à la pointe de l&apos;innovation</h2>
               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cette veille technologique me permet d&apos;adapter rapidement mes compétences aux nouvelles technologies et
                  garantit que mon travail chez Vivo in Paris reste innovant et compétitif. Je propose ainsi des solutions qui
                  optimisent notre efficacité et renforcent notre position sur le marché.
               </p>
            </div>
         </motion.section >
      </div >
   );
}
