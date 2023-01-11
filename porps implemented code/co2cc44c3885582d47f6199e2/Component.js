import React from "react"


export default function Component(props) {
    
    return(
        <div className="card">
            <div className="card--img">
                <img src={props.imageUrl} className="card--image" />
            </div>
            <div className="card--text">
                <p className="mount">{props.title}</p>
                <p className="date">{props.startDate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </div>
        
    )
    
} 