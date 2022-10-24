import React from 'react';

type ButtonResetPropsType = {
    numberReset: () => void
    number: number
}

export function ButtonReset(props: ButtonResetPropsType) {

    return (
        <button disabled={props.number===0} onClick={props.numberReset}>reset</button>
    );
}