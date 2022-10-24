import React, {useState} from 'react';
import './App.css';
import {ButtonInc} from "./components/ButtonInc";
import {Scoreboard} from "./components/Scoreboard";
import {ButtonReset} from "./components/ButtonReset";

function App() {
    const start = 0;
    const finish = 5;

    const [number, setNumber] = useState<number>(start);

    const numberInc = () => {
        setNumber(number + 1);
    }

    const numberReset = () => {
        setNumber(start);
    }

    return (
        <div className="App">
            <Scoreboard
                number={number}
                finish={finish}
            />
            <div className='buttons'>
                <ButtonInc
                    numberInc={numberInc}
                    number={number}
                    finish={finish}
                />
                <ButtonReset
                    numberReset={numberReset}
                    number={number}
                    start={start}/>
            </div>
        </div>
    );
}

export default App;