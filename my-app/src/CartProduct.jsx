import React from 'react'

export default function CartProduct(props) {

  let {id , img="./img/noimg.jfif" , title , text , priceGT , priceBT , count} = props


  function clickHandler (id){
     props.onAddToCart(id)
  }

  return (
    <div className='w-[320px] h-[450px] bg-slate-300 rounded-md m-5 p-3 font-mono' onClick={() => clickHandler(id)}>
        <img src={img} alt="imgCartProduct"  className='w-[320px] h-[280px] rounded-md'/>
        <div className='flex justify-start items-start flex-col'>
            <h2 className='pt-3'>{title}</h2>
            <p className='pt-2 pb-2'>{text}</p>
        </div>
            <div className='flex justify-start items-center gap-3'>
              <span className='line-through text-gray-600'>{priceGT}</span>
              <span>${priceBT}</span>
        </div>
    </div>
  )
}

