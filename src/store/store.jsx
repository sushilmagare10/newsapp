// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './AddToFavSlice'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
})

export default store
