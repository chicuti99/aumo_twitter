import { RecommendationProps, User } from "@/app/interfaces"
import Image from "next/image"

export const Recomendations = ({login,picture,name}:RecommendationProps)=> {
    return(
        <>
              <div
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 10
                  }}
                >
          <Image
            //src="/lego.jpg"
            src={picture.thumbnail}
            width={0}
            height={0}
            alt="photo"
            className="w-[30px] h-[30px] rounded-full py-[10px]"
          />
          <span>{name.first + name.last}</span>
          <span className="text-gray-500 text-sm">@{login.username}</span>
          <span className="text-center text-xs text-gray-700 break-words max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut.
          </span>
          <button className="bg-blue-500 text-white px-[5px] py-[5px] text-xs rounded">Follow</button>
        </div>
        </>
    )
}