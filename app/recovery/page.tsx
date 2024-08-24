import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const RecoveryTime = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen pt-6 pb-6 flex flex-col items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse flex-wrap content-around">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-2xl sm:text-5xl font-bold">
              Tendon Recovery Time
            </h1>
            <p className="py-6">
              Tendon remodeling typically takes 8-12 weeks before noticeable
              improvements. To support this process, consistently load the
              tendon 2-3 times a week with intense isometric or slow, controlled
              eccentric movements. This means that you MUST progress your
              exercises as they get too easy. Remember, it is okay to train with
              up to 3/10 pain, but pain levels should return to baseline 24
              hours after the rehab session. It is also normal to have flairs of
              tendon pain, but as long as your tendon pain is decreasing on
              average as you continue, you are headed in the right direction!
            </p>
          </div>
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-1/2">
            <form className="card-body">
              <Image
                className="self-center"
                src="/../graph.svg"
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
                src="/../sleep.svg"
                width={180}
                height={37}
                alt="tendon connects muscle to bone"
                priority
              />
            </form>
          </div>
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-2xl sm:text-5xl font-bold">
              Lifestyle Factors
            </h1>
            <p className="py-6">
              Ensure you are getting 8-10 hours of sleep each night, engaging in
              light locomotion such as walking for 30 minutes to an hour daily,
              and maintaining healthy social interactions. Enjoy life! Also make
              sure your diet consists of 0.8 grams of protein per pound of your
              bodyweight in addition to healthy carbs, fruits and veggies.
            </p>
          </div>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-2xl sm:text-5xl font-bold">
              Collagen Supplementation
            </h1>
            <p className="py-6">
              To further optimize recivery, consider taking a collagen
              supplement about 45 minutes before training. Research shows that
              collagen synthesis occurs during the training session, and having
              collagen in your blood can help incorporate it into the tendon
              more efficiently. I recommend{" "}
              <Link
                className="underline"
                href={"https://uenutrition.com/products/collagen"}
              >
                this
              </Link>{" "}
              supplement.
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
  title: "Knee Rehab - Recovery Time",
  description: "Learn about how to optimize tendon recovery",
};

export default RecoveryTime;
