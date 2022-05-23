export const getComments = (mid: string) => {
  return JSON.parse(localStorage.getItem(`msg-mid_${mid}`) || '[]')
}

export const postComment = (mid: string, comment: any) => {
  return localStorage.setItem(`msg-mid_${mid}`, JSON.stringify(comment))
}
