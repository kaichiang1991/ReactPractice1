import styled from "styled-components"

export const StyledAppWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #FFFDE2;
    width: 80%;
    height: 30%;
`

export const StyledContent = styled.div`
    margin-top: 20px;

    .col-1-2{
    width: 50%;
    text-align: center;
    }

    section{
    text-align: center;
    padding: 12px 48px;
    }
`

export const StyledExploreBtn = styled.button`
  background-color: #376C3D;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  &:hover{
    background-color: rgba(55, 108, 61, 0.6);
  }

  &:active{
    background-color: rgba(55, 108, 61, 0.8);
  }
`