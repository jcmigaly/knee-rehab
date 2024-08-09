"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  id: number;
  label: string;
  image: string;
  message: string;
  onSelect: (id: number, isSelected: boolean) => void;
}

const Card = ({ id, label, image, message, onSelect }: Props) => {
  const [selected, setSelected] = useState(false);

  //   const handleClick = () => {
  //     setSelected((prevSelected) => {
  //       const newSelected = !prevSelected;
  //       console.log(newSelected);
  //       onSelect(id, newSelected);
  //       return newSelected;
  //     });
  //   };

  const handleClick = () => {
    const newSelected = !selected; // Toggle the selected state
    setSelected(newSelected); // Update the local state
    onSelect(id, newSelected); // Notify the parent of the selection change
  };

  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl transition duration-500 hover:scale-105${
        selected
          ? "selected scale-110 border-1px border-rose-700 border-solid "
          : ""
      }`}
      onClick={handleClick}
    >
      {/* <figure>{<img src={image} alt="Shoes" />}</figure> */}
      <Image
        className="self-center"
        src={image}
        width={180}
        height={37}
        alt={label}
        priority
      />
      <div className="card-body">
        <h2 className="card-title">{label}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
