import React, { FC, useState } from "react";
import "./header.css";
import { User } from "../user/user";
import { NavLink } from "react-router-dom";
import { useHeader } from "./useHeader";
import Styles from "../../styles";

export const Header: FC = () => {
  const { views } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);

  const styles = new Styles();

  const isActive = (index: number) => index === activeIndex;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="w-full h-24  md:h-48 lg:h-80 bg-black relative">
        <img
          src="https://eloncdn.blob.core.windows.net/eu3/sites/74/2019/09/students-1.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="flex flex-wrap pb-12 md:ml-36 lg:ml-48 pl-2 aligning">
          {views.map((title, index) => {
            return (
              <div className="md:ml-12 font-bold text-gray-400 text-xs forward">
                <div
                  className={
                    isActive(index) ? styles.activeButton : styles.buttons
                  }
                >
                  <NavLink to={title.title}>
                    <button onClick={() => handleClick(index)}>
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
      <div className="line" />
    </div>
  );
};
