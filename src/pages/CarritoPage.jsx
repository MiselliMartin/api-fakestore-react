import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra, eliminarTodo } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }

  const comprar = () => {
    print()
  }

  return (
    <>
      {listaCompras.length < 1 ? <h3>El carrito está vacío...</h3> :
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                listaCompras.map(producto => {
                  return (
                    <tr key={producto.id}>
                      <th>{producto.title}</th>
                      <td>{producto.price}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <button className='btn btn-outline-danger' onClick={() => disminuirCantidad(producto.id)}>-</button>
                          <button className='btn btn-outline-primary active'>{producto.cantidad}</button>
                          <button className='btn btn-outline-success' onClick={() => aumentarCantidad(producto.id)}>+</button>
                        </div>
                      </td>
                      <td><button className='btn btn-danger' onClick={() => eliminarCompra(producto.id)}>Eliminar</button></td>
                    </tr>
                  )
                })
              }
              <tr>
                <th><b>Precio:</b></th>
                <td></td>
                <td></td>
                <td>${calcularTotal()}</td>
              </tr>
            </tbody>
          </table>

          <div className='d-grid gap-2'>
            <button className='btn btn-primary btn-lg' onClick={comprar}>Comprar</button>
            <button className='btn btn-outline-danger' onClick={eliminarTodo}>Eliminar carrito</button>
          </div>
        </>
      }
    </>

  )
}
