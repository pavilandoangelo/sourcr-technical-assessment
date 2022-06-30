import GraphCommon from "./common/graph";
import StarCommon from "./common/star";

function EmployerRating() {
  const data = {
    overall: 4.9,
    numberOfReviews: 20,
    ratings: [
      {
        id: 1,
        label: "1 star",
        count: 0,
        percentage: 0,
      },
      {
        id: 2,
        label: "2 star",
        count: 0,
        percentage: 0,
      },
      {
        id: 3,
        label: "3 star",
        count: 0,
        percentage: 0,
      },
      {
        id: 4,
        label: "4 star",
        count: 1,
        percentage: 2.5,
      },
      {
        id: 5,
        label: "5 star",
        count: 39,
        percentage: 97.5,
      },
    ],
  };

  const { ratings, ...rest } = data;

  return (
    <div className="flex flex-col w-full mt-[24px] bg-white p-[24px] rounded shadow-box-content">
      <div className="flex flex-row justify-between">
        <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
          Employer Ratings
        </p>
        <div className="flex flex-row items-center">
          <p className="font-mulish font-medium text-[14px] leading-[18px] text-primary-black">
            All categories
          </p>
          <span className="ml-[5px]">
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.24219 5.24219L9.48437 1"
                stroke="#11283C"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <StarCommon rating={rest} />
      <GraphCommon ratings={ratings} />
    </div>
  );
}

export default EmployerRating;
