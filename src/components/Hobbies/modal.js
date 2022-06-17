import React from 'react'
import { Modal } from 'semantic-ui-react'

function ModalContentVideo(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='small'
            closeIcon
            open={open}
            trigger={props.children}
        >
            <Modal.Content>
                <Modal.Description>
                    <iframe src={props.data.iframe}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default ModalContentVideo