import buyComicsImg from '../../img/buy-comics-digital-comics.png'

import iconsSectionItems from "../data/iconsSectionItems"

export default function IconsSection (){

    return (
       <div id="main-second-div">
            <div>
                <img src={buyComicsImg} alt="buy-comics-digital-comics" /> 
                <span className='text-white'>digital comics</span>
            </div>
       </div>
                     
             
    )
        
}

      