import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const AllAboutTendons = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen pt-6 pb-6 flex flex-col items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse flex-wrap content-around">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">What are tendons?</h1>
            <p className="py-6">
              Tendons are strong, flexible bands of fibrous connective tissue.
              They serve as the link between muscle and bone, allowing muscles
              to transmit force and generate movement. When a muscle contracts,
              the force is channeled through the tendon, pulling on the bone and
              enabling motion. Tendons also have an important role in storing
              and releasing elastic energy, functioning like springs that
              enhance the efficiency of movements such as running, jumping, and
              lifting.
            </p>
          </div>
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-1/2">
            <form className="card-body">
              <Image
                className="self-center"
                src="/../tendon.svg"
                width={180}
                height={37}
                alt="tendon connects muscle to bone"
                priority
              />
            </form>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-1/2">
            <form className="card-body">
              <Image
                className="self-center"
                src="/../muscle-fiber.svg"
                width={180}
                height={37}
                alt="tendon connects muscle to bone"
                priority
              />
            </form>
          </div>
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Anatomy of Tendons</h1>
            <p className="py-6">
              Tendons are made up of tightly packed bundles of collagen fibers,
              which you can think of as bundles of spaghetti noodles. These
              fibers are all lined up in the same direction, making tendons
              strong and flexible. However, in compromised tendons, such as
              those affected by injury or overuse, the &quot;noodles&quot; can
              become misaligned, leading to a weakened structure and reduced
              ability to handle stress.
            </p>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Managing Tendon Stress</h1>
            <p className="py-6">
              Tendinopathy and tendonitis occur when the stress on a tendon
              exceeds its ability to recover. When this happens, it is crucial
              to reduce activities that cause pain and focus on rehabilitation
              exercises. Intense, 7/10 contraction intensity exercises, such as
              isometric holds and slow, controlled eccentric movements can help
              promote tendon collagen synthesis and aid in recovery. After
              constant loading of the tendon, you can rehabilitate your tendon
              to 100%.
            </p>
          </div>
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-1/2">
            <form className="card-body">
              <Image
                className="self-center"
                src="/../painful.svg"
                width={180}
                height={37}
                alt="tendon connects muscle to bone"
                priority
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Knee Rehab - All About Tendons!",
  description: "Learn all about tendons!",
};

export default AllAboutTendons;
