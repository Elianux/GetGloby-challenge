import { Comment } from "../../utils/types";

export default function CommentsList({ comments }: { comments: Comment[] }) {
  return (
    <div className='pb-14'>
      {Array.isArray(comments) ? (
        comments.map((comment: Comment, index) => (
          <div className='mb-5' key={index}>
            <p className='text-[#7A8C99] font-semibold'>{`${comment.name} - ${comment.date}`}</p>
            <p className='text-white text-sm'>{comment.comment}</p>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  )
}
