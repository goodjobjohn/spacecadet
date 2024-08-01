import React from "react";

const css = String.raw;

function App() {
    const allStyles = css`
        .app,
        .inbox,
        .lists,
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
        }
        .lists {
            grid-area: lists;
            border-bottom: 1px solid black;
        }
        .schedule {
            grid-area: schedule;
        }
    `;

    return (
        <div className="app">
            <style>{allStyles}</style>
            <div className="inbox"></div>
            <div className="lists"></div>
            <div className="schedule"></div>
        </div>
    );
}

export default App;
