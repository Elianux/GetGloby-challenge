import MovieCard from './MovieCard'

export default function MovieGrid({ movies }: any) {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 min-h-screen mt-5">
        {movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  )
}
