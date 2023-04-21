import React, { FC, useEffect, useState } from "react";
import { Cards } from "./cards";
import arrayItems from "../../arrayItmes";
import { IInventory } from "../../Interfaces/IInventory";
import { IProps } from "../../Interfaces/IProps";

export const ItemCards: FC = () => {
  return (
    <div>
      <h1 className="font-bold text-gray-700 mb-6">INVENTORY</h1>
      <div className="flex flex-wrap gap-8">
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
