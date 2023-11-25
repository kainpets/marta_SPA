"use client"

import { navigationMenuTriggerStyle } from "./navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu"
import { Menu, User2, Presentation, Album, ClipboardCheck, PhoneOutgoing } from "lucide-react"
import Link from "next/link"


function MobileNav() {
  return (
    <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <div className="flex gap-1 ">
                    <Menu />
                    </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <a href="#o-mnie" >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <User2 />
                      O mnie
                    </NavigationMenuLink>
                  </a>
                  <Link href="#oferta">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Presentation />
                      Oferta
                    </NavigationMenuLink>
                  </Link>
                  <Link href="#portfolio">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Album />
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                  <Link href="#opinie">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <ClipboardCheck />
                      Opinie
                    </NavigationMenuLink>
                  </Link>
                  <Link href="#kontakt">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <PhoneOutgoing />
                      Kontakt
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
  )
}

export default MobileNav