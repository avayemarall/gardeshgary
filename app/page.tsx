import Hero from "@/components/layout/hero";
import Courses from "@/components/layout/courses";
import Aboutus from "@/components/layout/aboutus";
import Introduction from "@/components/layout/introduction";
import Departemencard from "@/components/ui/departemencard";
import DepartmentsList_home from "@/components/layout/departmentsList_home";
export default function Home() {
 
  return (
   <div className="flex flex-col gap-20 md:gap-40 w-full h-full pb-10">
   <Hero/>
   <DepartmentsList_home/>
   <Introduction/>
   <Courses/>
   <Aboutus/>
   </div>
  );
}
