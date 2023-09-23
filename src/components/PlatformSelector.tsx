import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useSelectedPlatform from "../hooks/useSelectedPlatform";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

  const { data, error } = usePlatforms();
  const selectdPlatform = useSelectedPlatform(selectedPlatformId);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectdPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
