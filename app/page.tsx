"use client";
import Card from "./Card";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen items-start">
        <div className="hero-content text-center mt-3 space-x-6 w-full">
          <div className="w-8/12 flex flex-col">
            <h1 className="text-5xl font-bold">Where does your knee hurt?</h1>
            <p className="py-6">Select any area(s)</p>
            <div className="grid grid-cols-1 gap-y-10 sm:flex max-w-full justify-around gap-10">
              <Card
                id="1"
                label="Behind Knee"
                image="/hamstring.svg"
                message="Distal hamstring tendons, pain with knee flexion."
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
              <Card
                id="2"
                label="Below Knee"
                image="/patellar.svg"
                message="Patellar tendon, pain with knee extension."
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
              <Card
                id="3"
                label="Above Knee"
                image="/quad.svg"
                message="Quadricep tendon, pain with knee extension."
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
            </div>
            <button className="btn btn-primary btn-lg btn-error mt-10 self-center sm:translate-x-2">
              Return To Play!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
