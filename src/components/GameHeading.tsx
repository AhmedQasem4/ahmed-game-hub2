import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useSelectedGenre from "../hooks/useSelectedGenre";
import useSelectedPlatform from "../hooks/useSelectedPlatform";


interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useSelectedGenre(gameQuery.genreId);
  const selectedPlatform = useSelectedPlatform(gameQuery.platformId);
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
