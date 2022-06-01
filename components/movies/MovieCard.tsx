import Image from 'next/image'
import Router from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md'
import { getFavoriteStatus, saveFavorite } from '../../services/favorites'
import { MovieShort } from '../../utils/types'
import { parsePoster } from '../../utils/utils'

export default function MovieCard({ movie }: { movie: MovieShort }) {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const isFav = getFavoriteStatus(movie.imdbID)
    setIsFav(isFav)
  }, [])

  const handleClick = () => {
    return Router.push(`/movie/${movie.imdbID}`)
    // Fix return to search results instead of home page
    // return Router.push(`/movie/${movie.imdbID}?prev=${Router.asPath}`)
  }

  const toggleFav = (e: MouseEvent) => {
    e.stopPropagation()
    saveFavorite(movie.imdbID, !isFav)
    const favToggled = getFavoriteStatus(movie.imdbID)
    setIsFav(favToggled)
  }

  return (
    <div className='flex justify-around text-center w-auto'>
      <div className='hover:border-2 border-[#202020]'>
        <div
          className='text-white/70 text-xl z-50 relative top-14 left-24 bg-gray-100/60 hover:bg-white/70 p-2 rounded-full inline-block cursor-pointer'
          onClick={toggleFav}
        >
          {isFav ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
        </div>
        <div onClick={handleClick}>
          <Image
            className='rounded-md'
            src={parsePoster(movie.Poster)}
            alt={movie.Title}
            width={250}
            height={350}
          />
        </div>
      </div>
    </div>
  )
}
