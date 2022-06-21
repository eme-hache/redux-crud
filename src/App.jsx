import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AllProducts from './pages/AllProducts'
import EditProduc from './pages/EditProduct'
import NewProduct from './pages/NewProduct'
import Header from './components/Header'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className='container mt-5'>
          <Routes>
            <Route index path="/" element={<AllProducts />} />
            <Route path="/product/new" element={<NewProduct />} />
            <Route path="/product/:id" element={<EditProduc />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
