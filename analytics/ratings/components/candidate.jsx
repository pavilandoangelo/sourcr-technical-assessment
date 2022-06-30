import GraphCommon from "./common/graph";
import StarCommon from "./common/star";

function CandidateRating() {
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
        percentage: 10,
      },
      {
        id: 5,
        label: "5 star",
        count: 9,
        percentage: 90,
      },
    ],
  };

  const { ratings, ...rest } = data;

  return (
    <div className="flex flex-col w-full mt-[24px] bg-white p-[24px] rounded shadow-box-content">
      <div className="flex flex-row">
        <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
          Candidate Ratings
        </p>
      </div>
      <StarCommon rating={rest} />
      <GraphCommon ratings={ratings} />
    </div>
  );
}

export default CandidateRating;
