import comics from "../data/comics"

import Jumbotron from "./Jumbotron"

import ComicCard from "./ComicCard"

export default function ContentArea (){

    return (
        <div id="main-first-div">

                <Jumbotron />
                <div className="container">
                        <div className="row">
                            {
                                comics.map ( item => (
                                    <div className="col-2" >
                                    <ComicCard key={item.id} item={item} />
                                    </div>
                                ))
                            }
                        </div>
                </div>

                
        </div>
    )
}