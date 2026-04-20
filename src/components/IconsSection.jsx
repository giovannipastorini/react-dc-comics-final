import buyComicsImg from '../../img/buy-comics-digital-comics.png'

import iconsSectionItems from "../data/iconsSectionItems"

export default function IconsSection (){

    return (
       <div id="main-second-div">

            {iconsSectionItems.map(item =>{
                return(
                    <div key={item.id}>
                        <img src={item.path} alt={item.text} /> 
                        <span className='text-white'>{item.text}</span>
                    </div>
                )
            })}
       </div>
                     
             
    )
        
}

      