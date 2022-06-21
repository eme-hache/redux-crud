import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteProduct } from '../actions/productsActions'

const Product = ({ product }) => {
    const { name, price, id } = product

    const dispatch = useDispatch()

    const handleDelete = () => {
        const confirmDelete = confirm('¿Estas seguro de eliminar este producto?')

        if (confirmDelete) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>$ <span className='font-weight-bold'>{price}</span></td>
            <td className='acciones'>
                <Link to={`product/${id}`} className='btn btn-primary mr-2'>
                    Editar
                </Link>

                <button className='btn btn-danger' onClick={handleDelete}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Product