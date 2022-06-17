import html from "~/assets/images/skills/html.png";
import css from "~/assets/images/skills/css.png";
import git from "~/assets/images/skills/git.png";
import js from "~/assets/images/skills/js.png";
import react from "~/assets/images/skills/react.png";
import sass from "~/assets/images/skills/sass.png";
import nodejs from "~/assets/images/skills/nodejs.png";
import ps from "~/assets/images/skills/ps.png";

export const data = [
    {
        name: "HTML5",
        grade: "90",
    },
    {
        name: "CSS3",
        grade: "85"
    },
    {
        name: "Javascript",
        grade: "80"
    },
    {
        name: "ReactJS",
        grade: "80"
    },
    {
        name: "NodeJS",
        grade: "50"
    },
    {
        name: "Photoshop",
        grade: "50"
    },
]

export const infos = [
    {
        src: html,
        title: ' HTML5',
        describe: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.'
    },
    {
        src: css,
        title: ' CSS3',
        describe: 'CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.'
    },
    {
        src: git,
        title: 'GIT',
        describe: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
    },
    {
        src: js,
        title: 'JAVASCRIPT',
        describe: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
    },
    {
        src: react,
        title: 'REACTJS',
        describe: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta'
    },
    {
        src: sass,
        title: 'SASS',
        describe: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
    },
    {
        src: nodejs,
        title: 'NODEJS',
        describe: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.'
    },
    {
        src: ps,
        title: 'ADOBE PHOTOSHOP',
        describe: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.'
    }
]

export const settingsSlider = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
