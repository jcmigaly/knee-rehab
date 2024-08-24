"use client";
import React from "react";
import { useState } from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

export default function CardPage() {
  const [SelectedIds, setSelectedIds] = useState<number[]>([]);
  const router = useRouter();

  const handleCardSelection = (id: number, isSelected: boolean) => {
    setSelectedIds((prevIds: number[]) => {
      if (prevIds.includes(id)) {
        console.log(prevIds.filter((cardId) => cardId !== id));
        return prevIds.filter((cardId) => cardId !== id);
      } else {
        console.log([...prevIds, id]);
        return [...prevIds, id];
      }
    });
  };

  return (
    <>
      <Head>
        <title>Knee Rehab</title>
        <meta name="description" content="Get your knee rehab program" />
      </Head>
      <div className="hero bg-base-200 min-h-screen items-start">
        <div className="hero-content text-center mt-3 space-x-6 w-full">
          <div className="w-8/12 flex flex-col">
            <form action="">
              <h1 className="text-5xl font-bold">Where does your knee hurt?</h1>
              <p className="py-6">Select any area(s)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-fr max-w-full justify-around gap-10">
                <Card
                  id={1}
                  label="Behind Knee"
                  image="/hamstring.svg"
                  message="Distal hamstring tendons, pain with knee flexion."
                  onSelect={handleCardSelection}
                />
                <Card
                  id={2}
                  label="Below Knee"
                  image="/patellar.svg"
                  message="Patellar tendon, pain with knee extension."
                  onSelect={handleCardSelection}
                />
                <Card
                  id={3}
                  label="Above Knee"
                  image="/quad.svg"
                  message="Quadricep tendon, pain with knee extension."
                  onSelect={handleCardSelection}
                />
              </div>
              <Link
                href={{
                  pathname: "/rehab",
                  query: { SelectedIds: SelectedIds.sort().join("") },
                }}
                className={`btn btn-primary btn-lg btn-error mt-10 self-center sm:translate-x-2m ${
                  SelectedIds.length === 0 ? "pointer-events-none" : ""
                }`}
              >
                Return To Play!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
