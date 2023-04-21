import React, { FC, useState } from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { ItemStatus } from "./status";
import { Footer } from "./footer";
import "./cards.css";
import { IProps } from "../../Interfaces/IProps";
import Styles from "../../styles";

export const Cards: FC<IProps> = ({ title, tag, code, image }) => {
  const styles = new Styles();

  return (
    <div
      className={(() => {
        switch (tag) {
          case "claimed":
            return styles.backgroundWhite;
          case "owned":
            return styles.backgroundWhite;
          case "used":
            return styles.backgroundGray;
          default:
            return styles.backgroundShipped;
        }
      })()}
    >
      <Card
        sx={{
          width: 300,
          height: 450,
        }}
        square={true}
        style={{ backgroundColor: "transparent" }}
      >
        <div className="object-cover object-center mt-8 flex justify-center items-center">
          <CardMedia
            sx={{ height: 250, width: 250 }}
            image={
              image ??
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            }
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-8">
          <div
            className={(() => {
              switch (tag) {
                case "claimed":
                  return styles.claimedStyle;
                case "owned":
                  return styles.ownedStyle;
                case "used":
                  return styles.usedStyle;
                default:
                  return styles.shippedStyle;
              }
            })()}
          >
            {tag.toLocaleUpperCase()}
          </div>

          <div className="font-extrabold text-[#143757] line-clamp">
            {title?.toLocaleUpperCase()}
          </div>
          <Footer tag={tag} code={code} />
        </div>
      </Card>
      {/*copied ? (
        <span className="w-24 bg-lime-100 rounded font-semibold text-lime-400 text-xs p-1">
          COPIED
        </span>
      ) : null*/}
    </div>
  );
};
