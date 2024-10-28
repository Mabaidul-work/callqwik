import Image from "next/image";

const CompanyList = ({
  companies,
  sectionHeaderName,
  marqueeEffect,
  headerTextSizes,
}) => {
  return (
    <section className="w-full">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-24 py-10 md:py-14 lg:py-20 overflow-x-hidden">
        <h3
          className={`font-semibold text-center text-black-600 mb-6 md:mb-8 lg:mb-12 pt-3 uppercase ${headerTextSizes}`}
        >
          {sectionHeaderName}
        </h3>

        <ul
          className={`list-none flex items-center justify-center md:justify-between flex-wrap gap-6 md:gap-10 lg:gap-14 ${
            marqueeEffect && "animate-marquee"
          }`}
        >
          {companies?.map((company) => (
            <li key={company.id}>
              <Image
                src={company.icon}
                alt={company.title}
                width={200}
                height={48}
                className="lg:min-w-32 w-full h-full object-cover pb-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompanyList;
