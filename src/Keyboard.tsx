import React from 'react';
import { DefaultButton, Stack } from '@fluentui/react';
import { Key } from './Key';

interface KeyboardProps {
    keys: { [key: string]: string }
}

export const Keyboard: React.FunctionComponent<KeyboardProps> = (props: KeyboardProps) => {

    function makeButton(x: string) {
        return (<Key letter={x} state={props.keys[x] || ''}  key={x}></Key>)
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
                <DefaultButton text="Enter"></DefaultButton>
                {'ZXCVBNM'.split('').map(makeButton)}
                <DefaultButton text="Del"></DefaultButton>
            </Stack>
        </Stack>
    );
}
