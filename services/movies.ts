export const getMovies = async (host: any, s: string) => {
  let protocol: string = 'https://'
  if (host.includes('localhost')) protocol = 'http://'

  const res = await fetch(`${protocol}${host}/api/movies?s=${s}`)
  const movies = await res.json()
  return movies
}

export const getMovie = async (host: any, i: string) => {
  let protocol: string = 'https://'
  if (host.includes('localhost')) protocol = 'http://'

  const res = await fetch(`${protocol}${host}/api/movies/${i}`)
  const movie = await res.json()
  return movie
}
