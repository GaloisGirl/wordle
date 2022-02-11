
import React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { Stack, IconButton, Modal } from '@fluentui/react';


export const WardleModal: React.FunctionComponent = () => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const titleId = useId('title');

    return (<div>
        <IconButton 
            iconProps={{ iconName: 'ConnectContacts' }} 
            onClick={showModal} 
            aria-label="Wardle" 
            title="Wardle"
        >            
        </IconButton>
        <Modal
            titleAriaId={titleId}
            isOpen={isModalOpen}
            onDismiss={hideModal}
            className="wd-modal"
        >
            <Stack>
                <Stack horizontal horizontalAlign="space-between" >
                    <h2 id={titleId}>Wardle</h2>
                    <IconButton
                        iconProps={{ iconName: 'Cancel' }}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </Stack>
                <div >
                    <p>Wardle will appear here</p>
                </div>
            </Stack>
        </Modal>
    </div>);
}