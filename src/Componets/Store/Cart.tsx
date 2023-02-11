import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

interface CartProps {
    setActiveCart: Function 
    activeCart: boolean
    cart: any[]
    updateCart:Function
}

type CartItemFormat = {
    id: string
    img: string
    name: string
    option: string
    price: string
    qty:number
}

export default function Cart({ setActiveCart, activeCart, cart, updateCart }: CartProps) {
    const [total, setTotal] = useState('0.00');
    const [deleted, setDeleted] = useState(' ');

    useEffect(() => {
        if (cart.length) {
            const total = cart.reduce((total: number, val: CartItemFormat) => total + Number(val.price.slice(1)) * val.qty, 0);
            setTotal(total.toFixed(2))
        }
        else setTotal('0.00')
    },[cart])

    

    function handleDelete(e: any, deletedID: string) {
        e.preventDefault();
            const deletedItem = cart.filter((item: CartItemFormat) => item.id === deletedID)[0].id
             setDeleted(deletedItem)

        setTimeout(() => {
            let newCart = cart.filter((item: CartItemFormat) => item.id !== deletedID);
            updateCart(newCart)
            setDeleted(' ')
        },500)
        
    }


    return <div style={{right: activeCart ? '0px' : '-550px' }} className="cartContainer" >
                { !cart.length && <div className="cartMessage" >Your cart is empty</div> }
                <button onClick={()=> setActiveCart(false)} className="closeCart">
                    <FontAwesomeIcon icon={faRightLong} />
                    <div>Back</div>
                </button>

        <div className="cart" >
            {cart.map((item: CartItemFormat) => {
                return <form key={item.id} className="detailsContainer" onSubmit={(e)=> handleDelete(e,item.id)}>
                    
                    <>
                        {deleted === item.id && <div className="cartMessage cartMessageRemoved">Removed!</div>}
                        
                        <img src={item.img} alt={item.name}/>
                                <div>
                                    <div className="n">{item.name}</div>
                                    <div className="s">{item.option.slice(0,1).toUpperCase() + item.option.slice(1) }</div>
                                    <div className="p">${(+item.price.slice(1) * item.qty).toFixed(2)}</div>
                                    <div className="q">Qty:{item.qty} </div>
                                </div>
                        <button  className="remove">REMOVE</button>
                        </>
                </form>
            })}
            
        </div>
                <div style={{right: activeCart ? '0px' : '-550px' }} className="checkoutContainer">
                    <div>CHECKOUT</div>
                    <div>Total: ${total}</div>
                </div>
        </div>
}