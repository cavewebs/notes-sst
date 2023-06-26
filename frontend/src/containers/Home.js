import React from "react";
import "./Home.css";
import Button from "react-bootstrap/esm/Button";


export default function Home() {
    const cpatureDetails = () => {
        console.log(navigator.userAgent);
    }
    return (
        <div className="Home">
            <div className="lander">
                <h1>Scratch</h1>
                <p className="text-muted">A simple note taking app</p>
                <Button onClick={cpatureDetails} >Click ME</Button>
            </div>

        </div>
    );
}