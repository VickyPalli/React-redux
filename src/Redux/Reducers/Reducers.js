import Actiontypes from "../Actiontypes/Actiontypes"


export const setdatareducer = (state=[],action)=>{
       switch(action.type){
         case Actiontypes.SET_dATA:
            return [...action.payload];
        case Actiontypes.FETCH_DATA:
              return [...action.payload]
            default :
            return state;
       }
}
export const seleteddatareducer = (seleteddata={},action)=>{
       switch(action.type){
         case Actiontypes.SELECTED_dATA:
            return {...action.payload};
        case Actiontypes.DELETED_SELECTED_dATA:
              return {};
        case Actiontypes.SELECTED_ITEM:
              return {...action.payload};
            default :
            return seleteddata;
       }
}