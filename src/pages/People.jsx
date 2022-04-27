import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import Item from "../components/Item";
import Error from "../components/Error";
import PeopleModel from "../model/People";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const People = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`people/${params?.id}`);

    let people = null;

    if (!isFetching) { 
        people = new PeopleModel(data);
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Character: { people?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Gender:</Label>
                                <Value>{ people?.gender }</Value>
                            </Row>
                            <Row>
                                <Label>Birth Year:</Label>
                                <Value>{ people?.birthYear }</Value>
                            </Row>
                            <Row>
                                <Label>Height:</Label> 
                                <Value>{ people?.height }</Value> 
                            </Row>
                            <Row>
                                <Label>Mass:</Label> 
                                <Value>{ people?.mass }</Value> 
                            </Row>
                            <Row>
                                <Label>Eye Color:</Label> 
                                <Value>{ people?.eyeColor }</Value> 
                            </Row>
                            <Row>
                                <Label>Hair Color:</Label> 
                                <Value>{ people?.hairColor }</Value> 
                            </Row>
                            <Row>
                                <Label>Skin Color:</Label> 
                                <Value>{ people?.skinColor }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Films:</SubTitulo>
                            {
                                people?.films.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/films/${obj}`}>
                                            <Item tipo="films" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                people?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Species:</SubTitulo>
                            {
                                people?.species.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/species/${obj}`}>
                                            <Item tipo="species" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                people?.species.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Starships:</SubTitulo>
                            {
                                people?.starships.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/starships/${obj}`}>
                                            <Item tipo="starships" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                people?.starships.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Vehicles:</SubTitulo>
                            {
                                people?.vehicles.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/vehicles/${obj}`}>
                                            <Item tipo="vehicles" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                people?.vehicles.length === 0 && <SemInfo>...</SemInfo>
                            }
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default People;