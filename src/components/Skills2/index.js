import { Container, Grid, GridColumn, Image, Modal } from "semantic-ui-react";
import './index.scss';
import { data, infos, settingsSlider } from './listsSkill';
import Slider from "react-slick";
import React, { useLayoutEffect, useRef, useState } from "react";

let refSkill;
export const scrollToSkill = () => {
    return refSkill.current && refSkill.current.offsetTop
};
function Skills2() {

    const [open, setOpen] = useState(false);
    const [skill, setSkill] = useState(0);
    const [scrollPosition, setPosition] = useState(0);
    const [addClass, setAddClass] = useState(false);

    refSkill = useRef(null);
    refSkill && scrollToSkill();

    useLayoutEffect(() => {
        function updatePosition() {
            if (window.pageYOffset > refSkill.current.offsetTop - 600 &&
                window.pageYOffset < refSkill.current.offsetTop + refSkill.current.offsetHeight) {
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
        <div className="portfolio__skills2" ref={refSkill}>
            <Container>
                <h1 className={`title text-white ${addClass ? 'slide-top' : ''}`}>SKILLS</h1>
                <Grid>
                    {data.map((dt, index) => (
                        <GridColumn key={index} mobile={16} tablet={8} computer={8}>
                            <div className="bar">
                                <div className="info">
                                    <span>{dt.name}</span>
                                </div>
                                <div className="progress-line">
                                    <span style={{ width: `${dt.grade}%` }} data-grade={dt.grade}></span>
                                </div>
                            </div>
                        </GridColumn>
                    ))}
                    {/* SLIDER SKILLS */}
                    <Slider {...settingsSlider}>
                        {infos.map((img, i) =>
                            <div key={i}>
                                {/* MODAL SKILL  */}
                                <Modal
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                    size='tiny'
                                    trigger={
                                        <Image
                                            size='small'
                                            src={img.src}
                                            onClick={() => setSkill(i)}
                                        />
                                    }
                                >
                                    <Modal.Header>{infos[skill].title}</Modal.Header>
                                    <Modal.Content image>
                                        <Image size='medium' src={infos[skill].src} wrapped />
                                        <Modal.Description>
                                            <p>
                                                {infos[skill].describe}
                                            </p>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>

                            </div>
                        )}

                    </Slider>
                </Grid>

            </Container >
        </div >
    );
}

export default Skills2;