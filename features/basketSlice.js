import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items  = [...state.items, action.payload];
      console.log("Dispatcher fired...")
    },
    removeFromBasket: (state, action) => {
        state.items = state.items.filter( item => item.id != action.payload.id && item.restaurantId != action.payload.id)
        console.log("Removed from basket")
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItem =(state)=> state.basket.items;
export const selectBasketItemByRestaurantIdAndDishId = (state, restaurantId, dishId) => {
    return state.basket.items.filter(item => item.restaurantId === restaurantId && item.id === dishId);
    
}

export const calculateBasketTotalPrice = (state) => {
    if(state.basket.items.length < 1){
        return 0.00
    }
    let total = 0;
    state.basket.items.forEach(item => {
        let number = item.price.substring(1);
        number = parseFloat(number);
        total += number;
    })
    return total
}

export const getGroupedItems = (state) => {
  let groupedItems = []
  let added = []
  state.basket.items.forEach((item)=>{
    if(!added.includes(item)){
      instances = state.basket.items.filter(i => item.restaurantId === i.restaurantId && item.id === i.id);
      let grouping = {
        item: item,
        count: instances.length
      }
      groupedItems.push(grouping)
      added.push(item)
    }
  })

  return groupedItems;
}
export default basketSlice.reducer;