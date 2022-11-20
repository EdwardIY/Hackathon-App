import { CategoryFormat } from "../../Pages/Store";
import {useEffect} from 'react'
import AOS from "aos";





export default function List({ Category, setSelectedItem }: CategoryFormat & {setSelectedItem: Function}) {
    function handleSelect(chosenID: string) {
        const item = Object.keys(Category).filter((item:any) => Category[item as keyof typeof Category].id === chosenID)
        setSelectedItem( Category[item as unknown as keyof typeof Category] )
    }

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, [])

    return <>{
        Object.keys(Category).map((item: any, i:number) => {
            item = Category[item as keyof typeof Category]
            return <div data-aos='fade-in' onClick={(e)=> handleSelect(item.id)} key = {item.id}>
            <img  src={item.img} alt=" premium item"/>
            <span >{item.name}</span>
            <span id={!Object.keys(Category)[i + 1] ? 'selection': ''} >{item.price}</span>
        </div>
        })
    }</>  
        
         
        
    
}