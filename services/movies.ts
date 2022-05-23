export const getMovies = async (s: string) => {
  const res = await fetch(`http://localhost:3000/api/movies?s=${s}`)
  const movies = await res.json()
  return movies
}

export const getMovie = async (i: string) => {
  const res = await fetch(`http://localhost:3000/api/movies/${i}`)
  const movie = await res.json()
  console.log(movie)
  return movie
}

