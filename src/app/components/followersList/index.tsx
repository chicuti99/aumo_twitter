import { followerMenu, User } from "@/app/interfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const FollowersList = ({ setFollowersList, usersFollowed, UnfollowUser }: followerMenu) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 0); 
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        justifyContent: "space-between",
        width: "18%",
        height: "fit-content",
        transform: visible ? "translate(0px, 50px)" : "translate(0px, 40px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="max-w-md px-4 py-2 bg-gray-100 rounded-lg shadow-md"
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#9760F3",
          fontWeight: "bolder",
          alignItems: "center",
        }}
      >
        following {usersFollowed.length} users
        <IoClose color="black" cursor="pointer" onClick={() => setFollowersList(false)} />
      </span>

      {usersFollowed.map((user: User) => (
        <div key={user.login.uuid} className="flex justify-between my-2">
          <Image
            src={user.picture.thumbnail}
            alt="Profile picture"
            width={0}
            height={0}
            className="rounded-full"
            style={{ width: 30, height: 30 }}
          />

          <div className="flex flex-col items-start ml-4">
            <span className="text-gray-800 font-semibold">{`${user.name.first} ${user.name.last}`}</span>
            <span className="text-sm text-gray-500">{`${user.location.city}, ${user.location.country}`}</span>
          </div>

          <button
            className="px-[10px] py-[5px] text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => UnfollowUser(user)}
          >
            Unfollow
          </button>
        </div>
      ))}
    </div>
  );
};
