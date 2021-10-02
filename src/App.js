
// import './App.css';
// import Banner from './Components/Banner/Banner';
// import NavBar from './Components/NavBar/NavBar';
// import RowPost from './Components/RowPost/RowPost';
import axios from 'axios'
import {useState} from 'react';
import Table from './Table';





function App() {
  const [state, setState] =useState([])
  return (
    <div>
      {/* <NavBar/>
      <Banner/>
      <RowPost/>
      <RowPost/> */}
      <h1>Hello world!</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              setState(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}> CLick this  </button>
     {state.length >0 &&
        <table>
        <tr>
          <th>Company</th>
          <th>title</th>
          <th>body</th>
        </tr>
        <Table data={state}/>
      </table>
      }
      
    </div>
  );
}

export default App;
