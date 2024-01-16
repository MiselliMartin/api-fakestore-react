import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomePage } from "./pages/HomePage"
import { ProductosPage } from "./pages/ProductosPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/productos' element={<ProductosPage></ProductosPage>}></Route>
            <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}