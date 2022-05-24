import { GetServerSideProps } from 'next'
import MovieGrid from '../../components/movies/MovieGrid'
import NoResultsPage from '../../components/NoResultsPage'
import { getMovies } from '../../services/movies'
import { Movie } from '../../utils/types'

export default function Results({ results }: { results: Movie[] }) {
  return results.length ? <MovieGrid movies={results} /> : <NoResultsPage />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const results = await getMovies(context.query.s as string)

  return {
    props: { results },
  }
}
