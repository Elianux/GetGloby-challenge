import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Comments from '../../components/comments/Comments'
import { getMovie } from '../../services/movies'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Router from 'next/router'
import { parseDuration } from '../../utils/utils'
import TitleSection from '../../components/movies/TitleSection'
import Info from '../../components/movies/Info'

export default function Movie({ movie }: any) {
  const handleClick = () => {
    // Fix return to search results instead of home page
    Router.back()
    // Router.push(Router.query.prev as string)
  }

  return (
    <div>
      <div className='flex'>
        <div className='text-left'>
          <FaLongArrowAltLeft
            className='text-3xl text-[#7A8C99] mb-3 cursor-pointer'
            onClick={handleClick}
          />
          <Image
            src={movie.Poster}
            alt={movie.title}
            width={400}
            height={560}
          />
        </div>
        <Info movie={movie} />
      </div>
      <div className='text-left mt-10'>
        <Comments mid={movie.imdbID} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movie = await getMovie(context.query.mid as string)

  return {
    props: { movie },
  }
}
