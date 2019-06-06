import React from 'react';
import './App.css';
import Headline from "./components/Headline/Headline";
import Teaser from "./components/Teaser/Teaser";
import Feed from "./logic/Feed";

const App: React.FC = () => {
    // @ts-ignore
    return (
        <div className="App">
            <header className="App-header">
                <Headline text={"Harry learns React with Typescript"}/>

            </header>
            <div className={"teaser-wrapper"}>
                <Teaser topic={"UMFRAGE-SCHOCK FÜR UNION"}
                        headline={"Mit einem Schlag ist der Zehn-Punkte-Vorsprung vor den Grünen fast aufgebraucht"}
                        introText={"Die Beliebtheit der Grünen erreicht neue Rekorde, die Union sackt im „Politbarometer“ wieder auf ihr Allzeittief. Die persönlichen Werte von CDU-Chefin Kramp-Karrenbauer geben deutlich nach."}/>
                <Teaser topic={"EU-DROGENBERICHT"} headline={"Europa wird mit Kokain überschwemmt"}
                        introText={"Der neue Drogenbericht der EU zeigt erschütternde Befunde: Die Menge an Kokain in der EU ist auf ein neues Rekordniveau gestiegen. Inzwischen gibt es sogar Callcenter, die Kokain wie Pizzas ausliefern. Saarbrücken und Erfurt belegen europaweit Spitzenplätze."}/>
                <Teaser topic={"BAYER, DAIMLER, ADIDAS"}
                        headline={"„Stupid German Money“ – Darum scheitern deutsche Konzerne in den USA"}
                        introText={"Der Monsanto-Deal hat Bayer in eine tiefe Krise gestürzt. Doch das ist nur das jüngste Beispiel gescheiterter Übernahmen deutscher Konzerne in den USA. Denn viele machen immer wieder denselben Fehler."}/><Teaser
                topic={"UMFRAGE-SCHOCK FÜR UNION"}
                headline={"Mit einem Schlag ist der Zehn-Punkte-Vorsprung vor den Grünen fast aufgebraucht"}
                introText={"Die Beliebtheit der Grünen erreicht neue Rekorde, die Union sackt im „Politbarometer“ wieder auf ihr Allzeittief. Die persönlichen Werte von CDU-Chefin Kramp-Karrenbauer geben deutlich nach."}/>
                <Teaser topic={"EU-DROGENBERICHT"} headline={"Europa wird mit Kokain überschwemmt"}
                        introText={"Der neue Drogenbericht der EU zeigt erschütternde Befunde: Die Menge an Kokain in der EU ist auf ein neues Rekordniveau gestiegen. Inzwischen gibt es sogar Callcenter, die Kokain wie Pizzas ausliefern. Saarbrücken und Erfurt belegen europaweit Spitzenplätze."}/>
                <Teaser topic={"BAYER, DAIMLER, ADIDAS"}
                        headline={"„Stupid German Money“ – Darum scheitern deutsche Konzerne in den USA"}
                        introText={"Der Monsanto-Deal hat Bayer in eine tiefe Krise gestürzt. Doch das ist nur das jüngste Beispiel gescheiterter Übernahmen deutscher Konzerne in den USA. Denn viele machen immer wieder denselben Fehler."}/>
            </div>
            <Feed/>
        </div>
    );
};

export default App;
