import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    <Link to='/' className='text-light'>
                        Redux CRUD
                    </Link>
                </h1>
            </div>

            <nav>
                <Link
                    className='btn btn-danger nuevo-post d-block d-md-inline-block'
                    to="/product/new"
                >
                    Agregar Producto &#43;
                </Link>
            </nav>
        </header>
    )
}

export default Header