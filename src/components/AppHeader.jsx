
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

    return(

        <header>
          <div id="header-div-sx">
            <img id="logo-header" src="../img/dc-logo.png" alt="dc-logo" />
          </div>
          <div id="header-div-dx">

              <ul className="nav nav-underline">
                <li className="nav-item">
                  <a className="nav-link" href="#">Characters</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Comics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Tv</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Games</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Collectibles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Videos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Fans</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Shop</a>
                </li>
              </ul>
          </div>
      </header>

    )
}