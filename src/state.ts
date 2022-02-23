
import { SharedColors, NeutralColors } from '@fluentui/theme';

export const KEY_STATE = {
    PRESENT: 'present',
    CORRECT: 'correct',
    ABSENT: 'absent',
    UNKNOWN: 'unknown'
}

export const STATE_BACKGROUND_COLORS = {
    [KEY_STATE.CORRECT]: SharedColors.yellowGreen10,
    [KEY_STATE.PRESENT]: SharedColors.yellow10,
    [KEY_STATE.ABSENT]: NeutralColors.gray50,
    [KEY_STATE.UNKNOWN]: "transparent"
}

export const STATE_TEXT_DECORATIONS = {
    [KEY_STATE.CORRECT]: 'underline',
    [KEY_STATE.PRESENT]: 'underline dotted',
    [KEY_STATE.ABSENT]: 'line-through',
    [KEY_STATE.UNKNOWN]: 'transparent'
}

interface AppState {
    answer: string,
    won: boolean
    currentGuess: number,
    guesses: string[],
    keys: { [key: string]: string }
}

export function reducer(state: AppState, action: any) {
    if (state.won || state.currentGuess > 5) {
        return state
    }
    var newState = { ...state }
    switch (action.type) {
        case 'letter':
            newState.guesses[newState.currentGuess] = (newState.guesses[newState.currentGuess] + action.letter).slice(0, 5)
            break
        case 'delete':
            newState.guesses[newState.currentGuess] = newState.guesses[newState.currentGuess].slice(0, -1)
            break
        case 'enter':
            var guess = newState.guesses[newState.currentGuess]
            if (guess.length < 5) {
                break
            }
            if (guess == newState.answer) {
                newState.won = true
            }
            // TODO: validate against list of words
            newState.currentGuess += 1
            for (var i = 0; i < guess.length; i++) {
                if (guess[i] === newState.answer[i]) {
                    newState.keys[guess[i]] = KEY_STATE.CORRECT
                } else if (newState.answer.includes(guess[i])) {
                    newState.keys[guess[i]] = newState.keys[guess[i]] || KEY_STATE.PRESENT
                } else {
                    newState.keys[guess[i]] = newState.keys[guess[i]] || KEY_STATE.ABSENT
                }
            }
            break
        default:
            throw new Error();
    }
    return newState
}