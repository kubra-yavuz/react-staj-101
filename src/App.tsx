import React from 'react'
import { useState } from 'react'

const App = () => {
  const [sayi, setSayi] = useState(42)

  return (
    <>
      <h1>Sayı: {sayi}</h1>
      <button onClick={() => setSayi(sayi + 1)}>Arttır</button>
      <button onClick={() => setSayi(sayi - 1)}>Azalt</button>
    </>
  )
}

export default App
