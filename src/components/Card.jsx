import { useContext, useEffect, useState } from "react"
import '../styles/card.css'
import { CarritoContext } from "../context/CarritoContext"

export const Card = ({ id, imagen, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {

    const {listaCompras} = useContext(CarritoContext)

    const [added, setAdded] = useState(false)

    const verificarAdded = () => {
        listaCompras.map(item => {
            if (item.id === id) setAdded(true)
        })
    }

    useEffect(() => {
      verificarAdded()
    }, [listaCompras])
    

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <article className='carta'>
            <img src={imagen} alt={titulo} className='carta-img' />
            <div className='carta-rest'>
                <p className='carta-title'>{titulo}</p>
                <p className='carta-description'>{descripcion}</p>
                <p className='carta-price'>{precio}</p>
                <button type='button' className={added ? 'btn btn-lg btn-danger' : 'btn btn-lg btn-success'} onClick={added ? clickQuitar : clickAgregar}>{added ? 'Quitar' : 'Agregar'}</button>
            </div>
        </article>
    )
}
