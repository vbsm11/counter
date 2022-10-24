import React from 'react';
import './../App.css';

type ScoreboardPropsType = {
    number: number
    finish: number
}

export function Scoreboard(props: ScoreboardPropsType) {
    return (
        <div className={props.number===props.finish? 'err scoreboard' : 'scoreboard'}>
            {props.number}
        </div>
    );
}
