import React, {useState, useEffect}from 'react'
import {
  MoreHorizontal,
  Heart,
  Repeat,
  MessageCircle,
  Send,
} from "react-feather";
const Thread = ({thread}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    }, [])

  return (
    <div>
      <div className="flex ">
        <img
          className="rounded-full w-10 h-10"
          src="extra/images (1).jpeg"
          alt=""
        />
        <div className="w-full px-2">
          <div className="flex justify-between gap-2 w-full items-center">
            <strong>{thread.owner_id}</strong>

            <div className="flex justify-between gap-2">
              <p className="text-[rgba(97,97,97,1)]">5h</p>
              <MoreHorizontal />
            </div>
          </div>
          <div className="py-4 text-white" >
            {thread.body}

            
        </div>
          <div className="flex gap-4 py-4">
            <Heart />
            <MessageCircle />
            <Repeat />
            <Send />
          </div>
          <div className="flex gap-4 text-[rgba(97,97,97,1)] py-4">
            <p>Replies 5</p>
            <p>.</p>
            <p>87 Likes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thread
