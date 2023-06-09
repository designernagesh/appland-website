import Navbar from "./Navbar";

const Header = () => {
    return (
        <div id="intro">
            <Navbar />
            <div className="header">
                <h1>Launch your App <span>with Confidence and Creativity</span></h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend convallis urna eget iaculis. </p>
                <div className="header-btns">
                    <a href="#" className="header-btn">Download</a>
                </div>
            </div>
            <div className="arrow"></div>
        </div>
    )
}

export default Header;