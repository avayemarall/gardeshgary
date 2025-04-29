import Hero from "@/components/layout/hero";
import Courses from "@/components/layout/oldtours";
import Aboutus from "@/components/layout/aboutus";
import CurrentTours from "@/components/layout/currentTours";
import OldTours from "@/components/layout/oldtours";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40 w-full h-full pb-10 text-txt-color">  
      <Hero />
      <CurrentTours />
      <Aboutus />
      <OldTours />
    </div>
  );
}
