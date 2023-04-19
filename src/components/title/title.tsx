import { FC } from "react";

export const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mt-20">
      <h1>{title}</h1>
    </div>
  );
};
