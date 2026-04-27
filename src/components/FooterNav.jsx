import { dc_comics_list, shop_list, dc_list, sites_list } from "../data/footer_data"
/* import {shop_list} from "../data/footer_data" */

export default function FooterNav (){

    return(
        <footer>
            <div className="container">
                <div  className="row">
                    <div className="col-2">
                        <h3>{dc_comics_list.heading}</h3>
                        <ul>
                            {
                              dc_comics_list.items.map (item =>{ 

                                return(
                                    <li key={item.id}>{item.text}</li>
                                )
                              })  
                            }
                        </ul>
                        <h3>{shop_list.heading}</h3>
                        <ul>
                            {
                              shop_list.items.map (item =>{ 

                                return(
                                    <li key={item.id}>{item.text}</li>
                                )
                              })  
                            }
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>{dc_list.heading}</h3>
                        <ul>
                            {
                                dc_list.items.map(item =>{

                                    return(
                                        <li key={item.id}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3>{sites_list.heading}</h3>
                        <ul>
                            {
                                sites_list.items.map(item =>{

                                    return(
                                        <li key={item.id}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}