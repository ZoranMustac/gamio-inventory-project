import React, { FC, useEffect, useState } from "react";
import { Cards } from "./cards";
import arrayItems from "../../arrayItmes";
import { IInventory } from "../../Interfaces/IInventory";
import { IProps } from "../../Interfaces/IProps";
import "./cards.css";

export const ItemCards: FC = () => {
  return (
    <div>
      <h1 className="font-extrabold text-gray-700 mt-32 mb-6 title">
        INVENTORY
      </h1>
      <div className="flex flex-wrap gap-8 mb-16">
        {arrayItems?.items.map((item) => (
          <Cards
            image={item.image}
            title={item.title}
            tag={item.tag}
            code={item.code}
          />
        ))}
      </div>
    </div>
  );
};
