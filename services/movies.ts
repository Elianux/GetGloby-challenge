export const getMovies = async (host: any, s: string) => {
  const res = await fetch(`http://${host}/api/movies?s=${s}`)
  const movies = await res.json()
  return movies
}

export const getMovie = async (host: string, i: string) => {
  const res = await fetch(`http://${host}/api/movies/${i}`)
  const movie = await res.json()
  return movie
}

