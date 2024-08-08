"use client";
import React, { useState } from "react";

interface Props {
  id: string;
  label: string;
  image: string;
  onSelect: (id: string, isSelected: boolean) => void;
}

const Card = ({ id, label, image, onSelect }: Props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevSelected) => {
      const newSelected = !prevSelected;
      console.log(newSelected);
      onSelect(id, newSelected);
      return newSelected;
    });
  };

  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl transition duration-500 sm:hover:scale-105${
        selected
          ? "selected sm:scale-110 border-1px border-rose-700 border-solid "
          : ""
      }`}
      onClick={handleClick}
    >
      <figure>{<img src={image} alt="Shoes" />}</figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Card;
