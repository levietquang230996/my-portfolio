import React from "react";
import { Container } from "semantic-ui-react";
import Typed from 'typed.js';

function ContentCom() {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                `Hello I'm Le Viet Quang`,
                `I'm a Front-End Developer`
            ],
            typeSpeed: 60,
            backSpeed: 100,
            loop: true,
        };
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, []);

    return (
        <React.Fragment>
            <div className="portfolio__home-content">
                <Container>
                    <span className="text-gradiant" ref={el}></span>
                    <br />
                    <span className="text-gradiant">
                        Welcome to my portfolio
                    </span>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ContentCom;