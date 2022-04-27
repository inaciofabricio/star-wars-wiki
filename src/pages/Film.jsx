import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import Item from "../components/Item";
import Error from "../components/Error";
import FilmModel from "../model/Film";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const Film = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`films/${params?.id}`);

    let film = null;

    if (!isFetching) { 
        film = new FilmModel(data);
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Film: { film?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Director:</Label>
                                <Value>{ film?.director }</Value>
                            </Row>
                            <Row>
                                <Label>Producer:</Label> 
                                <Value>{ film?.producer }</Value> 
                            </Row>
                            <Row>
                                <Label>Episode:</Label> 
                                <Value>{ film?.episode }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Peoples:</SubTitulo>
                            {
                                film?.characters.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/people/${obj}`}>
                                            <Item tipo="people" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                film?.characters.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Planets:</SubTitulo>
                            {
                                film?.planets.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/planets/${obj}`}>
                                            <Item tipo="planets" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                film?.planets.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Species:</SubTitulo>
                            {
                                film?.species.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/species/${obj}`}>
                                            <Item tipo="species" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                film?.species.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Starships:</SubTitulo>
                            {
                                film?.starships.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/starships/${obj}`}>
                                            <Item tipo="starships" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                film?.starships.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Vehicles:</SubTitulo>
                            {
                                film?.vehicles.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/vehicles/${obj}`}>
                                            <Item tipo="vehicles" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                film?.vehicles.length === 0 && <SemInfo>...</SemInfo>
                            }
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default Film;