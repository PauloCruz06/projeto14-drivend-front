<<<<<<< HEAD
import { useState, useEffect, useMemo, useContext } from "react";
=======
import { useState, useEffect, useMemo } from "react";
>>>>>>> 49ac94f48e078240b0d39a621f22b55af16efd7c
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import UserContext from "../context/UserContext";
import { BackgroundScreen } from "./BodyHomeScreen";

import Header from "./Header";
import MovieStyle from "./MovieStyle";
import MovieGenreList from "./MovieGenreList";

export default function HomeScreen(){
    //const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [movieGenres] = useState([
        "Lançamento",
        "Drama",
        "Ação",
        "Suspense",
        "Terror",
        "Romance",
        "Aventura",
        "Clássico",
        "Documentário",
        "Show"
    ]);

    dotenv.config();

    useEffect(() => {
        loadMovies();
    }, []);

    function loadMovies(){
        const promise = axios.get(`${process.env.REACT_APP_URL_API}/movies`);

        promise.then((res) =>
            setMovies(res.data)
        ).catch(() =>
            alert("Não foi possível exibir filmes, tente atualizar a página")
        );
    }

    const movieListFiltered = useMemo(() => {
        const LowerSearch = search.toLowerCase();

        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(LowerSearch) ||
            movie.genre.join(" ").toLowerCase().includes(LowerSearch) ||
            movie.director.toLowerCase().includes(LowerSearch) ||
            movie.year.includes(LowerSearch)
        );
    }, [movies, search]);

    function movieGenreFiltered(genre){
        return movies.filter((movie) =>
            movie.genre.join(" ").includes(genre)
        );
    }

    return(
        <BackgroundScreen>
            <Header 
                search={search}
                setSearch={setSearch}
            />
            {search === "" ?
                movieGenres.map((genre, index) => (
                    <MovieGenreList key={index} genre={genre} genreList={movieGenreFiltered(genre)} />
                ))
            :
                movieListFiltered.length === 0 ?
                    <NotFound> Filme não encontrado </NotFound>
            :
                <SearchList>
                    {movieListFiltered.map((movie, index) => (
                        <MovieStyle key={index} image={movie.image} title={movie.title} value={movie.value} id={movie.productId} />
                    ))}
                </SearchList>
            }
        </BackgroundScreen>
    );
}

const NotFound = styled.h1`
    width: 100%;
    height: 38px;
    margin-top: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: #746A6A;
<<<<<<< HEAD
    text-align: left;
=======
    text-align: center;
`
const SearchList = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: safe center;
>>>>>>> 49ac94f48e078240b0d39a621f22b55af16efd7c
`