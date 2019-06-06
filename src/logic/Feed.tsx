import React from 'react';
import Teaser from "../components/Teaser/Teaser";
import './Feed.css'
// @ts-ignore
import * as rssParser from 'react-native-rss-parser';

type State = {
    teasers: TeaserData[]
}

type TeaserData = {
    topic: string,
    introText: string,
    headline: string,
    img: string
}

interface Props {

}


class FeedComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            teasers: []
        };
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this.fetch()
    }

    render() {
        let markup = [];
        for (let teaser of this.state.teasers) {
            markup.push(<Teaser topic={teaser.topic} introText={teaser.introText} headline={teaser.headline} img={teaser.img}/>)
        }
        return <div className={"teaser-wrapper"}>{markup}</div>
    }

    fetch() {
        fetch('http://localhost:5000/topnews.rss')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {

                console.log(rss.title);
                console.log(rss.items.length);


                if (rss.items) {
                    console.log(rss.items.length);
                    let teasers: TeaserData[] = [];
                    for (let item of rss.items) {
                        console.log(item);
                        let t: TeaserData = {
                            // @ts-ignore
                            topic: item.published,
                            // @ts-ignore
                            introText: item.description,
                            // @ts-ignore
                            headline: item.title,
                            img: item.enclosures[0].url
                        };
                        teasers.push(t);
                        console.log(t)
                    }
                    // @ts-ignore
                    this.setState({
                        teasers: teasers
                    })
                } else {
                    console.log("No Items in Feed or error.")
                }
            });



    }
}

export default FeedComponent;