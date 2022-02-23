
import { SharedColors, NeutralColors } from '@fluentui/theme';

export const KEY_STATE = {
    PRESENT: 'present',
    CORRECT: 'correct',
    ABSENT: 'absent',
    UNKNOWN: 'unknown'
}

export const BACKGROUND_COLORS = {
    [KEY_STATE.CORRECT]: SharedColors.yellowGreen10,
    [KEY_STATE.PRESENT]: SharedColors.yellow10,
    [KEY_STATE.ABSENT]: NeutralColors.gray50,
    [KEY_STATE.UNKNOWN]: "transparent"
}

interface AppState {
    answer: string,
    currentGuess: number,
    guesses: string[],
    keys: { [key: string]: string }
}

export function reducer(state: AppState, action: any) {
    var newState = { ...state }
    switch (action.type) {
        case 'letter':
            if (newState.guesses[newState.currentGuess].length < 5) {
                newState.guesses[newState.currentGuess] +=  action.letter
            }
            return newState
        case 'delete':
            newState.guesses[newState.currentGuess] = newState.guesses[newState.currentGuess].slice(0, -1)  
            return newState
        case 'enter':
            var guess = newState.guesses[newState.currentGuess]
            if (guess.length == 5) {
                if (guess == newState.answer) {
                    alert("You won!")
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
            }
            return newState
        default:
            throw new Error();            
    }
}