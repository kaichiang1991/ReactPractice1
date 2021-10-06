import styled from "styled-components"

export const StyledAppHeader = styled.div`
    padding: 12px;
    display: flex;
    justify-content: space-between;

    .logo img{
        height: 100%;
    }
`

export const StyledNavigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const StyledSearch = styled.div`   
    i{
        margin-right: 8px;
    }

    input[type=text]{
        border: none;
        outline: none;
        width: 0;

        transition: width .5s linear;
    }

    input[type=text].open{
        width: 75%;
        padding: 8px 10px;
    }
`

export const StyledNavBar = styled.ul`
    list-style: none;
    margin: 0 4px;
    display: flex;
    justify-content: space-around;

    li{
        padding: 8px;
        cursor: pointer;
    }

    li:after{
        content: '';
        background-color: #FDC97A;

        display: block;
        height: 3px;

        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 0;
        transition: width .3s
    }

    li:hover:after{
        width: 100%;
    }

    a, a:link, a:active, a:hover{
        text-decoration: none;
        color: #000;
    }
`

export const StyledSignInBtn = styled.button`
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