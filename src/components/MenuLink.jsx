
export default function MenuLink (){

    return(
        <> 
            {
                        footer_lists.map (list =>{
                            return(
                                <div className="col-2">
                                    <h3>{list.heading}</h3>
                                    <ul>
                                        {
                                        list.items.map (item =>{ 

                                            return(
                                                <li key={item.id}>{item.text}</li>
                                            )
                                        })  
                                        }
                                    </ul>
                                </div>
                             
                            )
                        })
                    }
        </>
    )
}