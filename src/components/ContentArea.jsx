import comics from "../data/comics"

import Jumbotron from "./Jumbotron"

import ComicCardProps from "./ComicCardProps"

export default function ContentArea (){

    return (
        <div id="main-first-div">

                <Jumbotron />

                

                <div>
                    <div className="container">
                        <div className="row">
                            {
                                comics.map ( item => (
                                    <ComicCardProps key={item.id} item={item}  />
                                ))
                            }
                        </div>
                    </div>

                </div>
        </div>
    )
}