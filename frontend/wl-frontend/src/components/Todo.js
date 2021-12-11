import React, { useState, useEffect } from "react";
import nujnostColors from "../assets/nujnost";


export default function Todo(props) {
    
    const [nujnost, setNujnost] = useState(props.td.nujnost);
    const [nujnoststring, setNujnoststring] = useState();

    useEffect(() => {
       
        setNujnost(props.td.nujnost);

        if (nujnost===1) {
            setNujnoststring("Low priority");
        } else if (nujnost===2) {
            setNujnoststring("Medium priority");
        } else if (nujnost===3) {
            setNujnoststring("High priority");
        }

    }, [nujnost, props.td.nujnost])

    

    return (
        <div className="todowrapper">

            <div className="naslovtaska">{props.td.naslov}</div>

            <div className="opistaska">{props.td.opis}</div>

            <div className="nujnosttaska">
                
                <div className="nujnost" style={{backgroundColor: `${nujnostColors[nujnost]}`}}>{nujnoststring}</div>
         
                <button className="btnopravi">Opravi</button>

            </div>
            

        </div>
    )
}
