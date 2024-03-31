
import './Topbar.css'
import './Home.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
          boOKWOrm
          </span>
        </div>
       
        <div className='topright'>
          
        <Link to="http://localhost:3000/">  <Button >log out</Button></Link>

         
        </div>

      </div>
    </div>
  )
}

export default Topbar