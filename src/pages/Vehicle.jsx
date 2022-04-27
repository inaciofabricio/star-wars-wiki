import { useParams } from "react-router";
import { Link } from "react-router-dom";

import useApi from "../hooks/useApi";
import Item from "../components/Item";
import Error from "../components/Error";
import VehicleModel from "../model/Vehicle";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const Vehicle = () => {
    
    let params = useParams();
    const { data, error, isFetching } = useApi(`vehicles/${params?.id}`);

    let vehicle = null;

    if (!isFetching) { 
        vehicle = new VehicleModel(data);
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Vehicle: { vehicle?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Model:</Label> 
                                <Value>{ vehicle?.model }</Value> 
                            </Row>
                            <Row>
                                <Label>Length:</Label> 
                                <Value>{ vehicle?.length }</Value> 
                            </Row>
                            <Row>
                                <Label>Cost in Credits:</Label> 
                                <Value>{ vehicle?.costInCredits }</Value> 
                            </Row>
                            <Row>
                                <Label>Cargo Capacity:</Label>
                                <Value>{ vehicle?.cargoCapacity }</Value>
                            </Row>
                            <Row>
                                <Label>Consumables:</Label> 
                                <Value>{ vehicle?.consumables }</Value> 
                            </Row>
                            <Row>
                                <Label>Crew:</Label> 
                                <Value>{ vehicle?.crew }</Value> 
                            </Row>
                            <Row>
                                <Label>Manufacturer:</Label> 
                                <Value>{ vehicle?.manufacturer }</Value> 
                            </Row>
                            <Row>
                                <Label>Max Atmosphering Speed:</Label> 
                                <Value>{ vehicle?.maxAtmospheringSpeed }</Value> 
                            </Row>
                            <Row>
                                <Label>Passengers:</Label> 
                                <Value>{ vehicle?.passengers }</Value> 
                            </Row>
                            <Row>
                                <Label>vehicle Class:</Label> 
                                <Value>{ vehicle?.vehicleClass }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Films:</SubTitulo>
                            {
                                vehicle?.films.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/films/${obj}`}>
                                            <Item tipo="films" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                vehicle?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Peoples:</SubTitulo>
                            {
                                vehicle?.peoples.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/people/${obj}`}>
                                            <Item tipo="people" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                vehicle?.peoples.length === 0 && <SemInfo>...</SemInfo>
                            }
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default Vehicle;