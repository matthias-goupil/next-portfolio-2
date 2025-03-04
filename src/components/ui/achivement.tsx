import React from "react";

interface IAchivementProps {
  quantity: number | string;
  text: string;
}

function Achivement({ quantity, text }: IAchivementProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-xl bg-gradient-to-r from-[#9123f8] to-[#6a2bff] text-transparent bg-clip-text">{quantity}</p>
      <p className="font-extralight">{text}</p>
    </div>
  );
}

export default Achivement;
