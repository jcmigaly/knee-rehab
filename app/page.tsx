import CardPage from "./CardPage";
import { Metadata } from "next";

export default function Home() {
  return <CardPage></CardPage>;
}

export const metadata: Metadata = {
  title: "Knee Rehab",
  description: "Generate your knee rehab program",
};
