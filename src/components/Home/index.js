import React, { useLayoutEffect, useState } from "react";
// import Canvas from "~/compone    nts/Canvas";
import ContentCom from "./ContentCom";
import './index.scss';
import LargeMenuCom from "./LargeMenuCom";
import SmallMenuCom from "./SmallMenuCom";
import WaveCom from "./WaveCom";

function Home() {

    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [size]);

    return (
        <div className="portfolio__home">
            {/* Menu */}
            {size > 767 ? <LargeMenuCom /> : <SmallMenuCom />}
            {/* Content */}
            <ContentCom />
            <WaveCom />
        </div>
    );
}

export default Home;