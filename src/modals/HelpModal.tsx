import React from 'react';
import { Link, Separator } from '@fluentui/react';
import { BaseModal } from './BaseModal';
import { GridRow } from '../grid/GridRow';

export const HelpModal: React.FunctionComponent = () => {
    return (<BaseModal title="Help" iconName="Unknown">
        <p>This is yet another clone of the famous game <Link href="https://www.nytimes.com/games/wordle/index.html">Wordle</Link>.</p>
        <p>I made this to learn React. Do not expect a fun time here.</p>
        <p>You can see the code <Link href="https://github.com/GaloisGirl/wordle/tree/master">here</Link></p>
        <Separator></Separator>
        <p>This is how it goes:</p>
        <GridRow answer="AZURE" guess="ADMIN" completed={true}></GridRow>
        <p>The letter <strong>A</strong> is in the word and is in the correct spot.</p>
        <GridRow answer="AZURE" guess="MODEL" completed={true}></GridRow>
        <p>The letter <strong>E</strong> is in the word but in another spot.</p>
        <p>The remaining letters are not present in the word at all.</p>
    </BaseModal>)
}
