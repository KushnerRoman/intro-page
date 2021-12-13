import React,{useState} from 'react'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import  './LeftDiv.css'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
export default function LeftDiv(props) {
    // const [state, setState] = useState([props.title])
    return (
        <div className="container-categories-tag">
            <div className="icon-category">
                <InsertPhotoOutlinedIcon/>
                <OndemandVideoIcon/>
               
            </div>
            <div className="title">
                <h5>Category :</h5>
            </div>
            <div className="titles-categories-btn">
                {/*
                {if data was json}
                 {
                    state.map(
                        (category)=>{
                            <button  className="btn-category" >
                                {category}
                            </button>
                        }
                    )
                } */}

                <button  className="btn-category" >
                CATEGORY
                </button>
                <button className="btn-category">
                CATEGORY
                </button>
                <button className="btn-category">
                CATEGORY
                </button>
            </div>
        </div>
    )
}
