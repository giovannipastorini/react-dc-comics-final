

export default function NavSection ({menu_items}){

    return(
        <div id="header-div-dx">
              <ul className="nav nav-underline">
                {menu_items.map(item =>{
                  return(
                    <li className="nav-item" key={item.id}>
                      <a className="nav-link" href={item.path} >{item.text}</a>
                    </li>
                  )
                })}
              </ul>
        </div>
    )
}