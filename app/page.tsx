import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Features} from "./components/Features";
import Image from "next/image";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features/>
      <FAQ/>
      <Pricing/>
    </div>
    </>
  );
}
