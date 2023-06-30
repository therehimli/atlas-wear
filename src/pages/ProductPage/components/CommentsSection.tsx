import { FC } from 'react'
import Moment from 'react-moment'
import 'moment/locale/ru'

import { commentType } from '@/types/commentType'

interface CommentsSectionProps {
  comments: commentType[]
  reviewsRef: any
}

const CommentsSection: FC<CommentsSectionProps> = ({
  comments,
  reviewsRef,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {comments.map((comment) => (
        <div
          ref={reviewsRef}
          className="p-4 border-2 rounded-full w-full flex items-center gap-5"
          key={comment._id}
        >
          {comment.owner.avatar ? (
            <img
              className="w-[80px] h-[80px] rounded-full"
              src={`http://localhost:4000/uploads/images/${comment.owner.avatar}`}
              alt="user image"
            />
          ) : (
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="http://localhost:4000/uploads/images/defaultuser.jpeg"
              alt="default"
            />
          )}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <p className="text-black font-semibold">{comment.owner.name}</p>
              <Moment
                className="text-[12px] text-neutral-400"
                format="LL"
                parse="YYYY-MM-DD HH:mm"
                locale={localStorage.getItem('i18nextLng') || ''}
              >
                {comment.createdAt}
              </Moment>
            </div>
            <p className="text-[16px]">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentsSection
