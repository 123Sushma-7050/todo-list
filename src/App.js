import Header from "./components/Header";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import "./App.css"
import {useState} from "react";

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData=()=>{
    console.log(data);
   setData([...data,{name,email}]);
 
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
     
  
    </div>
  );
}

export default App;
