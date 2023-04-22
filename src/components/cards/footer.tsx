import React, { FC, useState } from "react";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IProps } from "../../Interfaces/IProps";

export const Footer: FC<IProps> = ({ tag, code }) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  if (tag === "shipped") {
    return null;
  }

  return (
    <div>
      {tag === "claimed" || tag === "used" ? (
        <div className="flex border w-64 rounded p-2 codeText mt-2 code-button">
          <div className="mr-1 text-[#495967]">
            <QrCode2Icon />
          </div>
          <div className="mr-2 text-[12px] font-bold text-[#495967] mt-1">
            <p>CODE</p>
          </div>
          <input
            className="ml-2 mr-2 truncate font-semibold text-gray-500 bg-transparent"
            disabled
            value={code?.toLocaleUpperCase()}
            onChange={(e) => setText(e.target.value)}
          />
          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <button className="text-[#495967]">
              <ContentCopyIcon />
            </button>
          </CopyToClipboard>
        </div>
      ) : (
        <div className="drop-shadow-xl code-button mt-2">
          <button className="bg-blue-500 w-56 text-white rounded py-2 font-semibold text-xs">
            ORDER SHIPPING
          </button>
        </div>
      )}
      {/*copied ? (
        <span className="w-24 bg-lime-100 rounded font-semibold text-lime-400 text-xs p-1">
          COPIED
        </span>
      ) : null*/}
    </div>
  );
};
