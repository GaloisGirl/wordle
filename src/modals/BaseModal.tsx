import React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { Stack, IconButton, Modal } from '@fluentui/react';

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
                    <h2 id={titleId} style={{margin: 0, textIndent: '8px'}}>{props.title}</h2>
                    <IconButton
                        iconProps={{ iconName: 'Cancel' }}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </Stack>
                <div >
                {props.children}
                </div>
            </Stack>
        </Modal>
    
    </div>)
}