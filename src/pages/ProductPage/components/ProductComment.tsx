import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductCommentProps {
  comment: string
  setComment: (comment: string) => void
  onSubmit: () => void
  commentButtonRef: any
}

const ProductComment: FC<ProductCommentProps> = ({
  comment,
  onSubmit,
  setComment,
  commentButtonRef,
}) => {
  const { t } = useTranslation()

  return (
    <div className="w-full flex items-center gap-3">
      <input
        className="w-full outline-none border-2 rounded-full p-4 text-[17px]"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={onSubmit}
        ref={commentButtonRef}
        className="p-3 bg-[#7092FF] rounded-full text-white font-thin"
      >
        {t('send')}
      </button>
    </div>
  )
}

export default ProductComment
