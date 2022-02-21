import React from 'react';
import CSS from 'csstype';
import { DefaultButton } from '@fluentui/react';
import { BACKGROUND_COLORS } from './state';

interface KeyProps {
    letter: string
    state: string
}

export const Key: React.FunctionComponent<KeyProps> = (props: KeyProps) => {

    function letterClick(x: string, e: any) {
        console.log('clicked', x, e)
    }

    const keyStyles: CSS.Properties = {
        minWidth: "unset",
        flexGrow: 1,
        backgroundColor: BACKGROUND_COLORS[props.state]
    }

    return (
        <DefaultButton 
            text={props.letter}
            onClick={(e) => letterClick(props.letter, e)}
            style={keyStyles} ></DefaultButton>
    )
}