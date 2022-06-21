import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getProducts } from '../actions/productsActions'
import Product from '../components/Product'

const AllProducts = () => {
    const { products, loading, error } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    
    return (
        <>
            <h2 className='text-center my-5'>Listado de Productos</h2>

            {error && <p className='alert alert-danger text-center mt-4 font-weight-bold'>
                Hubo un error
            </p>}

            {loading && <p className='text-center mt-4'>Cargando...</p>}

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => <Product key={`product-${product.id}`} product={product} />)}
                </tbody>
            </table>
        </>
    )
}

export default AllProducts