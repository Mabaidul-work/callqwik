import { Button, UnorderedList } from ".";

const PlanCard = ({
  _id,
  planName,
  price,
  benifits,
  buttonLabel,
  isPlanActive,
  handleActivePlan,
}) => {
  return (
    <div
      className={`bg-white w-full max-w-[482px] p-5 md:p-6 lg:p-7 rounded-xl md:rounded-2xl lg:rounded-[20px] flex flex-col  gap-7 cursor-pointer ${
        isPlanActive ? "border border-primary-500" : "borde-none"
      }`}
      onClick={() => {
        handleActivePlan(_id);
      }}
    >
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-medium text-sm md:text-base lg:text-lg">
            {planName}
          </p>
          <p className="text-black-600 font-bold text-3.5xl md:text-4xl lg:text-4.5xl">
            {price}
          </p>
        </div>
        <UnorderedList listItems={benifits} />
      </div>
      <div className="w-full">
        <Button
          variant={`${isPlanActive ? "primary" : "secondary"}`}
          className={`w-full lg:w-full ${
            isPlanActive ? "border-none" : "border border-gray-100"
          }`}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
