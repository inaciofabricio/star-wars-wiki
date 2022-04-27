import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import PeopleModel from "../model/People";
import Fetching from "../components/Fetching";
import Error from "../components/Error";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Peoples = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`people/?page=${page}`);

    let peoples = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            peoples.push(new PeopleModel(obj));
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
                    <Titulo>Characters</Titulo>
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
                            !isFetching && !error && peoples.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            peoples.map((people) => {
                                return (
                                    <Item key={people?.id}>
                                        <div>
                                            <Name>
                                                {people?.name}
                                            </Name>
                                            <Info>
                                                <Label>Gender:</Label> 
                                                <Value>{ people?.gender }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Birth Year:</Label> 
                                                <Value>{ people?.birthYear }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Height:</Label> 
                                                <Value>{ people?.height }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Mass:</Label> 
                                                <Value>{ people?.mass }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/people/${people?.id}`}>
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

export default Peoples;