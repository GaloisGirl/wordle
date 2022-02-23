import React from 'react';
import { DefaultButton, Stack } from '@fluentui/react';
import { Key } from './Key';

interface KeyboardProps {
    keys: { [key: string]: string }
    onLetter: Function
    onDelete: () => void
    onEnter: () => void
}

export const Keyboard: React.FunctionComponent<KeyboardProps> = (props: KeyboardProps) => {

    function makeButton(x: string) {
        return (<Key 
            key={x}
            letter={x}
            state={props.keys[x] || ''}              
            onClick={props.onLetter(x)}
        ></Key>)
    }

    return (
        <Stack>
            <Stack horizontal >
                {'QWERTYUIOP'.split('').map(makeButton)}
            </Stack>
            <Stack horizontal >
                {'ASDFGHJKL'.split('').map(makeButton)}
            </Stack>
            <Stack horizontal >
                <DefaultButton text="Enter" onClick={props.onEnter}></DefaultButton>
                {'ZXCVBNM'.split('').map(makeButton)}
                <DefaultButton text="Del" onClick={props.onDelete}></DefaultButton>
            </Stack>
        </Stack>
    );
}
