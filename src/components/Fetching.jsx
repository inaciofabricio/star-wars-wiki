import styled from "styled-components";

const Loading = styled.div`
    margin: 15px 0;
    padding: 15px;
    font-weight: bold;
    color:  ${({ theme }) => theme.text};
    border-radius: 5px;
`;


const Fetching = () => {
    return (
        <div>
            <Loading>
                <span >Loading...</span>
            </Loading>
        </div>
    );
}

export default Fetching;