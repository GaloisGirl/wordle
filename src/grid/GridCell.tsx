import React from 'react';
import CSS from 'csstype';

import { FontSizes, FontWeights, NeutralColors } from '@fluentui/theme';
import { KEY_STATE, BACKGROUND_COLORS } from '../state';


interface GridCellProps {
  char: string,
  state: string
}

export const GridCell: React.FunctionComponent<GridCellProps> = (props) => {

    const style: CSS.Properties = {
        height: '48px',
        width: '48px',
        fontSize: FontSizes.size32,
        fontWeight: FontWeights.bold,
        textAlign: 'center',
        borderWidth: '2px',
        borderColor: NeutralColors.gray110,
        borderStyle: 'solid',
        backgroundColor: BACKGROUND_COLORS[props.state]
    }

    return (
        <div style={style}>
            {props.char}
        </div>
    )
}
