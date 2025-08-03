import Faqs from "@/components/Faqs";
import HeroWithForm from "@/components/HeroWithForm";

function page() {
  return (
    <>
      <HeroWithForm />
      <div className="flex justify-center items-center">
        <Faqs />
      </div>
    </>
  );
}

export default page;
