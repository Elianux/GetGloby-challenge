import type { NextApiRequest, NextApiResponse } from 'next'
import { MovieShort } from '../../../utils/types'

const baseURL = `${process.env.NEXT_PUBLIC_OMDB_URL}?apikey=${process.env.NEXT_PUBLIC_OMDB_APIKEY}&type=movie`

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { s } = req.query
  return getMovies(s.toString()).then((movies) => {
    res.status(200).json(movies)
  })
}

const getMovies = async (title: string): Promise<MovieShort> => {
  const url = `${baseURL}&s=${title}`

  try {
    const response = await fetch(`${url}`).then((res) => res.json())
    return response.Search || []
  } catch (error: any) {
    return error.Error
  }
}
