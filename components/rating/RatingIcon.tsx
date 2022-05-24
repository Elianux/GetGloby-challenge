import { useMemo } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { RatingIconProps } from '../../utils/types'

export default function RatingIcon({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
}: RatingIconProps) {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow'
    } else if (!hoverRating && rating >= index) {
      return 'yellow'
    }
    return 'gray'
  }, [rating, hoverRating, index])

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <AiFillStar fill={fill} />
    </div>
  )
}
