import React from "react";
import { InputGroup, Input, Button } from "@chakra-ui/react";
import movieAPI from "../../services/movieAPI";
export const Search = () => {
  const [movie, setMovie] = React.useState("");
  const handleClick = () => {
    movieAPI.fetchMovie(movie);
  };
  return (
    <InputGroup m={2} p={2}>
      <Input onChange={(e) => setMovie(e.target.value)} placeholder="Search" />
      <Button onClick={handleClick}>Search</Button>
    </InputGroup>
  );
};
