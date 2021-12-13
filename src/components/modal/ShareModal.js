import React,{useState,useEffect} from 'react'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';
import '../../components/mainCard/rightDiv/RightDiv.css'
import { IconButton } from '@mui/material';
import './ShareModal.css'


Modal.setAppElement('#root')
export default function ShareModal(props) {
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const [closeClicked,setCloseClicked]=useState(false)
    
const closeHandler=()=>{
    setModalIsOpen(false);
    props.shareClose()
}
useEffect(() => {
    setModalIsOpen(props.isOpen)
}, [props.isOpen])
    

    return (
        <div>
                <Modal className="modal" overlayClassName="overlay" isOpen={modalIsOpen} shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} onRequestClose={()=>closeHandler()} centered>
            
            <div>
                 
            <IconButton className={!closeClicked? "btn-close" : "btn-clicked-close"} onClick={()=>closeHandler()}>
                    <CloseIcon/>
                </IconButton>
                <h1>
                    Share 
                </h1>
            </div>



             </Modal>
        </div>
        
    )
}
