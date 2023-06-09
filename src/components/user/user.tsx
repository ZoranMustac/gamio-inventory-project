import React, { FC } from "react";
import "./user.css";

interface IUser {
  username: string;
  userHandle: string;
  score: number;
  image: string;
}

export const User: FC<IUser> = ({ username, userHandle, score, image }) => {
  return (
    <div className="grid-container">
      <div className="absolute md:top-10 lg:top-32 bg-blue-500 md:w-32 lg:w-48 md:h-48 lg:h-64 pt-6 clip-rectangle" />
      <div className="absolute grid-items top-12 md:top-16 lg:top-36 md:ml-12 lg:ml-24 md:flex lg:flex">
        <img src={image} className="rounded-full w-24 h-24 md:h-32 md:w-32" />
        <div className="profile grid grid-rows-2 grid-flow-col ml-6">
          <div className="text-[#143757] md:text-white xl:text-white font-bold text-lg">
            <p>{username}</p>
          </div>
          <div className="user-handle text-[#6F819C] text-xs">
            <p>{userHandle}</p>
          </div>
          <div className="text-[#4175FA] font-extrabold text-xs pl-2 pt-1">
            <p>{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
