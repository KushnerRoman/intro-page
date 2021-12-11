import React,{useState} from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import './RightDiv.css'

export default function RightDiv(props) {

  const [shareClicked, setShareClicked] = useState(false)
  const [favoriteClicked, setFavoriteClicked] = useState(false)
  const [closeClicked, setCloseClicked] = useState(false)


    return (
        <div className="container-right-div">
            <div className="title-flex">
                     <div className="title">
                    <h3>
                        {props.title.title}
                    </h3>
                    <p> {props.title.description}
                    </p>
                    </div>
            </div>

            <div className="user-actions">
                <IconButton className={!shareClicked? "btn" : "btn-clicked"} onClick={()=>setShareClicked(!shareClicked)}>
                    <ShareIcon />
                </IconButton>
                <IconButton className={!favoriteClicked? "btn" : "btn-clicked"} onClick={()=>setFavoriteClicked(!favoriteClicked)}>
                    <FavoriteBorderIcon/>
                </IconButton>
                
                <IconButton className={!closeClicked? "btn-close" : "btn-clicked-close"} onClick={()=>setCloseClicked(!closeClicked)}>
                    <CloseIcon/>
                </IconButton>
                
               
            </div>


        </div>
    )
}
