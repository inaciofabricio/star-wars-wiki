/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";

const Section = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Text = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 10px;
    font-weight: 400;
`;

const Footer = () => {

    return (
        <footer>
            <Section>
                <div>
                    <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">
                        <Text>@StartWarsAPI</Text>
                    </a>
                </div>
                <div>
                    <Text>Wiki Start Wars</Text> 
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/inaciofabricionunesdesousa/" target="_blank" rel="noopener noreferrer">
                        <Text>@InacioFabricio</Text>
                    </a>
                </div>
            </Section>
        </footer>
    )
};

export default Footer;