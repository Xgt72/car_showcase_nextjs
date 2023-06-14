"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        type={btnType || "button"}
        disabled={false}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
