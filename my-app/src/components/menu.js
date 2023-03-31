import kofHeroes from "../data"
import {Link} from 'react-router-dom'

const Menu = ()=>{
    
    return (
        <div class= 'container'>
            <div class= 'menu-gallery'>
                {
                    kofHeroes.map(heroe => {
                        return (
                            <Link  to= {`/kof/${heroe.name}`} className='imgbox' >
                                <img src= {heroe.image} />
                                <p>{heroe.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Menu