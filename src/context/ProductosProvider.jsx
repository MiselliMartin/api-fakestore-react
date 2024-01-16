import { ProductosContext } from "./ProductosContext"

import React, { useState, useEffect } from "react"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProductos(data)
        } catch (e) {
            console.error('Error: ', e)
            setErrors(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ProductosContext.Provider value={{ productos, isLoading, errors }}>
            {children}
        </ProductosContext.Provider>
    )
}
