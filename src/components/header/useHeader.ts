import { useState } from "react";

export const useHeader = () => {
  const [title, setTitle] = useState("");

  const views = [
    {
      title: "Overview",
    },
    {
      title: "Inventory",
    },
    {
      title: "Settings",
    },
  ];

  return {
    title,
    views,
  };
};
