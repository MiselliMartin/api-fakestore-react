import React from 'react'
import { FloatButton } from 'antd'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {

  const scrollToTop = () => {
    const inicioElement = document.getElementById('inicio');
    if (inicioElement) {
      inicioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Bienvenides a TinchoStore, de la mano de <code>fakestore!</code></h1>
        <p>
          ¡Bienvenide a TinchoStore, mi proyecto personal donde exploré
          y aprendí a fondo sobre el mundo de React y sus herramientas
          asociadas. El objetivo principal de esta página fue sumergirme en el
          desarrollo con React y, más específicamente, comprender el uso de React
          Router y crear un carrito de compras totalmente funcional.
        </p>

        <h2>Tecnologías Utilizadas</h2>
        <p>
          Durante este emocionante viaje, aproveché diversas tecnologías para dar
          vida a mi página. React fue la piedra angular, complementado con
          bibliotecas y frameworks como Bootstrap, UI Material y Ant Design.
          Además, incorporé poderosos conceptos de React, incluyendo{' '}
          <code>useEffect</code>, <code>useState</code>, <code>useReducer</code>,
          y <code>useContext</code>.
        </p>

        <h2>Experiencia de Aprendizaje</h2>
        <p>
          La creación del carrito de compras no solo me permitió aprender React de
          manera más profunda, sino que también me brindó una valiosa
          introducción a las librerías de diseño específicas para React. Enfrenté y
          superé desafíos que me ayudaron a consolidar mis habilidades y comprender
          la importancia de la gestión del estado en aplicaciones dinámicas.
        </p>

        <h2>Lecciones Aprendidas</h2>
        <p>
          A lo largo de este proyecto, adquirí habilidades prácticas en React y me
          familiaricé con el uso efectivo de los hooks mencionados anteriormente.
          El proceso no solo fue educativo, sino también gratificante al ver cómo
          la teoría se traduce en una aplicación real y funcional.
        </p>

        <h2>Futuro de la Página</h2>
        <FloatButton.BackTop />
        <p>
          Mirando hacia el futuro, tengo la ambición de llevar mi proyecto al
          siguiente nivel. Mi meta es implementar la capacidad de realizar
          compras utilizando Mercado Pago, brindando así a los usuarios una
          experiencia completa y segura.
        </p>

        <p style={{marginBottom: '10px'}}>
          Ahora hacé click en <NavLink to='/productos' onClick={() => scrollToTop()}>Productos</NavLink> acá o en la NavBar para vivir la experiencia!
        </p>
        <hr style={{marginTop: '10px'}}/>
      </div>
    </>
  )
}
