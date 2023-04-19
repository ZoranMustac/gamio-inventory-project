import { useEffect, useState } from "react";

export const useHeader = () => {
  const params = window.location.href;
  const paramTitle = params.toString().split("/")[3];

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

  useEffect(() => {
    setTitle(paramTitle);
  }, [paramTitle]);

  console.log("param", title);

  return {
    title,
    views,
  };
};
