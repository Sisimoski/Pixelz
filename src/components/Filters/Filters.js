import React from 'react'
import "./filters.css";
import ikonax from "../../media/xboxb.png";
import ikonaps from "../../media/psb.png";
import ikonapc from "../../media/pcb.png";
import ikonans from "../../media/nsb.png";
function Filters() {
    return (
        <div className="filters">

            <div class="hexagon-wrapper">
                <div class="hexagon">
                    <i><img src={ikonax} /></i>
                </div>
            </div>
            <div class="hexagon-wrapper">
                <div class="hexagon">
                    <i><img src={ikonaps} /></i>
                </div>
            </div>
            <div class="hexagon-wrapper">
                <div class="hexagon">
                    <i><img src={ikonapc} /></i>
                </div>
            </div>
            <div class="hexagon-wrapper">
                <div class="hexagon">
                    <i><img src={ikonans} /></i>
                </div>
            </div>
        </div>

    )
}

export default Filters
