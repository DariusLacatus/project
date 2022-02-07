import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';


function MyForm() {
  const [name, setName] = useState("");
    const [surname, setSurname] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The name you entered was: ${name}`);
    console.log(`The surname you entered was: ${surname}`);
  }

useEffect(() => {
    fetch('http://localhost:3000/comments')
    .then(res => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
},[])

  return (
    <form className="form" data-testid="Form-1" onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
        className="inputone" 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label>Enter your surname</label>
        <input 
          type="text" 
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm