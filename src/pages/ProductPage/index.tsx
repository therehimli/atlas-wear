import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query'
import { PropagateLoader, PuffLoader } from 'react-spinners'

import { getProductHandler } from '@/api/products'
import CategoryTop from './components/CategoryTop'
import ProductImages from './components/ProductImages'
import ProductInfo from './components/ProductInfo'
import ProductCard from './components/ProductCard'
import ProductDescription from './components/ProductDescription'
import { getCommentsHandler, addCommentHandler } from '@/api/comments'
import ProductComment from './components/ProductComment'
import CommentsSection from './components/CommentsSection'
import { useKeyDown } from '@/hooks/useKeyDown'
import useUserLogin from '@/store/useUserLogin'
import useToggleModalStore from '@/store/useModalToggle'

const ProductPage = () => {
  const { id } = useParams()
  const client = useQueryClient()
  const [comment, setComment] = useState('')
  const { userLogin } = useUserLogin()
  const { toggleButton } = useToggleModalStore()

  const descriptionRef = useRef<HTMLDivElement>()
  const reviewsRef = useRef<HTMLDivElement>()
  const commentButtonRef = useRef<HTMLDivElement | null>()

  const scrollToDescription = () => descriptionRef?.current?.scrollIntoView()
  const scrollToReviews = () => reviewsRef?.current?.scrollIntoView()

  const sendCommentHandler = async () => {
    if (!userLogin.email) {
      toggleButton(1)
      return null
    }

    addComment({ id, comment })
    setComment('')
  }

  const [productQuery, commentsQuery] = useQueries({
    queries: [
      {
        queryKey: ['product'],
        queryFn: () => getProductHandler(id!),
      },
      {
        queryKey: ['comments'],
        queryFn: () => getCommentsHandler(id!),
      },
    ],
  })

  const { mutate: addComment } = useMutation({
    mutationFn: addCommentHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  useKeyDown(() => {
    if (commentButtonRef.current) {
      commentButtonRef.current.click()
    }
  }, ['Enter'])

  const { data: product } = productQuery
  const { data: comments } = commentsQuery

  if (productQuery.isLoading)
    return (
      <div className="flex items-center justify-center mt-32 mb-64">
        <PuffLoader size={100} color="#36d7b7" />
      </div>
    )
  if (commentsQuery.isLoading) return

  return (
    <div className="flex flex-col gap-5 justify-center">
      <CategoryTop product={product} />
      <div className="flex items-start justify-between gap-5">
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-start gap-10">
            <ProductImages product={product} />
            <ProductInfo
              scrollToDescription={scrollToDescription}
              scrollToReviews={scrollToReviews}
              product={product}
              comments={comments}
            />
          </div>
          <ProductDescription
            descriptionRef={descriptionRef}
            product={product}
          />
          <ProductComment
            comment={comment}
            setComment={setComment}
            onSubmit={sendCommentHandler}
            commentButtonRef={commentButtonRef}
          />
          <CommentsSection reviewsRef={reviewsRef} comments={comments} />
        </div>

        <ProductCard product={product} />
      </div>
    </div>
  )
}

export default ProductPage
