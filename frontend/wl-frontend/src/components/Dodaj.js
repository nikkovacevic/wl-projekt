import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Dodaj() {

    const [naslov, setNaslov] = useState("");
    const [opis, setOpis] = useState("");
    const [nujnost, setNujnost] = useState();

    const onSumbitForm = async e => {
        e.preventDefault();
        try {
            const body = {
                'naslov': naslov,
                'opis': opis,
                'nujnost': nujnost
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="bggradient">
                
                <div className="formWrapper">
                    <form className="todoform">

                        <label for="naslovinput">Naslov:</label><br/>
                        <input type="text" placeholder="Naslov" value={naslov} name="naslovinput" className="naslovinput" onChange={e => setNaslov(e.target.value)}/><br/>
                        <label for="opisinput">Opis:</label><br/>
                        <input type="text" placeholder="Opis" value={opis} name="opisinput" className="opisinput" onChange={e => setOpis(e.target.value)}/><br/>
                        <label for="nujnostinput">Nujnost 1-3 (1 najmanj, 3 najbolj):</label><br/>
                        <input type="number" min="1" max="3" placeholder="Nujnost" value={nujnost} name="nujnostinput" className="nujnostinput" onChange={e => setNujnost(e.target.value)}/><br/>

                        <button className="buttondodaj">Dodaj</button>

                    </form>
                </div>
            </div>
        </>
    )
}
