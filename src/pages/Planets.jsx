import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import PlanetModel from "../model/Planet";
import Fetching from "../components/Fetching";
import Error from "../components/Error";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Planets = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`planets/?page=${page}`);

    let planets = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            planets.push(new PlanetModel(obj));
        });

        startPage = (10 * page) - 9;
        endPage = 10 * page;
        total = data.count;
    }

    function proximo() {
        
        let pageNext = data?.next?.split("=")[1];
        if(pageNext){
            window.scrollTo(0, 0);
            setPage(pageNext);
        }
    }

    function anterior() {
        
        let pagePrevious = data?.previous?.split("=")[1];
        if(pagePrevious) {
            window.scrollTo(0, 0);
            setPage(pagePrevious);
        }
    }

    return (
        <>
            <ConteudoList>
                <div>
                    <Titulo>Planets</Titulo>
                    {
                        <Results>
                            <span>{`Results: ${startPage} ... ${endPage} / ${total}`}</span>
                        </Results>
                    }
                    <Itens>
                        { 
                            isFetching && <Fetching />
                        }
                        { 
                            error && <Error error={error} />             
                        }
                        { 
                            !isFetching && !error && planets.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            planets.map((planet) => {
                                return (
                                    <Item key={planet?.id}>
                                        <div>
                                            <Name>
                                                {planet?.name}
                                            </Name>
                                            <Info>
                                                <Label>Diameter:</Label> 
                                                <Value>{ planet?.diameter }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Gravity:</Label> 
                                                <Value>{ planet?.gravity }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Orbital Period:</Label> 
                                                <Value>{ planet?.orbitalPeriod }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/planets/${planet?.id}`}>
                                                <Details>
                                                    Details
                                                </Details>    
                                            </Link>
                                        </div>
                                    </Item>
                                )
                            })
                        }
                    </Itens>
                </div>
                <div>
                    {
                        !isFetching && !error &&
                        <Buttons>
                            <Button onClick={anterior} disabled={isFetching}><FontAwesomeIcon icon={faArrowLeft} /></Button>
                            <Page>{ page }</Page>
                            <Button onClick={proximo} disabled={isFetching}><FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Buttons>
                    }
                </div>
            </ConteudoList>
        </>
    )
}

export default Planets;