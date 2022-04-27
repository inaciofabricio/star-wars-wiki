import { useParams } from "react-router";
import { Link } from "react-router-dom";

import useApi from "../hooks/useApi";
import Item from "../components/Item";
import Error from "../components/Error";
import StarshipModel from "../model/Starship";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const Starship = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`starships/${params?.id}`);

    let starship = null;

    if (!isFetching) { 
        starship = new StarshipModel(data);
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Starship: { starship?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Model:</Label> 
                                <Value>{ starship?.model }</Value> 
                            </Row>
                            <Row>
                                <Label>Length:</Label> 
                                <Value>{ starship?.length }</Value> 
                            </Row>
                            <Row>
                                <Label>Cost in Credits:</Label> 
                                <Value>{ starship?.costInCredits }</Value> 
                            </Row>
                            <Row>
                                <Label>Mega Light:</Label>
                                <Value>{ starship?.megalight }</Value>
                            </Row>
                            <Row>
                                <Label>Cargo Capacity:</Label>
                                <Value>{ starship?.cargoCapacity }</Value>
                            </Row>
                            <Row>
                                <Label>Consumables:</Label> 
                                <Value>{ starship?.consumables }</Value> 
                            </Row>
                            <Row>
                                <Label>Crew:</Label> 
                                <Value>{ starship?.crew }</Value> 
                            </Row>
                            <Row>
                                <Label>Hyperdrive Rating:</Label> 
                                <Value>{ starship?.hyperdriveRating }</Value> 
                            </Row>
                            <Row>
                                <Label>Manufacturer:</Label> 
                                <Value>{ starship?.manufacturer }</Value> 
                            </Row>
                            <Row>
                                <Label>Max Atmosphering Speed:</Label> 
                                <Value>{ starship?.maxAtmospheringSpeed }</Value> 
                            </Row>
                            <Row>
                                <Label>Passengers:</Label> 
                                <Value>{ starship?.passengers }</Value> 
                            </Row>
                            <Row>
                                <Label>Starship Class:</Label> 
                                <Value>{ starship?.starshipClass }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Films:</SubTitulo>
                            {
                                starship?.films.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/films/${obj}`}>
                                            <Item tipo="films" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                starship?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Peoples:</SubTitulo>
                            {
                                starship?.peoples.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/people/${obj}`}>
                                            <Item tipo="people" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                starship?.peoples.length === 0 && <SemInfo>...</SemInfo>
                            }
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default Starship;