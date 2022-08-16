import Actiontypes from "../Actiontypes/Actiontypes"
import instance from "../../API/Fakestore"
export const  fetchdata = ()=>{
  return async function(dispatch){
    const {data} = await instance.get("/products")
    dispatch({type:Actiontypes.FETCH_DATA,payload:data})
  }
}
export const  selectdata = (id)=>{
  return async function(dispatch){
    const {data} = await instance.get(`/products/${id}`)
    dispatch({type:Actiontypes.SELECTED_ITEM,payload:data})
  }
}

export const  setdata = (data)=>{
  return (
    {
       type : Actiontypes.SET_dATA,
       payload : data
    }
  )
}
export const  seleteddata = (data)=>{
  return (
    {
       type : Actiontypes.SELECTED_dATA,
       payload : data
    }
  )
}

export const remove_seleteditem = ()=>{
  return (
    {
      type : Actiontypes.DELETED_SELECTED_dATA
    }
  )
}