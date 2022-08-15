import React, { useEffect } from 'react'
import axios from 'axios';
import {setdata} from "../Redux/Actions/Actions"
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import "./style.css"
const Product = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.alldata)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      dispatch(setdata(res.data))
    })
  },[])
  return (
    <div className='container'>
      {
        data.length ?
        data.map((item)=>{
          return(
            <Link to={`/product/${item.id}`} key={item.id}>
               <div >
            <img src={item.image} style={{"width":"200px","height":"200px"}} alt=""/>
          </div>
            </Link>
           
          )
         
        }) : <div><h1>...Page Loading</h1></div>
      }
    </div>
  )
}

export default Product
