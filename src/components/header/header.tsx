import React, { FC, useState } from "react";
import "./header.css";
import { User } from "../user/user";
import { NavLink } from "react-router-dom";
import { useHeader } from "./useHeader";

export const Header: FC = () => {
  const { views } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);

  const buttons: string = `
    hover:border-solid
    hover:border-orange-500
    hover:border-b-4
    hover:text-white
    pb-2
`;

  const active: string = `
    active:border-solid
    active:border-orange-500
    active:border-b-4
    active:text-white
`;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="w-full h-24 md:h-48 lg:h-96 bg-black relative">
        <img
          src="https://eloncdn.blob.core.windows.net/eu3/sites/74/2019/09/students-1.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="flex flex-wrap pb-12 ml-48 pl-2 forward">
          {views.map((title, index) => {
            return (
              <div className="ml-12 font-bold text-gray-400 text-xs forward">
                <div className={buttons}>
                  <NavLink to={title.title}>
                    <button
                      style={{
                        borderBottomColor:
                          index === activeIndex ? `border-orange-500` : "",
                      }}
                      onClick={() => handleClick(index)}
                    >
                      {title.title.toLocaleUpperCase()}
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <User username="GUD BOI" userHandle="@GUDBOI45" score={24} />
    </div>
  );
};
