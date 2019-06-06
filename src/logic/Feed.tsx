import React from 'react';
import Parser from 'rss-parser';
import Teaser from "../components/Teaser/Teaser";

function Feed(props: {}){
    const parser = new Parser();
    let response = "";

    (async () => {

        let feed = await parser.parseURL('http://localhost:5000/feed.rss');

        if (feed.items) {
            console.log(feed.items.length);
            for (let item of feed.items) {
                console.log("adding entry");
                // @ts-ignore
                response += <Teaser introText={item.contentSnippet} headline={item.title} topic={item.pubDate}/>
            }
        } else {
            console.log("No Items in Feed or error.")
        }
        return <React.Fragment>{response}</React.Fragment>;
    })();
    console.log("response has lenght: " + response.length);
    return <React.Fragment>{response}</React.Fragment>;
}

export default Feed;
