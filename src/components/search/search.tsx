import React from "react";
import { InputGroup, Input, Button } from "@chakra-ui/react";
import movieAPI from "../../services/movieAPI";
import { useNavigate } from "react-router-dom";
export const Search = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = React.useState("");

  const handleClick = async () => {
    const data = await movieAPI.fetchMovieByTitle(movie);
    navigate(`/movie/${data.Title}`, { state: data });
  };
  return (
    <InputGroup m={2} p={2}>
      <Input onChange={(e) => setMovie(e.target.value)} placeholder="Search" />
      <Button onClick={handleClick}>Search</Button>
    </InputGroup>
  );
};
