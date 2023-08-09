import {  createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      {
        id: 1,
        name: 'Все', 
        isSelected: true,
      },
      {
        id: 2,
        name: 'Мясные',
        isSelected: false,

      },
      {
        id: 3,
        name: 'Вегетарианская',
        isSelected: false,
      },
      {
        id: 4,
        name: 'Гриль',
        isSelected: false,
      },
      {
        id: 5,
        name: 'Острые',
        isSelected: false,
      },
      {
        id: 6,
        name: 'Закрытые',
        isSelected: false,
      }
    ]
  },
  reducers: {
    updateIsSelected: (state, {payload}) => {
      // state.isSelected = !state.isSelected
      // console.log(1);

      // state.categories = state.categories.map(c => ({
      //   ...c,
      //   isSelected: !c.isSelected
      // }))

      const updateItems = state.categories.map(c => ({
        ...c,
        isSelected: !c.isSelected
      }))

      console.log(updateItems);
      

      
    }
  }
})

export default categoriesSlice.reducer
export const { updateIsSelected } = categoriesSlice.actions