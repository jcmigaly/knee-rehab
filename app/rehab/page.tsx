import React from "react";
import prisma from "@/prisma/client";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  searchParams: { SelectedIds: string };
}

const RehabPage = async ({ searchParams: { SelectedIds } }: Props) => {
  let [hamstring, patellar, quad] = SelectedIds.split("")
    .filter(Boolean)
    .map(Number);

  hamstring = hamstring || 0;
  patellar = patellar || 0;
  quad = quad || 0;

  let exercises: any[] = [];

  console.log(hamstring);
  console.log(patellar);
  console.log(quad);

  exercises = await prisma.exercise.findMany({
    where: {
      bodyPartId: {
        in: [hamstring, patellar, quad, 4, 5, 6],
      },
    },
  });

  console.log(exercises);

  return (
    <div className="overflow-x-auto bg-base-200 min-h-screen">
      <div className="rounded-md bg-base-100 m-3">
        <table className="table table-auto bg-base-0 whitespace-normal break-all">
          {/* head */}
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Set/Rep Scheme</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((part) => (
              <tr key={part.name} className="hover">
                <td>{part.name}</td>
                <td>{part.setRepScheme}</td>
                <td className="whitespace-normal break-words">
                  {part.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div role="alert" className="alert alert-error overflow-x-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Do this rehab session 3 times a week, ensuring that you never do a
          session on back-to-back days. For example, a good schedule would be to
          do this Monday, Wednesday, Friday. Read the{" "}
          <Link className="underline" href={"/../about"}>
            All About Tendons!
          </Link>{" "}
          and{" "}
          <Link className="underline" href={"/../recovery"}>
            Recovery Time
          </Link>{" "}
          pages to fully understand what you are embarking on.
        </span>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Knee Rehab Program",
  description: "Your rehab program",
};

export default RehabPage;
