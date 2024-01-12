import { Routes, Route, } from 'react-router-dom'
import Opencode from './Opencode'

export default function Home() {
  return (
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nam ipsa minus vero voluptates veritatis illum dolorum earum omnis unde itaque tenetur accusantium possimus
             dolore excepturi quas, ut iste similique magnam.
        </p>
        <Routes>
          <Route path='opencode' element={<Opencode/>}/>
        </Routes>
    </div>
  )
}
