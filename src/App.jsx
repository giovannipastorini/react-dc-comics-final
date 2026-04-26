//import data:
import menu_items from "./data/menu_items"

//import components:
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"

function App() {

  return (
    <>
      
      <AppHeader menu_items={menu_items} />
      <AppMain />
      
      <footer>
        <p>footer</p>
      </footer>


    </>
  )
}

export default App
