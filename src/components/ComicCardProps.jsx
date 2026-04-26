

export default function ComicCardProps ({item}){

    return (
        <div className="col-2">
            <div className="card">
                <img src={item.thumb} alt={item.series} />
                   <div className="card-body">
                        <span>{item.series}</span>
                    </div>
            </div>
        </div>
    )
}