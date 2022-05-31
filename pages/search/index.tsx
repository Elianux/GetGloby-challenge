import { GetServerSideProps } from 'next'
import MovieGrid from '../../components/movies/MovieGrid'
import NoResultsPage from '../../components/NoResultsPage'
import { getMovie, getMovies } from '../../services/movies'
import { Movie } from '../../utils/types'
import { getAverageRating, parseRatings } from '../../utils/utils'

export default function Results({ results }: { results: Movie[] }) {
  return results.length ? <MovieGrid movies={results} /> : <NoResultsPage />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { host } = context.req.headers

  const movies = await getMovies(host, context.query.s as string)

  const moviesPromises = movies.map(
    async (movie: any) => await getMovie(host, movie.imdbID)
  )

  const moviesWithDetails = await Promise.all(moviesPromises)

  const results = moviesWithDetails.sort((a: Movie, b: Movie) => {
    const ratingA = parseRatings(a.Ratings ?? [])
    const ratingB = parseRatings(b.Ratings ?? [])

    const avgA = getAverageRating(ratingA)
    const avgB = getAverageRating(ratingB)

    return avgB - avgA
  })

  console.log(results)

  return {
    props: { results },
  }
}
