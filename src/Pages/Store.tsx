import { useEffect, useState } from "react";
import Cart from "../Componets/Store/Cart";
import FetchInventory from "../Componets/Store/FetchInventory";
import Header from "../Componets/Store/Header";
import ItemPopUp from "../Componets/Store/ItemPopUp";
import LandingDisplay from "../Componets/Store/LandingDisplay";
import List from "../Componets/Store/List";

import AOS from 'aos'

interface StoreProps {
    mobile: boolean
    setMobile: Function
}

type options =  ('mens'|'womans'|'premiums')

export interface CategoryFormat {
    Category: {
        [item: string]: ItemFormat
    }
}

interface ItemFormat  {
    id: string
    img: string
    name: string
    options: string
    price:string
}


export default function Store({mobile,setMobile}:StoreProps) {
    const [premiums, setPremiums] = useState({});
    const [mens, setMens] = useState({});
    const [womans, setWomans] = useState({});
    const [pickedCategory, setPickedCategory] = useState<options>('premiums');
    const [inventoryStatus, setInventoryStatus] =  useState<boolean>(false);
    const [activeCart, setActiveCart] = useState<boolean>(false)
    const [cart, updateCart] = useState<any[]>([])
    const [selectedItem, setSelectedItem] = useState<any[] | boolean>(false);


    function handleChoice(choice:options) {
        setPickedCategory(choice)
        // setInventoryStatus(!inventoryStatus)
        setInventoryStatus(true)
    }

    async function getItems(category:options) {
        let items: any; 
 
        if (category === 'mens' && !Object.keys(mens).length) {
            items = await FetchInventory(category)
            setMens(items);
        } 
        else if (category === 'womans' && !Object.keys(womans).length){
            items = await FetchInventory(category)
            setWomans(items);
        }

        else if(category === 'premiums' && !Object.keys(premiums).length){
            items = await FetchInventory(category)
            setPremiums(items);
        }
    }

    useEffect(() => {
        getItems(pickedCategory)
    }, [pickedCategory])
    

    useEffect(() => {
        if (typeof selectedItem == 'object' && selectedItem.length) {
            updateCart([...cart].concat(selectedItem))
            setSelectedItem(false)
        }
    }, [selectedItem])
    
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])

   
    return <>
        <Header cart = {cart} setMobile = {setMobile} mobile={mobile} activeCart= {activeCart} setActiveCart={setActiveCart} />
        <Cart cart = {cart} updateCart = {updateCart} activeCart = {activeCart} setActiveCart={setActiveCart} />
        <LandingDisplay />

        
        {/* Premiums */}
        <section id="premiums" >
            <h2 data-aos='fade-right' className="">PREMIUMS</h2>
            <section className="items">
                {premiums! && <List  setSelectedItem={setSelectedItem} Category= {premiums!} />}
            </section>
        </section>

       

        {/* Regular Inventory */}
        {!inventoryStatus && (
            <section data-aos='fade-in' data-aos-duration='2000' className="pickGender" >
            <div className="bottom-In">
                <span>Mens</span>
                <button onClick={()=> handleChoice('mens')}><a href="#regItems">VIEW PRODUCTS</a></button>
            </div>
            <div className="top-In">
                <span>Womans</span>
                <button onClick={()=> handleChoice('womans')}> <a href="#regItems">VIEW PRODUCTS</a></button>
            </div>
        </section>
        ) } 
        
        
        {inventoryStatus && (
            <section className="regInventoryDisplay" >
                <h2 data-aos='fade-right' className="gender">{pickedCategory.toLocaleUpperCase()}</h2>
                <button onClick={()=> setInventoryStatus(false)} className="white-bg-Btn closeGender">Back</button>
                <section className="items">
                    {pickedCategory !== 'premiums' && (
                        <List
                        Category={pickedCategory === 'mens' ? mens! : womans!}
                        setSelectedItem={setSelectedItem} />
                    )
                        }
                </section>
        </section>
        )}

        {/* Item PopUp */}
        {selectedItem && <ItemPopUp selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
        
        {/* Dark-BG */}
        {selectedItem || activeCart ? <div className="PU-bg" ></div> :""}


        </>
}