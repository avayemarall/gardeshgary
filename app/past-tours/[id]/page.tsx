import TourGallery from "@/components/layout/tourGallery";
import { FC } from "react";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return [{ id: "1" }];
}

const Page: FC<PageProps> = () => {
  return (
    <TourGallery
      images={[
        "https://picsum.photos/800/400?random=1",
        "https://picsum.photos/800/400?random=2",
        "https://picsum.photos/800/400?random=3",
        "https://picsum.photos/800/400?random=4",
      ]}
      title="تور حافظ گردی"
      description="یک تجربه فوق‌العاده کنار آرامگاه حافظ."
      autoPlayInterval={4000}
    />
  );
};

export default Page;