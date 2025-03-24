import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Courses from "@/components/courses";
import Aboutus from "@/components/aboutus";
import Introduction from "@/components/introduction";
export default function Home() {
  return (
   <div className="flex flex-col gap-20 md:gap-40 w-full h-full pb-10">
   <Hero/>
   <Categories/>
   <Aboutus/>
   <Courses/>
   <Introduction/>
   </div>
  );
}
