import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ItemPopUp(this: any, { selectedItem, setSelectedItem}: any) {
    
    const [quantity, setQuantity] = useState(1);
    let option: string;
 
    async function handleAdd(e:any) {
        e.preventDefault()
        option = e.target.previousSibling.previousSibling.value;

        const addedItem = {
            id: selectedItem.id + Math.floor(Math.random()*10000),
            img: selectedItem.img,
            name: selectedItem.name,
            option,
            qty: quantity,
            price: selectedItem.price
        }
        
        setSelectedItem([addedItem])
        
    }
    return (
        <>
        <section className="popUpTemplate" >
            <img src={selectedItem.img} alt="premium item"/>
            <div className="details">
                    <span className="name"> {selectedItem.name}</span>
                <span className="price">{selectedItem.price}</span>
                    <select onChange={(e) => console.log(e.target.value)} dangerouslySetInnerHTML={{ __html: selectedItem.options }}>
                </select>
                <div className="qtyToggle">
                    <button onClick={()=> setQuantity((prev:number)=> quantity > 1 ? prev - 1 : 1)}>
                    <FontAwesomeIcon icon={faMinus} />
                    </button>
                        <span aria-label="quantity">{quantity }</span>
                    <button onClick={()=> setQuantity((prev:number)=> prev + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                    </button>
                    </div>
                    <button onClick={(e)=> handleAdd(e)} className="black-bg-Btn" >ADD TO CART</button>
                    <button onClick={()=> setSelectedItem(false)} className="close">
                    Back
                </button>
            </div>
        </section>
        </>
    )
}