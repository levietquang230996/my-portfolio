import { Container, Grid, GridColumn, GridRow, Image } from 'semantic-ui-react';
import './index.scss';
import { lst } from './data';
import React, { useLayoutEffect, useRef, useState } from "react";
import ModalContentVideo from './modal';

let refHobbies;
export const scrollToHobbies = () => {
    return refHobbies.current && refHobbies.current.offsetTop
};

const imgRight = (dt) => (
    <GridRow key={dt.title}>
        <GridColumn mobile={16} tablet={8} computer={8}>
            <Image src={dt.img} />
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}
            className='portfolio__demo-describe'>
            <p className='subTitle'>{dt.title}</p>
            <p className='content'>{dt.content}</p>
            <ModalContentVideo data={dt}>
                <button className='box-shadow animate__slide-top'>Link</button>
            </ModalContentVideo>
        </GridColumn>
    </GridRow>
);

const imgLeft = (dt) => (
    <GridRow key={dt.title}>
        <GridColumn mobile={16} tablet={8} computer={8}
            className='portfolio__demo-describe'>
            <p className='subTitle'>{dt.title}</p>
            <p className='content'>{dt.content}</p>
            <ModalContentVideo data={dt}><button className='box-shadow animate__slide-top'>Link</button></ModalContentVideo>
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}>
            <Image src={dt.img} />
        </GridColumn>
    </GridRow>
);

function Hobbies() {

    // const [open, setOpen] = useState(false)
    const [scrollPosition, setPosition] = useState(0);
    const [addClass, setAddClass] = useState(false);
    const [size, setSize] = useState(0);

    refHobbies = useRef(null);
    refHobbies && scrollToHobbies();

    useLayoutEffect(() => {
        function updatePosition() {
            if (window.pageYOffset > refHobbies.current.offsetTop - 600 &&
                window.pageYOffset < refHobbies.current.offsetTop + refHobbies.current.offsetHeight) {
                setAddClass(true)
                setPosition(window.pageYOffset);
            } else {
                setAddClass(false)
            }
        }

        function updateSize() {
            setSize(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        window.addEventListener('scroll', updatePosition);
        updatePosition();


        return () => {
            window.removeEventListener('scroll', updatePosition);
        }
    }, [scrollPosition]);

    return (
        <div className="portfolio__demo" ref={refHobbies}>
            <h1 className={`text-gradiant title 
                ${addClass ? 'slide-top' : ''}`}> MY HOBBIES </h1>
            <Container>
                <Grid columns={2}>
                    {size > 767
                        ? lst.map((dt, i) => i % 2 ? imgRight(dt) : imgLeft(dt))
                        : lst.map(dt => imgRight(dt))
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default Hobbies;