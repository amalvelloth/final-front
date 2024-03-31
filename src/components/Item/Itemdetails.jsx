import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Adminpanel/Sidebar'
import Topbar from '../Adminpanel/Topbar'
import './itemview.css'
import axios from 'axios'
import{Buffer} from 'buffer';
import EditIcon from '@mui/icons-material/Edit';
import Itemedit from './Itemedit'

const Itemdetails = () => {
    var[selected,setSelected]=useState();
    var[update,setUpdate]=useState(false);
    var[item,setItem]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4005/iview")
        .then(response=>{
            setItem(response.data)
        })
        .catch(err=>console.log(err))

    },[])
    const updateValues=(row)=>{
        setSelected(row)
        setUpdate(true)
    }
  var result=
    <div className='bb'>
        <Topbar/>
        <Sidebar/>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Subcategory</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {item.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>
                                    {row.Category}
                                </TableCell>
                                <TableCell>{row.Subcategory}</TableCell>
                                <TableCell>{row.Description}</TableCell>
                                <TableCell>{row.Price}</TableCell>
                                <TableCell>
                                    <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                                    width="50" height="50" alt="Error"/>
                                </TableCell>
                                <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  if(update)
  result=<Itemedit data={selected}method='put'/>
  return(result)
}

export default Itemdetails
