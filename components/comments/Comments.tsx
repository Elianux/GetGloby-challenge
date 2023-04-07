import { useState, useEffect } from 'react'
import { getComments, postComment } from '../../services/comments'
import { CommentsProps, Comment } from '../../utils/types'
import { getCurrentDateDDMMYYYYHHMM } from '../../utils/utils'
import Rating from '../rating/Rating'
import CommentsList from './CommentsList'

export default function Comments({ mid }: CommentsProps) {
  const [comment, setComment] = useState({
    name: '',
    comment: '',
    date: '',
    rating: 0,
  })
  const [rating, setRating] = useState<number>(0)
  const [comments, setComments] = useState<Comment[]>([])
  const [clearRating, setClearRating] = useState(false)

  useEffect(() => {
    const comments = getComments(mid)
    setComments([...comments])
  }, [])

  const handleClick = () => {
    const updatedComment = {
      ...comment,
      date: getCurrentDateDDMMYYYYHHMM(),
      rating,
    }

    const updatedComments = [...comments, updatedComment]

    setComments(updatedComments)

    postComment(mid, updatedComments)

    setComment({
      name: '',
      comment: '',
      date: '',
      rating: 0,
    })

    setClearRating(true)
  }

  return (
    <>
      <div>
        <label className='text-white font-semibold text-3xl'>Comments</label>

        <div className='flex mt-5'>
          <p className='text-[#7A8C99] text-bold text-xl mr-5'>Rate:</p>
          <Rating updateRating={setRating} clearRating={clearRating} classes='text-3xl' />
        </div>

        <div className='mt-5'>
          <input
            type='text'
            name='name'
            className='pl-5 pt-2 pb-2 rounded-md outline-none focus:border-rose-600 focus:border-2'
            placeholder='Name'
            value={comment.name}
            onChange={(event) =>
              setComment({ ...comment, name: event.target.value })
            }
          />
        </div>

        <div>
          <textarea
            name='comment'
            className='w-full mt-3 pl-5 pt-2 pb-2 rounded-md outline-none focus:border-rose-600 focus:border-2 resize-none h-32'
            value={comment.comment}
            placeholder='Add your comments here'
            onChange={(event) =>
              setComment({ ...comment, comment: event.target.value })
            }
          ></textarea>
        </div>
        <div className='text-right mt-2'>
          <button
            className='bg-[#2EC4B6] hover:bg-[#2ECFFF] disabled:bg-[#2e505a] text-white p-2 rounded-lg w-24'
            onClick={handleClick}
            disabled={!comment.name || !comment.comment}
          >
            Post
          </button>
        </div>
      </div>

      <CommentsList comments={comments} />
    </>
  )
}
