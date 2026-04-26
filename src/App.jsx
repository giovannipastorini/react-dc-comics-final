//import data:
import menu_items from "./data/menu_items"

//import components:
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"

function App() {

  return (
    <>
      <AppHeader menu_items={menu_items} />
      <AppMain /> 
      <AppFooter />
    </>
  )
}

export default App
