import React from 'react'
import "./Loader.scss";

const Loader = () => {
    return (
        <>
            <div className="body">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="base">
                    <span></span>
                    <div className="face"></div>
                </div>
            </div>
            <div className="longfazers">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className="text">Loading</h1>
        </>
    )
}

export default Loader