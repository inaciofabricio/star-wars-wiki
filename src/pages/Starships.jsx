import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import StarshipModel from "../model/Starship";
import Fetching from "../components/Fetching";
import Error from "../components/Error";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Starships = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`starships/?page=${page}`);

    let starships = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            starships.push(new StarshipModel(obj));
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
                    <Titulo>starships</Titulo>
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
                            !isFetching && !error && starships.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            starships.map((starship) => {
                                return (
                                    <Item key={starship?.id}>
                                        <div>
                                            <Name>
                                                {starship?.name}
                                            </Name>
                                            <Info>
                                                <Label>Model:</Label> 
                                                <Value>{ starship?.model }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Length:</Label> 
                                                <Value>{ starship?.length }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Passengers:</Label> 
                                                <Value>{ starship?.passengers }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/starships/${starship?.id}`}>
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

export default Starships;