import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {seleteddata,selectdata} from "../Redux/Actions/Actions";
import {useParams} from "react-router-dom";
import axios from "axios";
import {remove_seleteditem} from "../Redux/Actions/Actions"
const Productdetails = () => {
    const product = useSelector((state)=>state.targetitem)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(product)
    useEffect(()=>{
            dispatch(selectdata(id))
        return ()=> dispatch(remove_seleteditem())
      },[])
  return (
    <div>
     {product.id ?   (<div className='card'>
      <div>
        <h1>{product.category}</h1>
      </div>
      <div>
        <img src={product.image} style={{"width":"300px","height":"300px"}} alt=""/>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
    </div>) : <div className='card' > <h1>Loading ...</h1></div>}
    </div>
 
  )
}

export default Productdetails
