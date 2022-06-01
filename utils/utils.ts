import { Rating } from './types'

export const parsePoster = (poster: string): string => {
  if (poster === 'N/A') {
    return '/../public/no-poster.png'
  }
  return poster
}

// convert duration in minutes to hours and minutes
export const parseDuration = (duration: string): string => {
  const min = duration.split(' ')[0]
  const hours = Math.floor(Number(min) / 60)
  const minutes = Number(min) % 60
  return `${hours}h ${minutes}m`
}

export const getCurrentDateDDMMYYYYHHMM = (): string => {
  const date = new Date(Date.now())
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

export const parseRatings = (ratings: Rating[]) => {
  return ratings.map((rating: Rating) => {
    if (rating.Source === 'Internet Movie Database') {
      const r = rating.Value.split('/')[0]
      return parseInt(r) * 10
    }

    if (rating.Source === 'Rotten Tomatoes') {
      const r = rating.Value.split('%')[0]
      return parseInt(r)
    }

    if (rating.Source === 'Metacritic') {
      const r = rating.Value.split('/')[0]
      return parseInt(r)
    }

    return 0
  })
}

export const getAverageRating = (ratings: number[]) => {
  const sum = ratings.reduce((acc: number, r: number) => acc + r, 0)

  return sum / ratings.length
}
