import { authInstance } from '.'

interface IComment {
  comment: string
  id: string | undefined
}

export async function addCommentHandler(comment: IComment) {
  const { data } = await authInstance.post(`/comments`, comment)
  return data
}

export async function getCommentsHandler(productId: string) {
  const { data } = await authInstance.get(`/comments/${productId}`)
  return data
}
