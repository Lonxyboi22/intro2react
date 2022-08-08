import { useState } from "react"
import MainArea from "./MainArea"
import Topbar from "./Topbar"
import MovieLookup from "./components/MovieLookup"

const App = () => {
  const [ mode, setMode ] = useState("dark")  //react hook
  const [name, setName ] = useState("Boob")
  //useEffect is also a thing!
  const changeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1>
        Hello, { name }
      </h1>
      <Topbar name = { name } changeName = { changeName } mode={mode} setMode= {setMode}/>
      
      <MovieLookup/>
    </div>
  );
}

export default App;
