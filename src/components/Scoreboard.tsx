import React from 'react';
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    number: number
}

export function Scoreboard(props: ScoreboardPropsType) {
    return (
        <div className={props.number===5? {s.err} : ''}>{props.number}</div>
    );
}
