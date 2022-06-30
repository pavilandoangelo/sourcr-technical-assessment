const GraphBox = ({ rating }) => {
  const { percentage } = rating;
  const boxPercentage = `${percentage}%`;

  /**
   * Creating the graph box based on the rating percentage
   */
  return (
    <div className="h-[50px] w-[55px] ml-[24px] first-of-type:ml-0 rotate-180">
      <div
        className="bg-blue w-full items-center justify-center"
        style={{ height: boxPercentage }}
      ></div>
      {percentage > 0 && (
        <p
          className={`font-mulish font-semibold text-[13px] leading-[16px] text-center w-full h-full absolute rotate-180 top-[-33.333333%] ${
            percentage >= 50 ? "text-white" : "text-secondary-black"
          }`}
        >
          {boxPercentage}
        </p>
      )}
    </div>
  );
};

function GraphCommon({ ratings }) {
  return (
    <div className="flex flex-col w-[370px] mt-[16px]">
      <div className="flex flex-row w-full border-b border-b-grey-70">
        {ratings.map((rating, index) => (
          <GraphBox key={index} rating={rating} />
        ))}
      </div>
      <div className="flex flex-row w-full mt-[7px]">
        {ratings.map((rating, index) => {
          const { label, count } = rating;

          return (
            <div key={index} className="w-[55px] mr-[24px] last-of-type:mr-0">
              <p className="font-mulish font-medium text-[13px] leading-[17px] text-center text-grey-80">
                {label} <br /> ({count})
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraphCommon;
