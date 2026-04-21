import comics from "../data/comics"

import Jumbotron from "./Jumbotron"

export default function ContentArea (){

    return (
        <div id="main-first-div">

                <Jumbotron />

                <div>
                    <ul className="text-white">
                        {
                            comics.map(item =>(
                                <li key={item.id} >{item.series}</li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            {
                                comics.map ( item => (
                                    <div className="col-2">
                                        <div className="card">
                                            <img src={item.thumb} alt={item.series} />
                                            <div className="card-body">
                                                <span>{item.series}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
        </div>
    )
}