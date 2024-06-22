import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || []
}

const AddToFavSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.items.unshift(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.items))
    }
  }
})

export const { addFavorite, removeFavorite } = AddToFavSlice.actions
export default AddToFavSlice.reducer
