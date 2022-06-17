import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoading from "~/components/Animations/LazyLoading";
import Home from "~/components/Home";
import AboutMe from "~/components/AboutMe";
import Skills2 from "~/components/Skills2";
import Hobbies from "~/components/Hobbies";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // const [scrollPosition, setPosition] = useState(0);
  // useLayoutEffect(() => {
  //   function updatePosition() {
  //     setPosition(window.pageYOffset);
  //   }
  //   window.addEventListener('scroll', updatePosition);
  //   updatePosition();
  //   console.log(scrollPosition);
  //   return () => window.removeEventListener('scroll', updatePosition);
  // }, [scrollPosition]);


  return (
    <React.Fragment>
      <LazyLoading loading={loading} />
      <Home />
      <AboutMe />
      <Skills2 />
      <Hobbies />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
