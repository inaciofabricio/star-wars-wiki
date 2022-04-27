import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import PlanetModel from "../model/Planet";
import Item from "../components/Item";
import Error from "../components/Error";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const Planet = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`planets/${params?.id}`);

    let planet = null;

    if (!isFetching) { 
        planet = new PlanetModel(data);
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Planet: { planet?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Climate:</Label>
                                <Value>{ planet?.climate }</Value>
                            </Row>
                            <Row>
                                <Label>Diameter:</Label>
                                <Value>{ planet?.diameter }</Value>
                            </Row>
                            <Row>
                                <Label>Gravity:</Label> 
                                <Value>{ planet?.gravity }</Value> 
                            </Row>
                            <Row>
                                <Label>Orb.Period:</Label> 
                                <Value>{ planet?.orbitalPeriod }</Value> 
                            </Row>
                            <Row>
                                <Label>Rot. Period:</Label> 
                                <Value>{ planet?.rotationPeriod }</Value> 
                            </Row>
                            <Row>
                                <Label>Surface Water:</Label> 
                                <Value>{ planet?.surfaceWater }</Value> 
                            </Row>
                            <Row>
                                <Label>Population:</Label> 
                                <Value>{ planet?.population }</Value> 
                            </Row>
                            <Row>
                                <Label>Terrain:</Label> 
                                <Value>{ planet?.terrain }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Films:</SubTitulo>
                            {
                                planet?.films?.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/films/${obj}`}>
                                            <Item tipo="films" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                planet?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Peoples:</SubTitulo>
                            {
                                planet?.residents?.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/people/${obj}`}>
                                            <Item tipo="people" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                planet?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
        
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default Planet;