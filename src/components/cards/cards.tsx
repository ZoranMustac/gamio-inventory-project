import React, { FC } from "react";
import { Card } from "@mui/material";

interface IProps {
  image: string;
  title: string;
  tag: string;
  code?: string;
  buttonText?: string;
}

export const Cards: FC<IProps> = ({ title, tag, code, image, buttonText }) => {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-gray-400">Inventory</h1>
      <Card>{title}</Card>
      <p>Gamio</p>
    </div>
  );
};
