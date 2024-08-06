import React, { useState, useEffect } from "react";
import { draggingScroll } from "./utilities.js";
import "./App.css";

const css = String.raw;

function App() {
    const allStyles = css`
        .app,
        .inbox,
        .lists,
        .list,
        .schedule {
            border: 1px solid black;
            border-radius: 20px;
        }
        .app {
            box-sizing: border;
            border: 1px solid black;
            margin: 2.5vh;
            height: 95vh;
            border-radius: 20px;
            display: grid;
            gap: 10px;
            padding: 10px;
            grid-template-areas:
                "lists"
                "schedule";
        }
        .inbox {
            grid-area: inbox;
            height: 100%;
            max-width: 250px;
            min-width: 250px;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            word-break: break-word;
        }
        .lists {
            grid-area: lists;
            display: flex;
            border-bottom: 1px solid black;
            padding: 10px;
            overflow-x: scroll;
            gap: 10px;
            width: 100%;
        }
        .list {
            min-width: 250px;
            min-height: 250px;
        }
        .schedule {
            grid-area: schedule;
        }
    `;

    const [listCount, setListCount] = useState(1);

    const addList = () => {
        setListCount(listCount + 1);
    };

    useEffect(() => {
        // This function will run after the component mounts
        draggingScroll();

        // If your script needs cleanup, you can return a cleanup function
        return () => {
            // Perform any cleanup here if necessary
            console.log("Cleaning up script effects");
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="app">
            <style>{allStyles}</style>

            <div className="lists scrollable" id="scrollable-container">
                <div className="inbox">
                    ajksdhajsihdas hdkljash dkja hskdj haskjdh aksjhdkaj
                    shdakjshdkajshdkajshdkajshdkajshdkjashdkajshdka
                </div>
                {Array.from({ length: listCount }, (_, index) => (
                    <List key={index} />
                ))}
                <button onClick={addList}>Add</button>
            </div>
            <div className="schedule"></div>
        </div>
    );
}

export default App;

function List() {
    return (
        <div className="list">
            <div className="item" contentEditable="true">
                dsdsdsd
            </div>
            <button>Add</button>
        </div>
    );
}
