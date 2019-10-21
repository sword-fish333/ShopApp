import {ADD_TO_CART} from '../actions/cart';
import CartItem from  '../../models/CartItem';
const initialState={
    items:{},
    totalAmount:0
};

export default (state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            const addedProduct=action.payload;
            const prodPrice=addedProduct.price;
            const prodTitle=addedProduct.title;

            let newOrUpdatedItem;
            if(state.items[addedProduct.id]){
                //have the item in the cart
                newOrUpdatedItem=new CartItem(
                  state.items[addedProduct.id].quantity+1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum+prodPrice
                );
                return {
                    ...state,
                    items:{
                        ...state.items,[addedProduct.id]:newOrUpdatedItem
                    },
                    totalAmount:state.totalAmount+prodPrice
                }
            }else{
                newOrUpdatedItem=new CartItem(1,prodPrice,prodTitle,prodPrice);
                return {
                    ...state,
                    items:{
                        ...state.items,[addedProduct.id]:newOrUpdatedItem
                    },
                    totalAmount:state.totalAmount+prodPrice
                }
            }
    }
    return state;
}