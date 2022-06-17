import { Container, Form, Grid, GridColumn, Image } from "semantic-ui-react";
import './index.scss';
import imgContact from '~/assets/images/contact.png';
import { useLayoutEffect, useRef, useState } from 'react';

let refContact;
export const scrollToContact = () => {
    return refContact.current && refContact.current.offsetTop
};

function Contact() {

    const [scrollPosition, setPosition] = useState(0);
    const [addClass, setAddClass] = useState(false);

    refContact = useRef(null);
    refContact && scrollToContact();

    useLayoutEffect(() => {
        function updatePosition() {
            if (window.pageYOffset > refContact.current.offsetTop - 600 &&
                window.pageYOffset < refContact.current.offsetTop + refContact.current.offsetHeight) {
                setAddClass(true)
                setPosition(window.pageYOffset);
            } else {
                setAddClass(false)
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => {
            window.removeEventListener('scroll', updatePosition);
        }
    }, [scrollPosition]);

    return (
        <div className="portfolio__contact" ref={refContact}>
            <Container>
                <h1 className={`text-gradiant title 
                ${addClass ? 'slide-top' : ''}`}>CONTACT</h1>
                <Grid>
                    <GridColumn mobile={16} tablet={8} computer={8}>
                        <div className="portfolio__contact-left">
                            <div className="portfolio__contact-form">
                                <input placeholder="Name" />
                                <label>Your Name</label>
                            </div>
                            <div className="portfolio__contact-form">
                                <input placeholder="Email" />
                                <label>Your Email</label>
                            </div>
                            <div className="portfolio__contact-form">
                                <textarea placeholder="Request" />
                                <label>Your Request</label>
                            </div>
                            <button>SEND</button>
                        </div>
                    </GridColumn>
                    <GridColumn mobile={16} tablet={8} computer={8}>
                        <Image src={imgContact} />
                    </GridColumn>
                </Grid>
            </Container>
        </div>
    );
}

export default Contact;