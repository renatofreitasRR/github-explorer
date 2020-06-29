import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    color: #3A3A3A;

    font-size: 36px;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;

`;
export const Error = styled.span`
    display: block;

    color: #c53030;

    margin-top: 30px;
`;
export const Form = styled.form<FormProps>`
    display:flex;

    margin-top: 40px;
    max-width: 700px;

    input{
        color: #3A3A3A;

        flex: 1;

        height: 70px;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder{
            color: #a8a8b3;
        }

    }

    > button {
        background: #04d361;
        color: #fff;

        width: 210px;
        height: 70px;
        border-radius: 0 5px 5px 0;

        font-weight: bold;

        transition: 0.2s;

        &:hover {
            opacity: 0.5;
        }

    }
`;
export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;

        display: block;
        display: flex;
        align-items: center;

        border-radius: 5px;
        width: 100%;
        padding: 24px;

        text-decoration: none;

        transition: 0.2s;

        & + a{
            margin-top: 16px;
        }

        &:hover{
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;

            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;
            
            strong{
                color: #3D3D4D;

                font-size: 20px;
                
            }

            p{
                color: #A8A8B3;

                font-size: 18px;
                margin-top: 4px;
            }
        }
        svg {
            color: #CBCBD6;

            margin-left: auto;
        }
    }
`;