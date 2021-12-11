import React,{useState} from 'react'
import  './IntroBar.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import AiImage from '../../image/ai-header-background.jpg'
import RomanLogo from '../../image/romantech3.png'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import { useStyles } from '../../styles/btnStyles/StylesBtn'


export default function IntroBar() {
    const [menuClick,setMenuClick]=useState(false);
    const [infoClicked, setInfoClicked] = useState(false);
    const [homeClicked, setHomeClicked] = useState(false);
    const [personClicked, setPersonClicked] = useState(false);
    const [settingsClicked, setSettingsClicked] = useState(false);

    return (
        <div className="container"  style={{ backgroundImage : `url(${AiImage})`}} >
            <div className="header">
              <div className="left-logo-div">
                 <img src={RomanLogo} className="roman-logo-png" />
              </div>
             <div className="right-btn-div">
                 <IconButton color="primary" className={!menuClick? "moreVert":"moreVertClicked"} onClick={()=>setMenuClick(!menuClick)}>
                     <MoreVertIcon />
                 </IconButton>   
             </div>
            </div>
            <div className="footer" >

                <div className="welcom-left-div">
                    <div className="text-welcom">
                         <h2>Welcom</h2>
                    </div>
                    
                </div>


                
                <div className="icons-bar-div">
                    <div className="icons">
                    <IconButton className={!homeClicked? "btnIcon": "btnIconClick"} onClick={()=>setHomeClicked(!homeClicked)} >
                     <HomeIcon />
                 </IconButton> 
                 <IconButton className={!personClicked? "btnIcon": "btnIconClick"} onClick={()=>setPersonClicked(!personClicked)}  >
                     <PersonIcon />
                 </IconButton>
                 <IconButton className={!settingsClicked? "btnIcon": "btnIconClick"} onClick={()=>setSettingsClicked(!settingsClicked)}  >
                     <SettingsIcon />
                 </IconButton>
                 <IconButton className={!infoClicked? "btnIcon": "btnIconClick"} onClick={()=>setInfoClicked(!infoClicked)}  >
                     <SettingsInputCompositeIcon />
                 </IconButton>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}
