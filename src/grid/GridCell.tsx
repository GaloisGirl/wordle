import React from 'react';
import CSS from 'csstype';

import { FontSizes, FontWeights, NeutralColors } from '@fluentui/theme';
import { STATE_TEXT_DECORATIONS, STATE_BACKGROUND_COLORS } from '../state';


interface GridCellProps {
  char: string,
  state: string
}

export const GridCell: React.FunctionComponent<GridCellProps> = (props) => {

    const style: CSS.Properties = {
        height: '48px',
        width: '48px',
        fontSize: FontSizes.size32,
        fontWeight: FontWeights.semibold,
        textDecoration: STATE_TEXT_DECORATIONS[props.state],
        textAlign: 'center',
        borderWidth: '2px',
        borderColor: NeutralColors.gray110,
        borderStyle: 'solid',
        backgroundColor: STATE_BACKGROUND_COLORS[props.state]
    }

    // TODO: state is not readable for screen readers 
    return (
        <div style={style}>
            {props.char}
        </div>
    )
}
