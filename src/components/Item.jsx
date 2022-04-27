import styled from "styled-components";
import useApi from "../hooks/useApi";
import FilmModel from "../model/Film";
import PeopleModel from "../model/People";
import SpecieModel from "../model/Specie";
import StarshipModel from "../model/Starship";
import VehicleModel from "../model/Vehicle";
import PlanetModel from "../model/Planet";

const Row = styled.div`
    margin: 5px 25px;
`;

const Item = (props) => {

    const { data, isFetching } = useApi(`${props?.tipo}/${props?.id}`);

    let obj = null;

    if (!isFetching) {
        if(props?.tipo === "films") {
            obj = new FilmModel(data);
        } else if(props?.tipo === "species") {
            obj = new SpecieModel(data);
        } else if(props?.tipo === "starships") {
            obj = new StarshipModel(data);
        } else if(props?.tipo === "vehicles") {
            obj = new VehicleModel(data);
        } else if(props?.tipo === "people") {
            obj = new PeopleModel(data);
        } else if(props?.tipo === "planets") {
            obj = new PlanetModel(data);
        } 
    }

    return (
        <>
            <Row>{obj?.name}</Row>
        </>
    );
}

export default Item;