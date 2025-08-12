import { useQuery } from "@tanstack/react-query"

type Movie = {
    id: string;
    title: string;
}

export const useMovies = () => {

    return useQuery<Movie[]>({
        queryKey: ['moviesKey'],
        queryFn: () =>
          fetch('https://localhost:3001/movies').then((res) =>
            res.json(),
          ),
      })


}