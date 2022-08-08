import { useState } from "react"
import Heading from "./components/Heading"
//STATE: all the data a given react component needs to know at any point in time.

const App = () => {

  const [counter, setCounter] = useState(1)
  const [fname, setFName] = useState("john")
  const [lname, setLName] = useState("doe")

  const increaseCounter = () => {
    console.log(counter);
    setCounter(counter + 1) 
  }

  const decreaseCounter = () => {
    console.log(counter)
    setCounter(counter - 1)
  }

  const changeFirstName = (e) => {
    setFName(e.target.value)
  }

  const changeLastName = (e) => {
    setLName(e.target.value)
  }

  return (
    <div className="App">

      <form>
        <input type="text" name="fname" value={fname} onChange={changeFirstName} />
        <input type="text" name="lname" value={lname} onChange={changeLastName} />
      </form>


      <div>
        <p style={{border:"1px solid #333", padding:"3px", fontSize:"100px"}}>
          { counter }
        </p>
      </div>

      <button onClick={increaseCounter}>Add</button>
      <button onClick={decreaseCounter}>Subtract</button>

    <Heading counter = {counter} />
    </div>

  );
}

export default App;
