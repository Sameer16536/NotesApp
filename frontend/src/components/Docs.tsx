import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pop } from './Pop';

interface Note {
  id: number;
  title: string;
}


const Docs: React.FC = () => {
  const [open, setOpen] =useState(false);
  const[title,setTitle]= useState('')
  const[data,setData]= useState<Note[]>([]) 
  const handleOpen = () => setOpen(true);

  //Function to add data in database::
 const addData = async () => {
    try {
      console.log(title);
    await axios.post('/note',{title})
    //fetch newly updated data:
    getData()
    } catch (error) {
      console.log(error)
    }
  }


  //getData::
  const getData =async()=>{
    try {
      const response = await axios.get('/note');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className='docs-main'>
      <h1>Docs</h1>
      <button className='docs-button' onClick={handleOpen}>Add Document</button>
      <div className='grid-main'>
        {data.map((d) => (
          <div key={d.id}> 
            <p>{d.title}</p>
          </div>
        ))}
      </div>
      <Pop open={open} setOpen ={setOpen} title={title} setTitle={setTitle} addData={addData}/>
    </div>
  )
}

export default Docs