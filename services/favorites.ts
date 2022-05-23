export const getFavoriteStatus = (mid: string) => {
  return JSON.parse(localStorage.getItem(`fav-mid_${mid}`) || 'false')
}

export const saveFavorite = (mid: string, isFav: any) => {
  return localStorage.setItem(`fav-mid_${mid}`, JSON.stringify(isFav))
}

export const getFavorites = () => {
  const keys = Object.keys(localStorage)
  const favorites = keys.filter(key => key.includes('fav-mid_'))
  return favorites.map(key => JSON.parse(localStorage.getItem(key) || 'false'))
}