import React, { useState } from "react";

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
                "inbox lists lists lists lists"
                "schedule schedule schedule schedule schedule";
        }
        .inbox {
            grid-area: inbox;
            height: 100%;
            min-width: 250px;
            max-width: 250px;
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

    return (
        <div className="app">
            <style>{allStyles}</style>
            <div className="inbox">
                ajksdhajsihdas hdkljash dkja hskdj haskjdh aksjhdkaj
                shdakjshdkajshdkajshdkajshdkajshdkjashdkajshdka
            </div>
            <div className="lists">
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
            <div class="item" contenteditable="true">
                dsdsdsd
            </div>
            <button>Add</button>
        </div>
    );
}
