import { usecases } from "@/constants/data";
import SectionHeader from "../ui/SectionHeader";
import Usecase from "./Usecase";

const Usecases = ({ showModal }) => {
  return (
    <section className="w-full">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 flex flex-col items-center gap-6 md:gap-10 lg:gap-16">
        <SectionHeader
          featureName="USECASES"
          headerTitle="Explore the Solutions You Can Build with CallQwik- Your 24/7 AI receptionist"
          buttonLabel="Join Waitlist"
          className=""
          showModal={showModal}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
          {usecases.map((feature) => (
            <Usecase key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usecases;
