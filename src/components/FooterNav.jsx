import { footer_lists } from "../data/footer_data"


export default function FooterNav (){

    return(
        <>
            <div className="container">
                <div  className="row">
                    {/* <MenuLink title={footer_lists.menu_dc_comics.heading} linkList={footer_lists.menu_dc_comics.items} />
                    <MenuLink title="Shop" linkList={} />

                    <MenuLink title="Shop" linkList={} />

                    <MenuLink title="Shop" linkList={} /> */}

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

                </div>
            </div>
        </>
    )
}