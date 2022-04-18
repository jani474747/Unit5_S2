import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

import "./components/table.css"

function App() {

  const [value , setValue] = useState(true)

  const toggle = () =>
  {
    setValue(!value)
    console.log(value)
  }

  return (
    <div className="App">
      <button className="togglebtn" onClick={toggle}>
        {
          value ? "Add a new student" : "Go to students list"
        }
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      { value ? <ShowStudents></ShowStudents> : <AddStudent></AddStudent>}
      {/* <ShowStudents></ShowStudents> */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;