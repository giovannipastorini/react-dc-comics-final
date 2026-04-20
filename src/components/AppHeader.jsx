import menuItems from "../data/menuItems"


export default function AppHeader (){
    
      const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
          link.addEventListener('click', function() {
            // rimuove selezionato da tutti
            links.forEach(l => l.classList.remove('selezionato'));

            // aggiunge selezionato a quello cliccato
            this.classList.add('selezionato');
          });
        });

      //-------------------------------------------------------------


    return(

        <header>
          <div id="header-div-sx">
            <img id="logo-header" src="../img/dc-logo.png" alt="dc-logo" />
          </div>
          <div id="header-div-dx">
              <ul className="nav nav-underline">
                {menuItems.map(item =>{
                  return(
                    <li className="nav-item" key={item.id}>
                      <a className="nav-link" href={item.path} >{item.text}</a>
                    </li>
                  )
                })}
              </ul>
              
          </div>
      </header>

    )
}