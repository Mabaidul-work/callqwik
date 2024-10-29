import { chatAndCallFeatures } from "@/constants/data";
import { Feature } from "../ui";
import SectionHeader from "../ui/SectionHeader";

const ChatAndCallfeatures = ({ showModal }) => {
  return (
    <section className="w-full">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 flex flex-col items-center gap-6 md:gap-10 lg:gap-16">
        <SectionHeader
          featureName="CHAT & CALL FEATURES"
          headerTitle="Automate Chats & Calls Using CallQwik AI"
          buttonLabel="Join Waitlist"
          showModal={showModal}
        />

        <div className="flex flex-col gap-9 md:gap-16 lg:gap-24">
          {chatAndCallFeatures.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatAndCallfeatures;
