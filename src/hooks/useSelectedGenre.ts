import useGenres from "./useGenres";



const useSelectedGenre = (genreId: number | undefined) =>{
    const { data: genres } = useGenres();
    return genres?.results.find((g) => g.id === genreId);
}

export default useSelectedGenre;
