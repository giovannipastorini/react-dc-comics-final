

export default function ComicCard (props){

    return (
        
            <div className="card" key={props.key}>
                <img src={props.item.thumb} alt={props.item.series} />
                   <div className="card-body">
                        <span>{props.item.series}</span>
                    </div>
            </div>
        
    )
}