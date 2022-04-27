import styled from "styled-components";

import peoplesWhite from '../assets/image/peoples-white.png';
import peoplesBlack from '../assets/image/peoples-black.png';
import planetsWhite from '../assets/image/planets-white.png';
import planetsBlack from '../assets/image/planets-black.png';
import filmsWhite from '../assets/image/films-white.png';
import filmsBlack from '../assets/image/films-black.png';
import speciesWhite from '../assets/image/species-white.png';
import speciesBlack from '../assets/image/species-black.png';
import starshipsWhite from '../assets/image/starships-white.png';
import starshipsBlack from '../assets/image/starships-black.png';
import vehiclesWhite from '../assets/image/vehicles-white.png';
import vehiclesBlack from '../assets/image/vehicles-black.png';
import { Link } from "react-router-dom";

const Peoples = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({ theme }) => theme?.white ? peoplesBlack : peoplesWhite});
`;

const Planets = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({theme}) => theme?.white ? planetsBlack : planetsWhite});
`;

const Films = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({theme}) => theme?.white ? filmsBlack : filmsWhite});
`;

const Species = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({theme}) => theme?.white ? speciesBlack : speciesWhite});
`;

const Starships = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({theme}) => theme?.white ? starshipsBlack : starshipsWhite});
`;

const Vehicles = styled.img`
    width: 50px;
    height: 50px;
    content: url(${({theme}) => theme?.white ? vehiclesBlack : vehiclesWhite});
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    flex-basis: 30%;
    margin-top: 100px; 

    @media (max-width: 400px) {
        margin-top: 10px; 
    }
`;

const Title = styled.div`
    margin-top: 15px;
    font-size: 20px;
`;


const Home = () => {

    return (
        <>
            <Row>
                <Column>
                    <Link to="/peoples">
                        <Peoples></Peoples>
                    </Link>
                    <Title>Peoples</Title>
                </Column>
                <Column>
                    <Link to="/planets">
                        <Planets></Planets>
                    </Link>
                    <Title>Planets</Title>
                </Column>
                <Column>
                    <Link to="/films">
                        <Films></Films>
                    </Link>
                    <Title>Films</Title>
                </Column>
                <Column>
                    <Link to="/species">
                        <Species></Species>
                    </Link>
                    <Title>Species</Title>
                </Column>
                <Column>
                    <Link to="/starships">
                        <Starships></Starships>
                    </Link>
                    <Title>Starships</Title>
                </Column>
                <Column>
                    <Link to="/vehicles">
                        <Vehicles></Vehicles>
                    </Link>
                    <Title>Vehicles</Title>
                </Column>
            </Row>
        </>
    )
}

export default Home;