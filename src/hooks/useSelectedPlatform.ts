import usePlatforms from "./usePlatforms";

const useSelectedPlatform = (platformId: number | undefined) =>{
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(p => p.id === platformId) 
}

export default useSelectedPlatform;