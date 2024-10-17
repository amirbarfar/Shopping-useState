import React , { useState } from 'react'
import CartProduct from "./CartProduct"
import TableProduct from './TableProduct'

export default function Shopping() {
    
        const [products , setProducts] = useState([  {id :1 , img : "img/1.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$100.00" , priceBT : 80 , count : 1},
            {id :2 , img : "img/2.png" , title : "Grey Civilist crew neck" , text : "100% cotton oversized Civilist crew neck sweater in steel grey with orange embroided logo." , priceGT : "$420.00" , priceBT : 399 , count : 1},
            {id :3 , img : "img/3.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$250.00" , priceBT : 210 , count : 1},
            {id :4 , img : "img/4.png" , title : "Coach bomber" , text : "Heavy duty, water resistant bomber jacket. Neoprene and polyester." , priceGT : "$610.00" , priceBT : 590 , count : 1},
            {id :5 , img : "img/5.png" , title : "Eco Theory autentic" , text : "Authentic Vans stle with white and navy mottled tie die. Made from 100% recycled materials." , priceGT : "$720.00" , priceBT : 690 , count : 1},
            {id :6 , img : "img/6.png" , title : "North Face 1990 wind breaker" , text : "Composition - 100% Polyester - a very strong synthetic fiber that." , priceGT : "$800.00" , priceBT : 790 , count : 1},
            {id :7 , img : "img/7.png" , title : "Milford Beanie" , text : "The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label." , priceGT : "$450.00" , priceBT : 410 , count : 1},
            {id :8 , img : "img/8.png" , title : "Cream Death Star hood" , text : "Reverse weave 100% cotton Death Star hoodie with scenic retro vinyl." , priceGT : "$350.00" , priceBT : 340 , count : 1},
            {id :9 , img : "img/9.png" , title : "Louis Lopez One Star" , text : "Worn and designed by Louie Lopez, young icon and member of the CONS skate team." , priceGT : "$950.00" , priceBT : 910 , count : 1},
            {id :10, img : "img/10.png" , title : "Checkerboard slip ons" , text : "Classic checkerboard slip ons with off-white under tone and reinforced waffle cup soles." , priceGT : "$870.00" , priceBT : 840 , count : 1},
            {id :11, img : "img/11.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$780.00" , priceBT : 740 , count : 1},
            {id :12, img : "img/12.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$620.00" , priceBT : 590 , count : 1},
        ])

        const [userCart , setUserCart] = useState(JSON.parse(localStorage.getItem("data")) ?? [])

        const [resultProps , setResultProps] = useState([])


        function clickCartHandler(id)  {

            let findProduct = products.find((item)=>{
                return item.id === id
            })

            setUserCart(prevState =>{
                return [...prevState , findProduct]
            })

            if (localStorage.getItem("data")) {
                let oldItem = JSON.parse(localStorage.getItem("data"))
                userCart.map((item)=>{
                    if (item.title === findProduct.title) {
                        item.count++
                        setUserCart([...userCart])
                        localStorage.setItem("data" , JSON.stringify([...userCart]))
                    }else{
                        localStorage.setItem("data" , JSON.stringify([...oldItem , findProduct]))
                    }
                })
            }else{
                localStorage.setItem("data" , JSON.stringify([findProduct]))
            }

        }

        function removeHandlerTable(id){
            let resultRemove = userCart.findIndex((item)=>{
                return item.id === id
            })
            
            let oldData = JSON.parse(localStorage.getItem("data"))

            userCart.splice(resultRemove , 1)
            oldData.splice(resultRemove , 1)

            localStorage.setItem("data" , JSON.stringify(oldData))

            setUserCart([...userCart])


        }

        function plusHandler(id){
            console.log(id);
            let resultPlusId = userCart.find((item)=>{
                return item.id === id
            })
            
            if (resultPlusId.count != 0) {
                resultPlusId.count++
            }

            localStorage.setItem("data" , JSON.stringify([...userCart]))

            setUserCart([...userCart])
            
        }

        function minuseHandler(id){
            let resultMinusId = userCart.find((item)=>{
                return item.id === id
            })

            if (resultMinusId.count != 1) {
                resultMinusId.count--
            }

            localStorage.setItem("data" , JSON.stringify([...userCart]))
            
            setUserCart([...userCart])
        }

        function submitHandler(){
            let resultCount = 0
            let resultPriceAndCount = 0
            let resultPrice = 0

            userCart.map((item)=>{
                resultPriceAndCount = item.count * item.priceBT
                resultPrice =  resultPrice + resultPriceAndCount
                resultCount = resultCount + item.count
            })

            setResultProps(()=>{
                return [resultCount , resultPrice]
            })
            
        }

        

  return (
    <>
        <nav>
            <ul className='flex justify-center items-center bg-slate-800 w-full gap-5 text-white p-8 font-mono text-xl mb-16'>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Underwear</a></li>
                <li><a href="#">Accesories</a></li>
            </ul>
        </nav>
    <div className='flex justify-center items-center  flex-wrap'>
        {
            products.map((item)=>
                <CartProduct {...item} key={item.id} onAddToCart={clickCartHandler}/>
            )
        }
    </div>

    <table className='mx-auto font-mono w-[80%] my-10'>
        <thead>
            <tr>
                <th>id</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th>count</th>
                <th>allPrice</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody className='w-[80%] mx-auto text-center'>
            {
                userCart.map((item)=>
                    <TableProduct {...item} key={item.id} onRemove={removeHandlerTable} onPlus={plusHandler} onMinuse={minuseHandler}/>
                )
            }
        </tbody>
    </table>

    <button onClick={submitHandler} type='submit' className='w-[80%] h-14 bg-slate-700 text-white rounded-md mx-auto flex justify-center items-center my-5'>Submit</button>
 {
    resultProps.length > 0 &&

    <div className='w-[50%] h-44 bg-slate-800 text-white rounded-md mx-auto flex justify-center items-center flex-col my-10'>
        <h2 className='text-center text-white font-mono text-xl'>allCount :{resultProps[0]}</h2>
        <h2 className='text-center text-white font-mono text-xl'>allPrice :{resultProps[1]}</h2>
    </div>
 }
    </>
  )
}
