import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({ children }) => {

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] agregarCompra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] aumentarCantidad',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] disminuirCantidad',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] eliminarCompra',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTodo = () => {
        const action= {
            type: '[CARRITO] eliminarTodo',
            payload: ''
        }
        dispatch(action)
    }

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] agregarCompra':
                return [...state, action.payload];

            case '[CARRITO] aumentarCantidad':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item, cantidad:  cant}
                    return item
                })

            case '[CARRITO] disminuirCantidad':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && item.cantidad > 1) return {...item, cantidad:  cant}
                    return item
                })

            case '[CARRITO] eliminarCompra':
                return state.filter((compra) => compra.id !== action.payload);

            case '[CARRITO] eliminarTodo':
                return initialState
            
                default:
                return state;
        }
    };

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra, eliminarTodo }}>
            {children}
        </CarritoContext.Provider>
    )
}
