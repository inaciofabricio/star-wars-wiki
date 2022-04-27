import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import SpecieModel from "../model/Specie";
import Fetching from "../components/Fetching";
import Error from "../components/Error";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Species = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`species/?page=${page}`);

    let species = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            species.push(new SpecieModel(obj));
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
                    <Titulo>Species</Titulo>
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
                            !isFetching && !error && species.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            species.map((specie) => {
                                return (
                                    <Item key={specie?.id}>
                                        <div>
                                            <Name>
                                                {specie?.name}
                                            </Name>
                                            <Info>
                                                <Label>Classification:</Label> 
                                                <Value>{ specie?.classification }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Language:</Label> 
                                                <Value>{ specie?.language }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Designation:</Label> 
                                                <Value>{ specie?.designation }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/species/${specie?.id}`}>
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

export default Species;