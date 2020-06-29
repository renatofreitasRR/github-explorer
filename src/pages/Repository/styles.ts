import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

      &:hover{
          color: #666;
      }

      svg {
          margin-right: 4px;
      }
  }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header{
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div{
            margin-left: 24px;

            strong{
                color: #3d3d4d;
                font-size: 36px; 
            }

            p{
                color: #737380;
                font-size: 18px;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;



        li{
            & + li{
                margin-left: 80px;
            }
            strong{
                color: #3d3d4d;
                display: block;
                font-size: 36px;
            }

            span{
                color: #6c6c80;
                display: block;
                margin-top: 4px;
            }
        }
    }
`;
export const Issues = styled.div`
    margin-top: 80px;
    
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
