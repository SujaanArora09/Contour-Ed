import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contour Education",
  description: "This is assignment submitted by sujaan",
};

export default function Home() {
  return (
    <main>
      <Hero />
      
    </main>
  );
}
