import { React } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'


const Item = ({item}) => {
    
    return (
        <div className="item__content">
            <Link to={`/product/${item.id}`} className='link'>
                <div className="item__image">
                    <img src={item.image} alt="item"/>
                </div>
                <div className="item__info">
                    <h1 className="item__title">{item.title}</h1>
                    <div className="item__price">&#163; {item.price}</div>
                </div>
            </Link>
        </div>
    )
}

export default Item