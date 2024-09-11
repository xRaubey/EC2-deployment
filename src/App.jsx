
import Table from './Table.jsx'
import {useState} from "react";
import {Login} from "./components/Login.jsx";
function App() {

    const [count, setCount] = useState(0)

  return (
    <>

        <div>
            Count: {count}
        </div>
      <div>App</div>
        <Table setCount={setCount}></Table>
        <Login></Login>

    </>
  )
}

export default App
