export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: [{ Source: string; Value: string }]
  Metascore: number
  imdbRating: number
  imdbVotes: number
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: boolean
}

export interface MovieShort{
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface CommentsProps {
  mid: string
}

export interface Comment {
  name: string
  comment: string
  rating: number
  date: string
}

export interface RatingIconProps {
  index: number
  rating: number
  hoverRating: number
  onMouseEnter: (index: number) => void
  onMouseLeave: () => void
  onSaveRating: (rating: number) => void
}

export interface Rating {
  Source: string
  Value: string
}
