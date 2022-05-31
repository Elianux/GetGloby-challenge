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
      return Number(r) * 10
    }

    if (rating.Source === 'Rotten Tomatoes') {
      const r = rating.Value.split('%')[0]
      return Number(r)
    }

    if (rating.Source === 'Metacritic') {
      const r = rating.Value.split('/')[0]
      return Number(r)
    }
    
  })
}

export const getAverageRating = (ratings: Number[]) => {
  const sum = ratings.reduce((acc: any, r: any) => acc + r, 0)

  return sum / ratings.length
}

// "Ratings": [
//   {
//   "Source": "Internet Movie Database",
//   "Value": "9.0/10"
//   },
//   {
//   "Source": "Rotten Tomatoes",
//   "Value": "96%"
//   },
//   {
//   "Source": "Metacritic",
//   "Value": "90/100"
//   }
//   ],
