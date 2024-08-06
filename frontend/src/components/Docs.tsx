
import React from 'react'
import { Pop } from './Pop';

const Docs: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className='docs-main'>
      <h1>Docs</h1>
      <button className='docs-button' onClick={handleOpen}>Add Document</button>
      <Pop open={open} setOpen ={setOpen}/>
    </div>
  )
}

export default Docs