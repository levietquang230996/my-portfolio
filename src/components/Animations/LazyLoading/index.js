import React from "react";
import './index.scss';

function LazyLoading(props) {


    return (
        <React.Fragment>
            {props.loading && <div className="portfolio_lazyloading">
                <div className="atom-spinner">
                    <div className="spinner-inner">
                        <div className="spinner-line" />
                        <div className="spinner-line" />
                        <div className="spinner-line" />
                        {/*Chrome renders little circles malformed :(*/}
                        <div className="spinner-circle">
                            ●
                        </div>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default LazyLoading;