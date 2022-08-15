import Actiontypes from "../Actiontypes/Actiontypes"



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