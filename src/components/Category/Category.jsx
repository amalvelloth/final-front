import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './Category.css'
import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Category = () => {
  var[inputs,setInputs]=useState({
    "Cname":'',
    "Status":'Active'
  })
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

    const addHandler=() =>{
      console.log("Clicked")

      console.log(inputs)
      axios.post("http://localhost:4005/new",inputs)
      .then((response)=>{
        alert("Record Saved")
      })
      .catch(err=>console.log(err))
      
  }


  return (
   
    <div className='aa'>
      <Topbar/>
      <Sidebar/>
      
      <h3>Category</h3>
      <TextField label="category name" variant="outlined" name="Cname" value={inputs.Cname}onChange={inpuHandler}/><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    name="Status" value={inputs.Status}
onChange={inpuHandler}    
   
  >
    <MenuItem value={"Stock"}>Stock</MenuItem>
    <MenuItem value={"Out of Stock"}>Out of Stock</MenuItem>
    
  </Select>
</FormControl><br/><br/><br/>
      <div className='ss'><Button variant="contained"onClick={addHandler}>Submit</Button>
    </div></div>
  )
}

export default Category