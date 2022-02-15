import React from 'react';
import { BaseModal } from './BaseModal';

export const SettingsModal: React.FunctionComponent = () => {
    return (<BaseModal title="Settings" iconName="Settings">
        <p>Settings will appear here</p>
    </BaseModal>)
}