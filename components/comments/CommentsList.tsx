export default function CommentsList({ comments }: any) {
  return (
    <div className='pb-14'>
      {Array.isArray(comments) ? (
        comments.map((comment: any, index) => (
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
