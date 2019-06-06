import "./Teaser.css"
import React from 'react';
import FallbackImage from "../FallbackImage/FallbackImage";

function Teaser(props: { topic: string, headline: string, introText: string }) {
    return <div className={"teaser-box"}>
        <div className={"topic"}>{props.topic}</div>
        <div className={"headline"}>{props.headline}</div>
        <FallbackImage/>
        <div>
            {props.introText}
        </div>
    </div>
}

export default Teaser;