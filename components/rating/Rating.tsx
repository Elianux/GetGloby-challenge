import { useState } from 'react'
import RatingIcon from './RatingIcon'

export default function Rating({ prevRating, updateRating }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const onMouseEnter = (index) => {
    setHoverRating(index)
  }

  const onMouseLeave = () => {
    setHoverRating(0)
  }

  const onSaveRating = (index) => {
    setRating(index)
    updateRating(index)
  }

  return (
    <div className='flex cursor-pointer'>
      {[1, 2, 3, 4, 5].map((index) => (
        <RatingIcon
          key={index}
          index={index}
          rating={rating}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onSaveRating={onSaveRating}
          hoverRating={hoverRating}
        />
      ))}
    </div>
  )
}
