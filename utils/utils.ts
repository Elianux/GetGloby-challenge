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
