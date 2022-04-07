import './Loader.scss';

const Loader = () => {
    return (
        <>
            <div className="loaderBody">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="loaderBase">
                    <span></span>
                    <div className="loaderFace"></div>
                </div>
            </div>
            <div className="loaderLongfazers">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className="loaderText">Loading</h1>
        </>
    )
}

export default Loader