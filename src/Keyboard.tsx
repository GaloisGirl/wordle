import React from 'react';
import { DefaultButton, Stack } from '@fluentui/react';
import { Key } from './Key';

export const Keyboard: React.FunctionComponent = () => {

    function makeButton(x: string) {
        return (<Key letter={x} key={x}></Key>)
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
