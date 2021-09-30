import logo from './logo.svg';
import './App.css';
import ls from 'local-storage'
import React, {useState} from 'react'
function App() {
  const [data, setdata] = useState({
    name:""
  })
  return (
    <div className="App">
      <form action="" method="post">
        <input type="text" name="" id="" value={data.name}
          onChange={(e)=>{
            setdata({
              ...data, name:e.target.value
            })
            console.log(data.name)
          }}
        />
            
        <button 
          type="button"
          onClick={(e)=>{
            e.preventDefault()//mencengah reload
            ls("kunci",JSON.stringify(data)) //ngeset local storage

            console.log(JSON.parse(ls.get("kunci"))) //ngeget local storage
          }}
        >
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default App;
