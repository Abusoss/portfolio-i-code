"use client"

import Link from "next/link"
import * as React from "react"

import StaticLogo from "@/components/custom/Logo/StaticLogo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Vivo in Paris",
    href: "/projets/vivo-in-paris",
    description:
      "vivoinparis.com, création site web de l'entreprise où je suis alternant / stagiaire.",
  },
  {
    title: "Orange",
    href: "/projets/orange",
    description:
      "Client léger du projet Orange pour l’examen.",
  },
  {
    title: "WordPress",
    href: "/projets/wordpress",
    description:
      "Client léger sur WordPress en groupe.",
  },
  {
    title: "Machine virtuelle et GLPI",
    href: "/projets/machine-virtuelle-et-glpi",
    description: "Mis en place d'une machine virtuelle à l’aide de VMware et installation de GLPI.",
  },
  {
    title: "Snake",
    href: "/projets/snake",
    description:
      "Jeu du serpent en C avec SDL2.",
  },
  {
    title: "Switchiru",
    href: "/projets/switchiru",
    description:
      "Application en fond capable de detecter le changement de focus et l'application active. Permettant ainsi de changer l'affichage de TouchPortal.",
  },
]
const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent ">
            Parcours
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/" passHref
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <StaticLogo />
                    {/* <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div> */}
                    <p className="text-sm leading-tight text-muted-foreground">
                      Portfolio magnifiquement conçu réalisé avec Next.js 14, Directus et Xata DB. Accessible. Personnalisable. Open Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <div className="grid row-span-3 place-content-evenly">
                <Link href="/bts" title="BTS" passHref>
                  <ListItem title="BTS">
                    BTS SIO au CFA INSTA
                  </ListItem>
                </Link>
                <Link href="/entreprise" title="Entreprise" passHref>
                  <ListItem title="Entreprise">
                    Vivo in Paris
                  </ListItem>
                </Link>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projets" passHref>
            <NavigationMenuTrigger className="bg-transparent  ">Projets</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.title} href={component.href}>
                  <ListItem
                    title={component.title}
                  >
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/veille-technologique" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
              Veille Technologique
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Menu;

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"