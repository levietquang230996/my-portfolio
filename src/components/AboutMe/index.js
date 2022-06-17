import { Container } from "semantic-ui-react";
import './index.scss'
import Timelines from "./Timelines";
import React, { useLayoutEffect, useRef, useState } from "react";

let refAbout;
export const scrollToAbout = () => {
    return refAbout.current && refAbout.current.offsetTop
};
function AboutMe() {
    const [scrollPosition, setPosition] = useState(0);
    const [addClass, setAddClass] = useState(false);

    refAbout = useRef(null);
    refAbout && scrollToAbout();
    useLayoutEffect(() => {
        function updatePosition() {
            if (window.pageYOffset > refAbout.current.offsetTop - 600 &&
                window.pageYOffset < refAbout.current.offsetTop + refAbout.current.offsetHeight) {
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
        <div className="portfolio__aboutMe" ref={refAbout}>
            <Container>
                <h1 className={`text-gradiant title 
                ${addClass ? 'slide-top' : ''}`}>ABOUT ME</h1>
                <Timelines addClass={addClass} />
            </Container>
        </div>
    );
}

export default AboutMe;