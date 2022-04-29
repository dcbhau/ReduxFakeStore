import * as ActionType from "../actionTypes";

const InitialState = 
{
    products : [],
}


export const productReducer = (state = InitialState , action) => 
{
    switch(action.type)
    {
        case ActionType.GET_PRODUCTS :
            return{
                ...state,
                products:action.payload
            }
        case ActionType.FETCH_PRODUCT :
            return{
                ...state,
                products:action.payload
            }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {} , action) => 
{
    switch(action.type)
    {
        case ActionType.SELECTED_PRODUCT :
            return{
                ...state,
                ...action.payload
            }
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
