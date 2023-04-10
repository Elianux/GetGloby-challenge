import { Movie } from '../../utils/types'
import { parseDuration } from '../../utils/utils'

export function TitleSection({ movie }: { movie: Movie }) {
  return (
    <>
      <h1 className='font-extrabold text-5xl text-white'>{movie.Title}</h1>
      <p className='text-[#7A8C99] mt-1 text-sm'>
        Original title: {movie.Title}
      </p>
      <p className='text-[#7A8C99] text-sm'>{`${parseDuration(
        movie.Runtime
      )} - ${movie.Year} - ${movie.Rated}`}</p>
    </>
  )
}
