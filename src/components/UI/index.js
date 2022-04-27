import styled from "styled-components";

export const ConteudoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 75vh;
`;

export const ConteudoUnique = styled.div`
    min-height: 75vh;
`;

export const Titulo = styled.div`
    font-size: 26px;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: 10px;
    line-height: 34px;

    @media (max-width: 400px) {
        font-size: 18px;
    }
`;

export const Results = styled.div`
    display: flex;
    justify-content: end;
    margin: 15px 10px;
`;

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 25px;
    justify-content: center;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 15%;
    min-width: 200px;
    padding: 15px;
    border: 2px solid ${({ theme }) => theme.text};
    margin: 10px;
    border-radius: 10px;
`;

export const Name = styled.div`
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
`;

export const Label = styled.span`
    font-weight: 600;
`;

export const Value = styled.span`
    margin-left: 5px;
    text-decoration: underline;
    font-weight: 400;
`;

export const Info = styled.div`
    margin: 5px 10px;
`;

export const Details = styled.div`
    background-color: #1ca09a;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    padding: 5px 15px;
    margin: 10px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;
`;
export const Button = styled.button`
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.text};
`;

export const Page = styled.span`
    padding: 0 15px;
    font-weight: bold;
`;

export const Dados = styled.span`
    display: flex;
    flex-direction: row;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

export const Principal = styled.span`
    flex-basis: 50%;

    @media (max-width: 400px) {
        flex-basis: 1;
    }
`;

export const SubTitulo = styled.div`
    font-size: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: 5px 10px 0 10px;
    line-height: 20px;
`;

export const Extra = styled.span`
    flex-basis: 50%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0 10px 25px;
`;

export const SemInfo = styled.div`
    margin: 5px 15px;
`;