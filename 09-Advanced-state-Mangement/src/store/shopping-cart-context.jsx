import { createContext,useReducer} from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

// easy to destructure when using properties in other components
export const CartContext = createContext({
    items : [],
    addItemToCart : () => {},
    updateItemQuantity : () => {},
});


function shoppingCartReducer(state,action){
  if(action.type === 'add-item'){
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state , //this is not needed as it has only one property
        items: updatedItems,
      };

  }
  if (action.type === 'update-item'){
    const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
  }
  return state;
}


export default function CartContextProvider ({children}){
    //useReducer is an alternate to useState to handle complicated state management
    const [shoppingCartState, dispatch]= useReducer(shoppingCartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    dispatch({type : 'add-item',
              payload : id,
            })
    
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({
      type : 'update-item',
      payload : {
          productId,
          amount,
      }
    })
  }

  const ctxValue = {
    items : shoppingCartState.items,
    addItemToCart : handleAddItemToCart ,
    updateItemQuantity : handleUpdateCartItemQuantity,
  }
  return (
    <CartContext.Provider value = {ctxValue}>
        {children}
    </CartContext.Provider>
  )
}