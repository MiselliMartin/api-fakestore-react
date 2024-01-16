import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card'
import '../styles/productospage.css'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ProductosPage = () => {

    const {listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)

    const {productos, isLoading, errors} = useContext(ProductosContext) 

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }

    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    const handleAumentar = (id) => {
        aumentarCantidad(id)
    }

    const handleDisminuir = (id) => {
        disminuirCantidad(id)
    }

    return (
        <>
            <h3>Productos</h3>
            <div className='container-carta'>
                {isLoading ? <p>Cargando...</p> : errors ? <p>Ups... Se ha producido un error...</p> :
                    productos.map(producto => {
                        return (
                            <Card 
                            key={producto.id}
                            id={producto.id}  
                            imagen={producto.image} 
                            titulo={producto.title} 
                            descripcion={producto.description} 
                            precio={producto.price} 
                            handleAgregar={() => handleAgregar(producto)} 
                            handleQuitar={() => handleQuitar(producto.id)} 
                            handleAumentar={() => handleAumentar(producto.id)} 
                            handleDisminuir={() => handleDisminuir(producto.id)}></Card>
                        )
                    })}
            </div>
        </>
    )
}
