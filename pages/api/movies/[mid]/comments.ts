import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = `${process.env.NEXT_PUBLIC_OMDB_URL}?apikey=${process.env.NEXT_PUBLIC_OMDB_APIKEY}`

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { mid } = req.query
  const method = req.method

  const comments = getComments(mid.toString())

  if (method === 'GET') {
    return res.status(200).json(comments)
  }

  if (method === 'POST') {
    const { comment } = req.body
    const newComment = postComment(mid.toString(), comment)

    return res.status(200).json(newComment)
  }
}

const getComments = (mid: string) => {
  return JSON.parse(localStorage.getItem(`msg-mid_${mid}`) || '[]')
}

const postComment = (mid: string, comment: string) => {
  return localStorage.setItem(`msg-mid_${mid}`, JSON.stringify(comment))
}
