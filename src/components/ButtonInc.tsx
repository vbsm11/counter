import React from 'react';

type ButtonIncPropsType = {
    numberInc: () => void
    number: number
    finish: number
}

export function ButtonInc(props: ButtonIncPropsType) {

    return (
        <button
            className='button'
            disabled={props.number===props.finish}
            onClick={props.numberInc}>inc</button>
    );
}
