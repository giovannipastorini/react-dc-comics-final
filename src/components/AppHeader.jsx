
import LogoSection from "./LogoSection"
import NavSection from "./NavSection"



export default function AppHeader ({menu_items}){


    return(

        <header>
          <LogoSection />
          <NavSection menu_items={menu_items} />
      </header>

    )
}