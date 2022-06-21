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
import axios from '../config/axios'

export function getProducts() {
  return async dispatch => {
    dispatch({
      type: GET_PRODUCTS,
      payload: true,
    })

    try {
      const { data } = await axios.get('/products')

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      })
    }
    catch {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: true,
      })
    }
  }
}

export function getProduct(id) {
  return async dispatch => {
    dispatch({
      type: GET_PRODUCT,
      payload: true,
    })

    try {
      const { data } = await axios.get(`/products/${id}`)

      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: data,
      })
    }
    catch {
      dispatch({
        type: GET_PRODUCT_ERROR,
        payload: true,
      })
    }
  }
}

export function addProduct(product) {
  return async dispatch => {
    dispatch({
      type: ADD_PRODUCT,
      payload: true,
    })

    try {
      await axios.post('/products', product)

      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: product,
      })

      alert('Producto agregado correctamente')
    }
    catch {
      dispatch({
        type: ADD_PRODUCT_ERROR,
        payload: true,
      })
    }
  }
}

export function deleteProduct(id) {
  return async dispatch => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: true,
    })

    try {
      await axios.delete(`/products/${id}`)

      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: id,
      })

      alert('Producto eliminado correctamente')
    }
    catch {
      dispatch({
        type: DELETE_PRODUCT_ERROR,
        payload: true,
      })
    }
  }
}

export function editProduct(product) {
  return async dispatch => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: true,
    })

    try {
      await axios.put(`/products/${product.id}`, product)

      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: product,
      })

      alert('Producto editado correctamente')
    }
    catch {
      dispatch({
        type: EDIT_PRODUCT_ERROR,
        payload: true,
      })
    }
  }
}
