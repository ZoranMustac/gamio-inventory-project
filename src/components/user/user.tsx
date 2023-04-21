import React, { FC } from "react";
import "./user.css";

interface IUser {
  username: string;
  userHandle: string;
  score: number;
}

export const User: FC<IUser> = ({ username, userHandle, score }) => {
  return (
    <div>
      <div className="absolute md:top-10 lg:top-32 bg-blue-500 md:w-32 lg:w-48 md:h-48 lg:h-64 pt-6 pl-12 clip-rectangle" />
      <div className="absolute top-12 md:place-content-center sm:grid md:top-16 lg:top-36 md:ml-12 lg:ml-24 md:flex lg:flex center">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          className="rounded-full w-24 h-24 md:h-32 md:w-32"
        />
        <div className="grid grid-rows-2 grid-flow-col ml-6 grid-items">
          <div className="sm:text-gray-900 md:text-white xl:text-white font-bold text-lg">
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
