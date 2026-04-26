import icons_section_items from "../data/icons_section_items"

export default function IconsSection (){

    return (
       <div id="main-second-div">

            {icons_section_items.map(item =>{
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

      