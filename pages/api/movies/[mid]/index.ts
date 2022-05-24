import type { NextApiRequest, NextApiResponse } from 'next'
import { Movie } from '../../../../utils/types'

const baseURL = `${process.env.NEXT_PUBLIC_OMDB_URL}?apikey=${process.env.NEXT_PUBLIC_OMDB_APIKEY}`

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | undefined>
) {
  const { mid } = req.query
  return getMovie(mid.toString()).then((movie) => {
    res.status(200).json(movie)
  })
}

const getMovie = async (mid: string): Promise<Movie[] | undefined> => {
  const url = `${baseURL}&i=${mid}`
  try {
    const response = await fetch(`${url}`).then((res) => res.json())
    return response || {}
  } catch (error: any) {
    error.Error
  }
}
