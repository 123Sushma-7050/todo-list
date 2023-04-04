import Header from "./components/Header";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import "./App.css"
import {useState} from "react";

import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData=()=>{
   setData([...data,{name,email}])
   setName("");
   setEmail("");
 }

 const removeItem =(index)=>{
let removedItem = data;
removedItem.splice(index,1);
setData([...removedItem])

 }
  return (
    <div className="App">
     
     <Header/>
     <div className="form">
     <Stack spacing={2} direction="row">
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event)=>{setName(event.target.value)}} />
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
      <Button variant="contained" color="success" onClick={addData}><AddIcon/></Button>
      </Stack>
     </div>
     
     <div className="data">
      {data.map((element,index)=>{
        return( 

      <div className="data_val" key={index} >
        <h4>{element.name}</h4>
        <h4>{element.email}</h4>
        <Button variant="contained" color="error" onClick={()=>removeItem(index)}><DeleteIcon/></Button>
      </div>

        )
      })}
    
     </div>
  
    </div>
  );
}

export default App;
