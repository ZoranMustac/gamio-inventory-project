import React, { FC } from "react";
import "./css/header.css";

export const Header: FC = () => {
  return (
    <div>
      <div className="w-full h-24 md:h-48 lg:h-96 bg-black flex">
        <img
          src="https://eloncdn.blob.core.windows.net/eu3/sites/74/2019/09/students-1.jpg"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div>
        <div className="ml-56 font-bold text-gray-400 text-sm flex flex-nowrap pr-6">
          <button>OVERVIEW</button>
          <button>INVENTORY</button>
          <button>SETTINGS</button>
        </div>
      </div>
      <div>
        <div className="absolute top-44 bg-blue-500 w-48 h-64 pt-6 bg-contain pl-12 clip-rectangle" />
        <div className="absolute top-52 ml-24 flex">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            className="rounded-full h-32 w-32"
          />
          <div className="grid grid-rows-2 grid-flow-col ml-6 grid-items">
            <div className="text-white font-bold text-lg">
              <p>GUD BOI</p>
            </div>
            <div className="text-gray-500 text-xs">
              <p>@GUDBOI45</p>
            </div>
            <div className="text-blue-500 font-extrabold text-xs pl-2 pt-1">
              <p>24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
