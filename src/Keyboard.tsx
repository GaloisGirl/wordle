import React from 'react';
import CSS from 'csstype';
import { DefaultButton, Stack } from '@fluentui/react';

const keyStyles: CSS.Properties = {
    minWidth: "unset",
    flexGrow: 1
}

export class Keyboard extends React.Component {

    constructor(props: any) {
        super(props);
    }

    letterClick(x: string, e: any) {
        console.log('clicked', x, e)
    }

    makeButton(x: string) {
        return (<DefaultButton text={x} style={keyStyles} onClick={(e) => this.letterClick(x, e)}></DefaultButton>)
    }

    render() {
        return (
            <Stack>
                <Stack horizontal >
                    {'QWERTYUIOP'.split('').map(x => this.makeButton(x))}
                </Stack>
                <Stack horizontal >
                    {'ASDFGHJKL'.split('').map(x => this.makeButton(x))}
                </Stack>
                <Stack horizontal >
                    <DefaultButton text="Enter"></DefaultButton>
                    {'ZXCVBNM'.split('').map(x => this.makeButton(x))}
                    <DefaultButton text="Del"></DefaultButton>
                </Stack>
            </Stack>
        );
    }
}
