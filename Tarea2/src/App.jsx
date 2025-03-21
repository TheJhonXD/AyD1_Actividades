import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div>
        <div>
          <button onClick={() => setShow(!show)}>
            {show ? 'Ocultar' : 'Mostrar'}
          </button>
          {show && (
            <p>
              <h2>Jhonatan Josué Tzunún Yax</h2>
              <h3>201900831</h3>
              <span>Análisis y diseño de sistemas</span>
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
