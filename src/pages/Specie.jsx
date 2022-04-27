import { useParams } from "react-router";
import { Link } from "react-router-dom";

import useApi from "../hooks/useApi";
import Item from "../components/Item";
import Error from "../components/Error";
import SpecieModel from "../model/Specie";

import { 
    ConteudoUnique, Titulo, Principal, Dados, SubTitulo,
    Row, Label, Value, Extra, SemInfo
} from "../components/UI";

const Specie = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`species/${params?.id}`);

    let specie = null;

    if (!isFetching) { 
        specie = new SpecieModel(data);
        console.log(specie)
    }

    return (
        <>
            { 
                error && <Error error={error} />             
            }
            { 
                !isFetching && !error &&
                <ConteudoUnique>
                    <Titulo>Specie: { specie?.name }</Titulo>
                    <Dados>
                        <Principal>
                            <SubTitulo>Information:</SubTitulo>
                            <Row>
                                <Label>Classification:</Label>
                                <Value>{ specie?.classification }</Value>
                            </Row>
                            <Row>
                                <Label>Designation:</Label>
                                <Value>{ specie?.designation }</Value>
                            </Row>
                            <Row>
                                <Label>Eye Colors:</Label> 
                                <Value>{ specie?.eyeColors }</Value> 
                            </Row>
                            <Row>
                                <Label>Hair Colors:</Label> 
                                <Value>{ specie?.hairColors }</Value> 
                            </Row>
                            <Row>
                                <Label>Language:</Label> 
                                <Value>{ specie?.language }</Value> 
                            </Row>
                            <Row>
                                <Label>Skin Colors:</Label> 
                                <Value>{ specie?.skinColors }</Value> 
                            </Row>
                            <Row>
                                <Label>Average Height:</Label> 
                                <Value>{ specie?.averageHeight }</Value> 
                            </Row>
                            <Row>
                                <Label>Average Lifespan:</Label> 
                                <Value>{ specie?.averageLifespan }</Value> 
                            </Row>
                        </Principal>
                        <Extra>
                            <SubTitulo>Planet:</SubTitulo>
                            {
                                <Link to={`/planets/${specie?.homeworld}`}>
                                    <Item tipo="planets" id={specie?.homeworld}></Item>
                                </Link>
                            }
                            {
                                specie?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Films:</SubTitulo>
                            {
                                specie?.films.map((obj) => {
                                    return (
                                        <Link key={obj} to={`/films/${obj}`}>
                                            <Item tipo="films" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                specie?.films.length === 0 && <SemInfo>...</SemInfo>
                            }
                            <SubTitulo>Peoples:</SubTitulo>
                            {
                                specie?.peoples.map((obj, x) => {
                                    return (
                                        <Link key={obj} to={`/people/${obj}`}>
                                            <Item tipo="people" id={obj}></Item>
                                        </Link>
                                    )
                                })
                            }
                            {
                                specie?.peoples.length === 0 && <SemInfo>...</SemInfo>
                            }
                        </Extra>
                    </Dados>
                </ConteudoUnique>
            }
        </>
    )
}

export default Specie;