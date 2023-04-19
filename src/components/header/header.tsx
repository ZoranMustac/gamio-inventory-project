import React, { FC, useState } from "react";
import "./header.css";
import { Cards } from "../cards/cards";
import { NavLink } from "react-router-dom";
import { Title } from "../title/title";
import { useHeader } from "./useHeader";

export const Header: FC = () => {
  const { views } = useHeader();
  const buttons: string = `
    active:border-solid
    active:border-orange-500
    active:border-b-4
    active:text-white
    hover:border-solid
    hover:border-orange-500
    hover:border-b-4
    hover:text-white
    pb-2
`;

  return (
    <div>
      <div className="w-full h-24 md:h-48 lg:h-96 bg-black relative">
        <img
          src="https://eloncdn.blob.core.windows.net/eu3/sites/74/2019/09/students-1.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="flex flex-wrap pb-12 ml-48 pl-2 forward">
          {views.map((title) => {
            return (
              <div className="ml-12 font-bold text-gray-400 text-xs forward">
                <div className={buttons}>
                  <NavLink to={title.title}>
                    <button>{title.title.toLocaleUpperCase()}</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
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
