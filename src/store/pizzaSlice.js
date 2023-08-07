import { createSlice } from "@reduxjs/toolkit"

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzaItems: [
      {
        id: 1,
        name: 'Чизбургер пиццa',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '395',
        count: 1
      },
      {
        id: 2,
        name: 'Сырная пицца',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '495',
        count: 1

      },
      {
        id: 3,
        name: 'Креветки по-азиатски',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '295',
        count: 1

      },
      {
        id: 4,
        name: 'Сырный цыпленок',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '495',
        count: 1

      },
      {
        id: 5,
        name: 'Чизбургер пиццa',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '395',
        count: 1

      },
      {
        id: 6,
        name: 'Сырная пицца',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '495',
        count: 1

      },
      {
        id: 7,
        name: 'Креветки по-азиатски',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '295',
        count: 1

      },
      {
        id: 8,
        name: 'Сырный цыпленок',
        imgUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        price: '495',
        count: 1
      },

    ]
  },
  reducers: {
    incrementPizzaCount: (state, { payload: currentId }) => {
      console.log(currentId);
      
      const updatedItems = state.pizzaItems.map(p => ({
        ...p,
        count: p.id === currentId ? p.count += 1 : p.count
      }))
  
    }
  }
})

export const { incrementPizzaCount } = pizzaSlice.actions;
export default pizzaSlice.reducer