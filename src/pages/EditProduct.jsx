import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getProduct } from '../actions/productsActions'
import Form from '../components/Form'

const EditProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [])

    return (
        <Form />
    )
}

export default EditProduct