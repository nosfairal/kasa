import React from "react";
import "../style/banner.css";

const Banner = ({ imageSrc, altText, bannerText, bannerStyle }) => {
    return (
        <div className="home-banner" style={bannerStyle}>
            <img src={imageSrc} alt={altText} />
            {bannerText && <h1>{bannerText}</h1>}
        </div>
    );
};

export default Banner;
