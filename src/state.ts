
import { SharedColors, NeutralColors  } from '@fluentui/theme';

export const KEY_STATE = {
    PRESENT: 'present',
    CORRECT: 'correct',
    ABSENT: 'absent',
    UNKNOWN: 'unknown'
}

export const BACKGROUND_COLORS = {
    [KEY_STATE.CORRECT]: SharedColors.yellowGreen10,
    [KEY_STATE.PRESENT]: SharedColors.yellow10,
    [KEY_STATE.ABSENT]: NeutralColors .gray50,
    [KEY_STATE.UNKNOWN]: "transparent"
}

interface AppState {
    answer: string,
    currentGuess: number,
    guesses: string[],
    keys: { [key: string]: string }
}

export function reducer(state: any, action: any) {

    return state
}