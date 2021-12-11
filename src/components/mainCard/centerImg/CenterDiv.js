import { IconButton } from '@mui/material'
import React,{useState} from 'react'
import imgTest from '../../../image/arch/arch1.png'
import './CenterDiv.css'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



export default function CenterDiv(props) {

    const [playClicked,setPlayClicked]=useState(false);
    const [downClicked, setDownClicked] = useState(false);
    const [infoClicked, setInfoClicked] = useState(false);
    
   return (
        <div className="container-image-div" >
            <div className="images" style={{backgroundImage: `url(${props.card})`}}>
                    <div className="action-bar">
                                <IconButton className= {!playClicked? "action-icon" : "action-icon-clicked"} onClick={()=>setPlayClicked(!playClicked)}>
                                <PlayCircleOutlineOutlinedIcon  />
                                </IconButton>
                                <IconButton className= {!downClicked? "action-icon" : "action-icon-clicked"} onClick={()=>setDownClicked(!downClicked)}>
                                <ArrowCircleDownOutlinedIcon />
                                </IconButton >
                                <IconButton className= {!infoClicked? "action-icon" : "action-icon-clicked"} onClick={()=>setInfoClicked(!infoClicked)}>
                                <InfoOutlinedIcon />
                                </IconButton>
                            
                    </div>
                    <div className="title-image">
                            <h2>{props.title.title}</h2>
                    </div>
            
          
            </div>
        </div>
    )
}
