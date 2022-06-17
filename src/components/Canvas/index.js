import { useEffect } from 'react';
import './index.scss';
import { init, animateCanvas, setCanvas } from './custom';

function Canvas() {

    useEffect(() => {
        setCanvas();
        init();
        animateCanvas();
        return () => {
        }
    })

    return (<div className='portfolio__canvas'>
        <canvas></canvas>
    </div>
    );
}

export default Canvas;