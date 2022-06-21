import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,

  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,

  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,

  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,

  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from '../types'

// Each reducer has a state and an action
const initialState = {
  products: [],
  error: null,
  loading: false,
  productToEdit: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
    case GET_PRODUCT:
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload],
      }
    case GET_PRODUCTS_ERROR:
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productToEdit: action.payload,
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter(product => product.id !== action.payload),
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        productToEdit: null,
        loading: false,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? action.payload : product
        )
      }
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        productToEdit: null,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}