import { Button } from ".";

const SectionHeader = ({
  featureName,
  headerTitle,
  buttonLabel,
  className = "max-w-lg lg:max-w-[819px]",
}) => {
  return (
    <div
      className={`text-center w-full flex flex-col items-center justify-center ${className} `}
    >
      <p className="gradient-text font-bold text-sm md:text-base lg:text-xl mb-4 uppercase">
        {featureName}
      </p>
      <h2 className="font-extrabold text-black-600 text-2.5xl md:text-3xl lg:text-5.5xl mb-10 mt-5 ">
        {headerTitle}
      </h2>

      <Button>{buttonLabel}</Button>
    </div>
  );
};

export default SectionHeader;
