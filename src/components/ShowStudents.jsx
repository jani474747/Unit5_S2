import { useEffect, useState } from "react";
import "./table.css"

export const ShowStudents = () => {

  const [name , setName] = useState([])

  useEffect( () => 
  (
    namedata()
  ) , [])

  async function namedata()
  {
    var data1 = await fetch(" http://localhost:8000/students")
    var data2 = await data1.json()
    setName(data2)
  }

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
              <td className="first_name">
               {name.map( (t) =>
               (
                 <div>{t.first_name}</div>
               ))}
              </td>
              <td className="last_name">
              {name.map( (t) =>
               (
                 <div>{t.last_name}</div>
               ))}
              </td>
              <td className="email">
              {name.map( (t) =>
               (
                 <div>{t.email}</div>
               ))}
              </td>
              <td className="gender">
              {name.map( (t) =>
               (
                 <div>{t.gender}</div>
               ))}
              </td>
              <td className="age">
              {name.map( (t) =>
               (
                 <div>{t.age}</div>
               ))}
              </td>
              <td className="tenth_score">
              {name.map( (t) =>
               (
                 <div>{t.tenth_score}</div>
               ))}
              </td>
              <td className="twelth_score">
              {name.map( (t) =>
               (
                 <div>{t.twelth_score}</div>
               ))}
              </td>
              <td className="preferred_branch">
              {name.map( (t) =>
               (
                 <div>{t.preferred_branch}</div>
               ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };