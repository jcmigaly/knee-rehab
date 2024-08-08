"use client";
import Card from "./Card";
// import Hamstring from "./assets/hamstring.svg";
// import Patellar from "./assets/hamstring.svg";
// import Quad from "./assets/hamstring.svg";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen items-start">
        <div className="hero-content text-center mt-3 space-x-6 w-full">
          <div className="w-8/12">
            <h1 className="text-5xl font-bold">Where does your knee hurt?</h1>
            <p className="py-6">Select any area(s)</p>
            <div className="grid grid-cols-1 gap-y-10 sm:flex max-w-full justify-around gap-10">
              <Card
                id="1"
                label="shoes"
                image="./public/hamstring.svg"
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
              <Card
                id="2"
                label="shoes"
                image="./public/patellar.svg"
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
              <Card
                id="3"
                label="shoes"
                image="./public/quad.svg"
                onSelect={(id: string, isSelected: boolean) => console.log(id)}
              />
            </div>
            <button className="btn btn-primary mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
