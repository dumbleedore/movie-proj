import React from "react";
import { InputGroup, Input, Button, Spinner, Center } from "@chakra-ui/react";
import movieAPI from "../../services/movieAPI";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { MovieNotFound } from "../movieNotFound/movieNotFound";
export const Search = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = React.useState("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [movieDoeNotExists, setmovieDoeNotExists] = React.useState(false);
  const doesMovieNotExists = (data: any): boolean => {
    return data?.Response == "False";
  };
  const handleClick = async () => {
    setLoading(true);
    setmovieDoeNotExists(false);
    const data = await movieAPI.fetchMovieByTitle(movie);
    setLoading(false);

    console.log(doesMovieNotExists(data));
    if (doesMovieNotExists(data)) setmovieDoeNotExists(true);
    else navigate(`/movie/${data.Title}`, { state: data });
  };
  return isLoading ? (
    <Center>
      <Spinner
        data-testid="spinner"
        className={styles.verticalCenter}
        thickness="6px"
        speed="1.0s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Center>
  ) : (
    <>
      <InputGroup m={2} p={2}>
        <Input
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Search"
        />
        <Button onClick={handleClick}>Search</Button>
      </InputGroup>
      {movieDoeNotExists && <MovieNotFound />}
    </>
  );
};
