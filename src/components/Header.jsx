import { Link } from 'react-router-dom'
import styled from "styled-components";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/image/logo.png";

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

const Peoples = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? peoplesBlack : peoplesWhite});
    }
`;

const Planets = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? planetsBlack : planetsWhite});
    }
`;

const Films = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? filmsBlack : filmsWhite});
    }
`;

const Species = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? speciesBlack : speciesWhite});
    }
`;

const Starships = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? starshipsBlack : starshipsWhite});
    }
`;

const Vehicles = styled.img`
    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
        content: url(${({ theme }) => theme?.white ? vehiclesBlack : vehiclesWhite});
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 10px 3rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        margin-top: 10px;
        flex-direction: column; 
        padding: 10px 0;
    }
`;

const Logo = styled.img`
    height: 50px;
`;

const Menu = styled.ul`
    display: flex;

    @media (max-width: 400px) {
        justify-content: space-between;
        margin-top: 10px;
        width: 90vw;
    }
`;

const ItemText = styled.li`
    margin-right: 10px;
    font-size: 20px;

    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.text};
    }
`;

const Item = styled.div`
    display: flex;
`;

const ItemIcon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    margin-right: 10px;

    @media (max-width: 400px) {
        position: absolute;
        top: 25px;
        right: 5px;
    }
`;

const Tituto = styled.span`
    font-size: 20px;

    @media (max-width: 400px) {
        font-size: 0;
    }
`;

const Button = styled.span`
    cursor: pointer;

    &:hover {
        border-bottom: 0;
    }
`;

const Header = (props) => {
    return (
        <header>
            <Nav>
                <div>
                    <Link to="/">
                        <Logo src={logo} alt="logo" />
                    </Link>
                </div>
                <div>
                    <Menu>
                        <ItemText>
                            <Link to="/peoples">
                                <Item>
                                    <Peoples></Peoples>
                                    <Tituto>
                                        Peoples
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                        <ItemText>
                            <Link to="/planets">
                                <Item>
                                    <Planets></Planets>
                                    <Tituto>
                                        Planets
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                        <ItemText>
                            <Link to="/films">
                                <Item>
                                    <Films></Films>
                                    <Tituto>
                                        Films
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                        <ItemText>
                            <Link to="/species">
                                <Item>
                                    <Species></Species>
                                    <Tituto>
                                        Species
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                        <ItemText>
                            <Link to="/starships">
                                <Item>
                                    <Starships></Starships>
                                    <Tituto>
                                        Starships
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                        <ItemText>
                            <Link to="/vehicles">
                                <Item>
                                    <Vehicles></Vehicles>
                                    <Tituto>
                                        Vehicles
                                    </Tituto>
                                </Item>
                            </Link>
                        </ItemText>
                    </Menu>
                </div>
            </Nav>
            <ItemIcon>
                <Button onClick={props.mudarThema}>
                    <FontAwesomeIcon icon={faJedi} />
                </Button>
            </ItemIcon>
        </header>
    )
}

export default Header;