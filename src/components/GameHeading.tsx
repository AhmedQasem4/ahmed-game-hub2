import { Heading } from "@chakra-ui/react";
import useSelectedGenre from "../hooks/useSelectedGenre";
import useSelectedPlatform from "../hooks/useSelectedPlatform";
import useGameQueryStore from "../store";


const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);

  const selectedGenre = useSelectedGenre(genreId);
  const selectedPlatform = useSelectedPlatform(platformId);

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
