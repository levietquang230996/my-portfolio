import React, { useState } from "react";
import {
    Button,
    Container,
    Image,
    Menu
} from "semantic-ui-react";
import logo from '~/assets/images/logo.png';

function SmallMenuCom() {
    const [visible, setVisible] = useState(false)

    return (
        <React.Fragment>
            <Menu secondary pointing className="smallDevice">
                <Container>
                    <Menu.Item>
                        <Image src={logo} />
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button
                            className={visible ? 'rotate-center' : ''}
                            circular icon={visible ? 'times' : 'bars'}
                            onClick={() => setVisible(!visible)} />
                    </Menu.Item>
                </Container>
            </Menu>
            {visible &&
                <Menu vertical secondary className="slide-bottom">
                    <Menu.Item
                        name='Home'
                    />
                    <Menu.Item
                        name='About Me'
                    />
                    <Menu.Item
                        name='Skills'
                    />
                    <Menu.Item
                        name='Skills'
                    />
                </Menu>
            }
        </React.Fragment>
    );
}

export default SmallMenuCom;