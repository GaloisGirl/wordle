import React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { Stack, IconButton, Modal, Separator } from '@fluentui/react';

interface BaseModalProps {
    children: React.ReactNode
    title: string
    iconName: string
  }

export const BaseModal: React.FunctionComponent<BaseModalProps> = (props: BaseModalProps) => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const titleId = useId('title');

    return (<div>
        <IconButton 
            iconProps={{ iconName: props.iconName }} 
            onClick={showModal} 
            aria-label={props.title}
            title={props.title}
            style={{transform: 'scale(1.2)'}}
        >            
        </IconButton>
        <Modal
            titleAriaId={titleId}
            isOpen={isModalOpen}
            onDismiss={hideModal}            
        >
            <Stack>
                <Stack horizontal horizontalAlign="space-between" style={{paddingTop: '8px'}}>
                    <h2 id={titleId} style={{margin: 0, textIndent: '8px'}}>{props.title}</h2>
                    <IconButton
                        iconProps={{ iconName: 'Cancel' }}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </Stack>
                <Separator></Separator>
                <div style={{padding: '0 8px'}}>
                {props.children}
                </div>
            </Stack>
        </Modal>
    
    </div>)
}