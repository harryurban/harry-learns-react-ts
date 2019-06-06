import React from 'react';
import './App.css';
import Headline from "./components/Headline/Headline";
import Teaser from "./components/Teaser/Teaser";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Headline text={"Harry learns React with Typescript"}/>

            </header>
            <body>
            <Teaser topic={"Deutschland"} headline={"Immer mehr Bienen sterben durch fehlende Grünflächen"} introText={"In Baden-Würtemberg kommt es immer wieder zum Bienensterben, da viele Bauern auf Kartoffel umsatteln. Was sagen die Bürger zu dieser Änderung?"}></Teaser>
            </body>
        </div>
    );
};

export default App;
