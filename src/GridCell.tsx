import React from 'react';
import CSS from 'csstype';

import { FontSizes, FontWeights, NeutralColors } from '@fluentui/theme';

const style: CSS.Properties = {
    height: '48px',
    width: '48px',
    fontSize: FontSizes.size32,
    fontWeight: FontWeights.bold,
    textAlign: 'center',
    borderWidth: '2px',
    borderColor: NeutralColors.gray110,
    borderStyle: 'solid'
}

export const GridCell: React.FunctionComponent = () => {
    return (
        <div style={style}>
            A
        </div>
    )
}
