import ChatAndCallfeatures from "./ChatAndCallfeatures";
import SalesAndCrmFeatures from "./SalesAndCrmFeatures";
import Usecases from "./Usecases";

const WorkingSteps = ({showModal}) => {
  return (
    <div className="w-full">
      <ChatAndCallfeatures showModal={showModal} />
      <SalesAndCrmFeatures showModal={showModal} />
      <Usecases showModal={showModal} />
    </div>
  );
};

export default WorkingSteps;
