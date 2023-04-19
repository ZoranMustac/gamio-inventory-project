import React, { FC } from "react";
import { Card } from "@mui/material";

interface IProps {
  image: string;
  name: string;
  tag: string;
  level: number;
}

export const Cards: FC<IProps> = ({ name, tag, level }) => {
  return (
    <div>
      <Card />
      <p>Gamio</p>
    </div>
  );
};
