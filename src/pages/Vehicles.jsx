import { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useApi from "../hooks/useApi";
import VehicleModel from "../model/Vehicle";
import Fetching from "../components/Fetching";
import Error from "../components/Error";

import { 
    ConteudoList, Titulo, Results, Itens, Item,
    Name, Label, Value, Info, Details, Buttons,
    Button, Page 
} from "../components/UI";

const Vehicles = () => {

    const [ page, setPage ] = useState(1);

    const { data, error, isFetching } = useApi(`vehicles/?page=${page}`);

    let vehicles = [];
    let startPage = 0;
    let endPage = 0;
    let total = 0;

    if (!isFetching) {

        data.results.forEach(obj => {
            vehicles.push(new VehicleModel(obj));
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
                    <Titulo>Vehicles</Titulo>
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
                            !isFetching && !error && vehicles.length === 0 && <div>Sem resultados!</div>
                        }
                        { 
                            !isFetching && !error &&
                            vehicles.map((vehicle) => {
                                return (
                                    <Item key={vehicle?.id}>
                                        <div>
                                            <Name>
                                                {vehicle?.name}
                                            </Name>
                                            <Info>
                                                <Label>Model:</Label> 
                                                <Value>{ vehicle?.model }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Length:</Label> 
                                                <Value>{ vehicle?.length }</Value> 
                                            </Info>
                                            <Info>
                                                <Label>Passengers:</Label> 
                                                <Value>{ vehicle?.passengers }</Value> 
                                            </Info>
                                        </div>
                                        <div>
                                            <Link to={`/vehicles/${vehicle?.id}`}>
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

export default Vehicles;