import Image from 'next/image'
import React from 'react'
import { Movie } from '../../utils/types'
import { TitleSection } from './TitleSection'

export default function Info({ movie }: { movie: Movie }) {
  return (
    <>
      <div className='p-5 mt-5 ml-5 text-left'>
        <TitleSection movie={movie} />
        <div className='mt-5 flex text-white'>
          <Image src='/imdb-icon.png' alt='imdb-icon' width={64} height={32} />
          <span className='font-bold text-2xl pt-1 ml-3'>
            {movie.imdbRating}
          </span>
          <span className='mt-2'>/10</span>
        </div>
        <div className='text-sm mt-6'>
          <p className='text-[#7A8C99] font-semibold'>Overview</p>
          <p className='text-white text-sm mt-2'>{movie.Plot}</p>
        </div>
        <div className='grid grid-cols-4 mt-6'>
          <div className='text-sm'>
            <p className='text-[#7A8C99] font-semibold mb-2'>Cast</p>
            {movie.Actors.split(',').map((actor: string, index: number) => (
              <p className='text-white mt-1' key={index}>
                {actor}
              </p>
            ))}
          </div>
          <div className='text-sm'>
            <p className='text-[#7A8C99] font-semibold mb-2'>Genre</p>
            {movie.Genre.split(',').map((genre: string, index: number) => (
              <p className='text-white mt-1' key={index}>
                {genre}
              </p>
            ))}
          </div>
          <div className='text-sm'>
            <p className='text-[#7A8C99] font-semibold mb-2'>Director</p>
            {movie.Director.split(',').map(
              (director: string, index: number) => (
                <p className='text-white mt-1' key={index}>
                  {director}
                </p>
              )
            )}
          </div>
          <div className='text-sm'>
            <p className='text-[#7A8C99] font-semibold mb-2'>Writers</p>
            {movie.Writer.split(',').map((writer: string, index: number) => (
              <p className='text-white mt-1' key={index}>
                {writer}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
