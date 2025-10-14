import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <label htmlFor="CampNome"> Nome: </label>
      <br />
      <input type="text" placeholder="Digite seu nome" nome="CampNome" id='CampNome' />

      <br />

      <label htmlFor="CampIdade"> Idade: </label>
      <br />
      <input type="date" nome="CampIdade" id='CampIdade' />

      <br />

      <label htmlFor="CampTel"> Telefone: </label>
      <br />
      <input type="number" placeholder='Digite seu telefone' name="CampTel" id="CampTel" />

      <br />

      <a href="https://www.instagram.com/accounts/onetap/?next=%2F"> Instagram </a>

      <br />

      <a href="https://github.com/arthurhenryck"> Guthub </a>

      <br />

      
    </>
  )
}

export default App
