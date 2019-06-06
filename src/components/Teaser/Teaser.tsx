import "./Teaser.css"
import React from 'react';
import FallbackImage from "./FallbackImage/FallbackImage";

function Teaser(props: { topic: string, headline: string, introText: string, img: string }) {
    return <div className={"teaser-box"}>
        <img src={props.img}/>
        <div className={"headline"}>{props.headline}</div>
        {/*<FallbackImage/>*/}

        <div>{props.introText}</div>
        <div className={"topic"}>{props.topic}</div>
    </div>
}

export default Teaser;