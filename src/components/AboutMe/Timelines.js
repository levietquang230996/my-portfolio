import React from "react";
import './index.scss';
import student from '~/assets/images/student.png';
import developer from '~/assets/images/developer.png';
import police from '~/assets/images/police.png';

function Timelines(props) {
    console.log();
    return (<React.Fragment>
        <section className="ps-timeline-sec">
            <div className="container">
                <ol className="ps-timeline">
                    <li>
                        <div className="img-handler-top">
                            <img className={props.addClass ? 'slide-right' : ''} src={student} alt="" />
                        </div>
                        <div className="ps-bot">
                            <h3>Graduated at University</h3>
                            <p>I studied at HUFLIT University (2014 - 2019) <b>Software Engineer</b></p>
                        </div>
                        <span className="ps-sp-top">01</span>
                    </li>
                    <li>
                        <div className="img-handler-bot">
                            <img className={props.addClass ? 'slide-top' : ''} src={developer} alt="" />
                        </div>
                        <div className="ps-top">
                            <h3>Software Engineer</h3>
                            <p>I was a Front-End Developer at <b>Alta Media Company</b> (2018 - 2022)</p>
                        </div>
                        <span className="ps-sp-bot">02</span>
                    </li>
                    <li>
                        <div className="img-handler-top last-img">
                            <img className={props.addClass ? 'slide-left' : ''} src={police} alt="" />
                        </div>
                        <div className="ps-bot">
                            <h3>Mylitary Service</h3>
                            <p>I took part in military (Feb 2020 - Jun 2022)</p>
                        </div>
                        <span className="ps-sp-top">03</span>
                    </li>
                </ol>
            </div>
        </section>
    </React.Fragment>);
}

export default Timelines;