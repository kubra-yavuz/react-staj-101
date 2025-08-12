import { useMovies } from './useMovies'


const App = () => {
  const { data: movies } = useMovies()
  return <ul>
    {movies?.map((movie => <li>{movie.title}</li>))}
  </ul>
}

export default App
