import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Dodaj() {

    const [naslov, setNaslov] = useState("");
    const [opis, setOpis] = useState("");
    const [nujnost, setNujnost] = useState(1);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {

            const body = {
                'naslov': naslov,
                'opis': opis,
                'nujnost': nujnost
            }
            const response = await fetch("http://localhost:8080/savetodos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (error) {
            console.error(error.message);
        }

        setNaslov("");
        setOpis("");
        setNujnost(1);
    }

    return (
        <>
            <Navbar />
            <div className="bggradient">
                <div className="formWrapper">
                    <form className="todoform" onSubmit={onSubmitForm}>

                        <label htmlFor="naslovinput">Naslov:</label><br />
                        <input type="text" placeholder="Naslov" value={naslov} name="naslovinput" className="naslovinput" onChange={e => setNaslov(e.target.value)} required /><br />
                        <label htmlFor="opisinput">Opis:</label><br />
                        <input type="text" placeholder="Opis" value={opis} name="opisinput" className="opisinput" onChange={e => setOpis(e.target.value)} /><br />
                        <label htmlFor="nujnostinput">Nujnost 1-3 (1 najmanj, 3 najbolj):</label><br />
                        <input type="number" min="1" max="3" placeholder="Nujnost" value={nujnost} name="nujnostinput" className="nujnostinput" onChange={e => setNujnost(e.target.value)} /><br />
                        <button className="buttondodaj">Dodaj</button>

                    </form>
                </div>
            </div>
        </>
    )
}
