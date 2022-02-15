import React from 'react';
import CSS from 'csstype';
import { DefaultButton, Stack } from '@fluentui/react';

const keyStyles: CSS.Properties = {
    minWidth: "unset",
    flexGrow: 1
}

export const Keyboard: React.FunctionComponent = () => {

    function letterClick(x: string, e: any) {
        console.log('clicked', x, e)
    }

    function makeButton(x: string) {
        return (<DefaultButton text={x} key={x} style={keyStyles} onClick={(e) => letterClick(x, e)}></DefaultButton>)
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
