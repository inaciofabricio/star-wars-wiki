import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import Fetching from "../components/Fetching";
import Error from "../components/Error";
import FilmModel from "../model/Film";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Films = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`films/?page=${page}`);

    let films = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            films.push(new FilmModel(obj));
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
                    <Titulo>Films</Titulo>
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
                            error && <Error error={ error } />             
                        }
                        { 
                            !isFetching && !error && films.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            films.map((film) => {
                                return (
                                    <Item key={ film?.id }>
                                        <div>
                                            <Name>
                                                { film?.name }
                                            </Name>
                                            <Info>
                                                <Label>Director:</Label> 
                                                <Value>{ film?.director }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Episode:</Label> 
                                                <Value>{ film?.episode }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/films/${film?.id}`}>
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

export default Films;