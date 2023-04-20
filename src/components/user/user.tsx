import React, { FC } from "react";

interface IUser {
  username: string;
  userHandle: string;
  score: number;
}

export const User: FC<IUser> = ({ username, userHandle, score }) => {
  return (
    <div>
      <div className="absolute top-44 bg-blue-500 w-48 h-64 pt-6 bg-contain pl-12 clip-rectangle" />
      <div className="absolute top-52 ml-24 flex">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          className="rounded-full h-32 w-32"
        />
        <div className="grid grid-rows-2 grid-flow-col ml-6 grid-items">
          <div className="text-white font-bold text-lg">
            <p>{username}</p>
          </div>
          <div className="text-gray-500 text-xs">
            <p>{userHandle}</p>
          </div>
          <div className="text-blue-500 font-extrabold text-xs pl-2 pt-1">
            <p>{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
