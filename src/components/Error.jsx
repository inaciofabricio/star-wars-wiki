import styled from "styled-components";

const Message = styled.div`
    margin: 15px 0;
    padding: 15px;
    font-weight: bold;
    background-color: rgb(241, 58, 58);
    border-radius: 5px;
`;

const Error = (props) => {
    return (
        <div>
            <Message>
                <span >{props?.error?.message}</span>
            </Message>
        </div>
    );
}

export default Error;