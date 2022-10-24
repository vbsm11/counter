import React from 'react';

type ButtonResetPropsType = {
    numberReset: () => void
    number: number
    start: number
}

export function ButtonReset(props: ButtonResetPropsType) {

    return (
        <button
            className='button'
            disabled={props.number===props.start}
            onClick={props.numberReset}>reset</button>
    );
}