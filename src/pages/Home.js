import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../data/logements.json";
import Cliff from "../assets/images/Cliff.svg";

const Home = () => {
    return (
        <div className="home-container">
            <Banner
                imageSrc={Cliff}
                altText="Falaise Kasa"
                bannerText={
                    <>
                        Chez vous,
                        <span className="line-break"></span>
                        partout et ailleurs
                    </>
                }
            />
            <div className="home-card-container">
                <ul>
                    {data.map((acc) => {
                        return (
                            <li key={acc.id}>
                                <Link to={`/Accomodation/${acc.id}`}>
                                    <Card
                                        props={{
                                            url: acc.cover,
                                            title: acc.title,
                                        }}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Home;