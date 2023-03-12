import logo from "./logo.svg";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <table>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {JSONDATA.filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
