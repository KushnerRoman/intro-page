import React, { useState } from 'react'
import  './MainCard.css'
import imgTest from '../../image/arch/arch1.png'
import CenterDiv from './centerImg/CenterDiv'
import LeftDiv from './leftDiv/LeftDiv'
import RightDiv from './rightDiv/RightDiv'

export default function MainCard(props) {
    const [card,setCard]=useState()
    return (
        <div className="container-card">

            <div className="left-tags-div">
                <LeftDiv title={props.title}/>

            </div>
            <div className="center-images-div">
                <div className="flex-image-div">
                     <CenterDiv card={props.card1} title={props.title} />  
                     <CenterDiv card={props.card2} title={props.title} /> 
                     {
                         props.card3?<CenterDiv card={props.card3} title={props.title} />:null
                     } 
                       
                </div>
                
                

            </div>
            <div className="right-actions-div">
                <RightDiv title={props.title}/>
            </div>
            
        </div>
    )
}
