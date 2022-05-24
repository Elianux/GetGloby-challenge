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

// order commnenets by date
// export const orderComments = (comments: Comment[]): any => {
//   return comments.sort((a, b) => {
//     return new Date(b.date).getTime() - new Date(a.date).getTime()
//   })
// }