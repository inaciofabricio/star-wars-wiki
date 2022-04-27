import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Films from "../pages/Films";
import Film from "../pages/Film";
import Peoples from "../pages/Peoples";
import People from "../pages/People";
import Species from "../pages/Species";
import Specie from "../pages/Specie";
import Starships from "../pages/Starships";
import Starship from "../pages/Starship";
import Vehicles from "../pages/Vehicles";
import Vehicle from "../pages/Vehicle";
import Planet from "../pages/Planet";
import Planets from "../pages/Planets";
import styled from "styled-components";

const Page = styled.main`
    min-height: calc(100vh - 200px);
`;

const AppRouters = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/films", element: <Films /> },
        { path: "/films/:id", element: <Film /> },
        { path: "/peoples", element: <Peoples /> },
        { path: "/people/:id", element: <People /> },
        { path: "/species", element: <Species /> },
        { path: "/species/:id", element: <Specie /> },
        { path: "/starships", element: <Starships /> },
        { path: "/starships/:id", element: <Starship /> }, 
        { path: "/vehicles", element: <Vehicles /> },
        { path: "/vehicles/:id", element: <Vehicle /> },
        { path: "/planets", element: <Planets /> },
        { path: "/planets/:id", element: <Planet /> }    
    ]);
    return routes;
  };

const AppRouter = (props) => {
    return (
        <Router>
            <Header mudarThema={props?.mudarThema}/>
            <Page>
                <AppRouters /> 
            </Page>
            <Footer />
        </Router>
    )
};

export default AppRouter;