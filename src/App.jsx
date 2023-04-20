import { react } from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Homepage from './pages/Homepage';

import NavigationalBar from './NavigationalBar';


function App() { 

 

  return (
  <>
        <NavigationalBar/>
  <div className="container">
    <div className="row">
      <div className="col">
          <h1>My Full-Stack Blog</h1>
        </div>
        <div id="page-body">
         <Homepage/>        
         
        </div>

      </div>
  </div>

  </>
  )
}

export default App
