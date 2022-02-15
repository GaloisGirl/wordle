import React from 'react';
import CSS from 'csstype';
import { DefaultButton } from '@fluentui/react';

interface KeyProps {
    letter: string
}

const keyStyles: CSS.Properties = {
    minWidth: "unset",
    flexGrow: 1
}

export const Key: React.FunctionComponent<KeyProps> = (props: KeyProps) => {

    function letterClick(x: string, e: any) {
        console.log('clicked', x, e)
    }

    return (
        <DefaultButton 
            text={props.letter}
            onClick={(e) => letterClick(props.letter, e)}
            style={keyStyles} ></DefaultButton>
    )
}