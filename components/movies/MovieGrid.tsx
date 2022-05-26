import { Movie } from '../../utils/types'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 min-h-screen gap-2 mt-5">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  )
}
