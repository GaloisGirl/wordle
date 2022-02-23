import React from 'react';
import CSS from 'csstype';
import { DefaultButton } from '@fluentui/react';
import { BACKGROUND_COLORS } from './state';

interface KeyProps {
    letter: string
    state: string
    onClick: () => void
}

export const Key: React.FunctionComponent<KeyProps> = (props: KeyProps) => {

    const keyStyles: CSS.Properties = {
        minWidth: "unset",
        flexGrow: 1,
        backgroundColor: BACKGROUND_COLORS[props.state]
    }

    return (
        <DefaultButton 
            text={props.letter}
            onClick={props.onClick}
            style={keyStyles} ></DefaultButton>
    )
}