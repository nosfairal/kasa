import React from "react";
import starsEmpty from "../assets/icons/star-empty.svg";
import { useParams } from "react-router-dom";
import starFull from "../assets/icons/star-full.svg";
import dataAccomodation from "../data/logements.json";

const Rating = () => {
    const { id } = useParams();
    const data = dataAccomodation.find((item) => item.id === id);

    const numberStars = parseInt(data.rating);
    const stars = [];

    for (let i = 0; i < numberStars; i++) {
        stars.push(
            <img
                src={starFull}
                alt="note sur 5"
                key={`filled-${i}`}
                className="star filled-star"
            />
        );
    }

    for (let i = numberStars; i < 5; i++) {
        stars.push(
            <img
                src={starsEmpty}
                alt="note sur 5"
                key={`empty-${i}`}
                className="star empty-star"
            />
        );
    }

    return <div className="accomodation-stars">{stars}</div>;
};
export default Rating;