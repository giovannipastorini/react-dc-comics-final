
export default function MenuLink ({title, linkList}){

    return(
        <div className="menu"> 
            <h3>{title}</h3>
            <ul>
                {
                    linkList.map (item => {
                        return(
                            <li key={item.id}>
                                <a href={item.path}>{item.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}