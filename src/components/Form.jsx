import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { addProduct, editProduct } from '../actions/productsActions'
import { showAlert, hideAlert } from '../actions/alertActions'

const PRODUCT = {
    name: '',
    price: '',
}

const Form = () => {
    const { loading, error, productToEdit } = useSelector(state => state.products)
    const { alert } = useSelector(state => state.alert)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [product, setProduct] = useState(PRODUCT)

    const handleSubmit = evt => {
        evt.preventDefault()

        if (Object.values(product).includes('')) {
            const alert = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3',
            }

            dispatch(showAlert(alert))

            return
        }

        dispatch(hideAlert())

        if (productToEdit) {
            dispatch(editProduct(product))
        }
        else {
            dispatch(addProduct(product))
        }

        navigate('/')
    }

    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit)
        }
    }, [loading])

    if (loading) {
        return (
            <div className='text-center'>
                <p>Cargando...</p>
            </div>
        )
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            {productToEdit ? 'Editar producto' : 'Agregar producto'}
                        </h2>

                        {alert && <p className={alert.classes}>{alert.msg}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='name'>Nombre del Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    name='name'
                                    placeholder='Ingresa el nombre del producto'
                                    value={product.name}
                                    onChange={evt => setProduct({ ...product, name: evt.target.value })}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='price'>Precio del Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='price'
                                    name='price'
                                    placeholder='Ingresa el precio del producto'
                                    value={product.price}
                                    onChange={evt => setProduct({ ...product, price: Number(evt.target.value) })}
                                />
                            </div>

                            <button type='submit' className='btn btn-primary font-bold font-weight-bold text-uppercase d-block w-100'>
                                {productToEdit ? 'Editar' : 'Agregar'}
                            </button>
                        </form>

                        {error &&
                            <p className='alert alert-danger p2 mt-4 text-center'>
                                Hubo un error
                            </p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form