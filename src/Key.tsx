import React from 'react';
import CSS from 'csstype';
import { DefaultButton } from '@fluentui/react';
import { STATE_BACKGROUND_COLORS, STATE_TEXT_DECORATIONS } from './state';

interface KeyProps {
    letter: string
    state: string
    onClick: () => void
}

export const Key: React.FunctionComponent<KeyProps> = (props: KeyProps) => {

    const keyStyles: CSS.Properties = {
        minWidth: "unset",
        flexGrow: 1,
        backgroundColor: STATE_BACKGROUND_COLORS[props.state],
        textDecoration: STATE_TEXT_DECORATIONS[props.state],
    }

    return (
        <DefaultButton 
            text={props.letter}
            onClick={props.onClick}
            style={keyStyles} ></DefaultButton>
    )
}