import React from 'react'
import "./filters.css";
import ikonax from "../../media/xboxb.png";
import ikonaps from "../../media/psb.png";
import ikonapc from "../../media/pcb.png";
import ikonans from "../../media/nsb.png";
import { Container } from "@material-ui/core";
function Filters() {
    return (
        <>
            <Container id="products">
            </Container>
            <div className="napis">
                WYBIERZ PLATFORMĘ
                <p className="tekst">Wybierz swoją ulubioną grę na swoją ulubioną platformę</p>
            </div>
            <div className="filters">

                <div class="hexagon-wrapper">
                    <div class="hexagon">
                        <i><img src={ikonax} /><p className="podtekst">XBOX</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper">
                    <div class="hexagon">
                        <i><img src={ikonaps} /><p className="podtekst">PLAYSTATION</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper">
                    <div class="hexagon">
                        <i><img src={ikonapc} /><p className="podtekst">PC</p></i>
                    </div>
                </div>
                <div class="hexagon-wrapper">
                    <div class="hexagon">
                        <i><img src={ikonans} /><p className="podtekst">NINTENDO</p></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters
