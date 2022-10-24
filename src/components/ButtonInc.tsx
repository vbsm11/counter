import React from 'react';

type ButtonIncPropsType = {
    numberInc: () => void
    number: number
}

export function ButtonInc(props: ButtonIncPropsType) {

    return (
        <button disabled={props.number===5} onClick={props.numberInc}>inc</button>
    );
}
