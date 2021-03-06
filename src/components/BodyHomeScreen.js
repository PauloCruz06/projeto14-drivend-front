import styled from "styled-components";

export const BackgroundScreen = styled.div`
    width: 100%;
    height: 100%;
    padding: 144px 23px 0px 23px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #ffffff;
    font-family: 'Roboto', sans-serif;
`
export const BackgroundMovieScreen = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 40px 0px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    font-family: 'Roboto', sans-serif;

`
export const SearchList = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: safe center;
    > h1{
        width: auto;
        height: auto;
        font-weight: 700;
        font-size: 30px;
        color: #746A6A;
    }
`