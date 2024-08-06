import { Box } from "@mui/material";
import Button from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
interface Pops{
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const Pop: React.FC<Pops> = ({ open, setOpen }) => {
    const handleOpen =()=>setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <input type="text" placeholder="Add Title" className="add-input"/>
                <div className='button-container'>
        
        <button className='docs-button'>Add </button>
        </div>
                </Box>
            </Modal>
        </div>
    )
}