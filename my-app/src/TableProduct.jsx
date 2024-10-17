import React from 'react'

export default function TableProduct(props) {

  let {id , img , title , text , priceGT , priceBT , count} = props
  
  function clickHandler(id){
    props.onRemove(id)
  }

  function plusHandler(id){
  
    props.onPlus(id)
  }

  function minusHandler(id){
    props.onMinuse(id)
  }

  return (
    <tr>
        <td>{id}</td>
        <td><img src={img} alt="imageTable"  className='w-20 h-20 mx-auto'/></td>
        <td>{title}</td>
        <td>{priceBT}</td>
        <td>
            <button onClick={() => plusHandler(id)} className='w-6 h-6 bg-green-500 text-white rounded-md m-1'>+</button>
            {count}
            <button onClick={() => minusHandler(id)} className='w-6 h-6 bg-red-500 text-white rounded-md m-1'>-</button>
        </td>
        <td>{count * priceBT}</td>
        <td><button className='bg-red-600 rounded-md text-white w-full h-12 m-2' onClick={() => clickHandler(id)}>Remove</button></td>
    </tr>
  )
}
