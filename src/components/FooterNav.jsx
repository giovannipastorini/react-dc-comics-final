import { footer_lists } from "../data/footer_data"
import MenuLink from "./MenuLink"


export default function FooterNav (){

    return(
        <>
            <div className="container">
                <div  className="row">
                    <div className="col-2">
                        {/* <MenuLink title={footer_lists.menu_dc_comics.heading} linkList={footer_lists.menu_dc_comics.items} />
                        */}

                        {/* <MenuLink title={footer_lists.menu_dc_comics.heading} linkList={footer_lists.menu_dc_comics.items} />
                        */}
                    </div>
                    <div className="col-2">
                            {/* <MenuLink title={footer_lists.menu_dc_comics.heading} linkList={footer_lists.menu_dc_comics.items} />
                        */}
                    </div>
                    <div className="col-2">
                                {/* <MenuLink title={footer_lists.menu_dc_comics.heading} linkList={footer_lists.menu_dc_comics.items} />
                        */}
                    </div>


                

                </div>
            </div>
        </>
    )
}