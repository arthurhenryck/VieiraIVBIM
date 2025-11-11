import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dados, setDados] = useState([]);

useEffect(()=>{
  fetch("https://api.alanleiser.com/")
    .then(res => res .json())
    .then(data =>console.log(data))
},[])

  const enviarFormas=(e)=>{
    e.preventdefault()
    fetch('https://api.alanleiser.com/user',{
      method:'POST',
      body:JSON.stringify({
        "email": "",
        "password":"" 
      })
    })
    console.log(`Email: ${email},Senha: ${password}`)
  }





  return (
    <>
      <label htmlFor="CampNome"> Nome: </label>
      <br />
      <input type="text" placeholder="Digite seu nome" name="CampNome" id="CampNome" />

      <br />

      <label htmlFor="CampIdade"> Idade: </label>
      <br />
      <input type="number" placeholder="Digite sua idade" name="CampIdade" id="CampIdade" />

      <br />

      <label htmlFor="CampTel"> Telefone: </label>
      <br />
      <input type="number" placeholder="Digite seu telefone" name="CampTel" id="CampTel" />

      <br />

      <a href="https://www.instagram.com/accounts/onetap/?next=%2F">Instagram</a>
      <br />
      <a href="https://github.com/arthurhenryck">Github</a>

    </>
  );
}

export default App;
