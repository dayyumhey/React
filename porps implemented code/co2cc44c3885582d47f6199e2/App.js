import React from "react"
import Nav from "./Nav"
import Component from "./Component"
import data from "./data"


export default function App() {
    
    const card = data.map(chal =>{
        
        return (
            <Component
            title={chal.title}
            startDate={chal.startDate}
            description={chal.description}
             imageUrl={chal.imageUrl} 
            />
        )
    }
        
    )
    
    
    return (
        <>
        <Nav />
        {card}
        </>
    )
    
}