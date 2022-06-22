import React, { useState } from "react";
import {
    Button,
    Container,
    Image,
    Menu
} from "semantic-ui-react";
import logo from '~/assets/images/logo.png';
import { scrollToContact } from '../Contact/index';
import { scrollToSkill } from '../Skills2/index';
import { scrollToHobbies } from '../Hobbies/index';
import { scrollToAbout } from '../AboutMe/index';

function SmallMenuCom() {
    const [visible, setVisible] = useState(false)

    const handleClick = (component) => {
        const about = scrollToAbout();
        const skills = scrollToSkill();
        const hobbies = scrollToHobbies();
        const contact = scrollToContact();
        setVisible(!visible);
        switch (component) {
            case 'home':
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                return;
            case 'about':
                window.scrollTo({
                    top: about,
                    behavior: "smooth"
                });
                return;
            case 'skills':
                window.scrollTo({
                    top: skills,
                    behavior: "smooth"
                });
                return;
            case 'hobbies':
                window.scrollTo({
                    top: hobbies,
                    behavior: "smooth"
                });
                return;
            case 'contact':
                window.scrollTo({
                    top: contact,
                    behavior: "smooth"
                });
                return;
        }
    }

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
                        onClick={() => handleClick('home')}
                    />
                    <Menu.Item
                        name='About Me'
                        onClick={() => handleClick('about')}
                    />
                    <Menu.Item
                        name='Skills'
                        onClick={() => handleClick('skills')}
                    />
                    <Menu.Item
                        name='Hobbies'
                        onClick={() => handleClick('hobbies')}
                    />
                    <Menu.Item name="Contact"
                        onClick={() => handleClick('contact')} />
                </Menu>
            }
        </React.Fragment>
    );
}

export default SmallMenuCom;