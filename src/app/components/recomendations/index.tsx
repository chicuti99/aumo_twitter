import { RecommendationProps } from "@/app/interfaces"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Recomendations = ({user,usersFollowed,followUser,UnfollowUser}:RecommendationProps)=> {
  const[isFollowed,setIsFollowed] = useState(false);

  useEffect(() => {
    setIsFollowed(usersFollowed.some((use) => use === user))
  },[user,usersFollowed]);

    return(
        <>
              <div
                  style={{
                    width: 200,
                    height: 220,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 10
                  }}
                >
          <Image
            src={user.picture.thumbnail}
            width={0}
            height={0}
            alt="photo"
            className="w-[60px] h-[60px] rounded-full py-[5px]"
          />
          <span>{user.name.first + " "+ user.name.last}</span>
          <span className="text-gray-500 text-sm">@{user.login.username}</span>
          <span className="text-center text-xs text-gray-700 break-words max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut.
          </span>
              {!isFollowed ? (
                <>
                    <button className="bg-blue-500 text-white px-[5px] py-[10px] text-xs rounded" 
                onClick={() => followUser(user)}>follow</button>
                </>
              ) : (
                <>
                  <button className="bg-red-500 text-white px-[5px] py-[10px] text-xs rounded" 
                    onClick={() => UnfollowUser(user)}>unfollow</button>
                </>
              )}

        </div>
        </>
    )
}