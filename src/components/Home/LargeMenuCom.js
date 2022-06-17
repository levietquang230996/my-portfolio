import { Container, Image, Menu } from "semantic-ui-react";
import logo from '~/assets/images/logo.png';

import { scrollToContact } from '../Contact/index';
import { scrollToSkill } from '../Skills2/index';
import { scrollToHobbies } from '../Hobbies/index';
import { scrollToAbout } from '../AboutMe/index';
function LargeMenuCom() {
    const handleClick = (component) => {
        const about = scrollToAbout();
        const skills = scrollToSkill();
        const hobbies = scrollToHobbies();
        const contact = scrollToContact();
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
        <Menu secondary pointing className="largeDevice">
            <Container>
                <Menu.Item>
                    <Image src={logo} />
                </Menu.Item>
                <Menu.Item position="right" name="Home"
                    onClick={() => handleClick('home')} />
                <Menu.Item name="About Me"
                    onClick={() => handleClick('about')} />
                <Menu.Item name="Skills"
                    onClick={() => handleClick('skills')} />
                <Menu.Item name="Hobbies"
                    onClick={() => handleClick('hobbies')} />
                <Menu.Item name="Contact"
                    onClick={() => handleClick('contact')} />
            </Container>
        </Menu>
    );
}

export default LargeMenuCom;