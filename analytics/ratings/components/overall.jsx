import StarCommon from "./common/star";

function OverallRating() {
  const rating = {
    overall: 4.9,
    numberOfReviews: 20,
  };

  return (
    <div className="flex flex-col w-full h-[98px] shadow-box-content rounded bg-white p-[24px]">
      <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
        Awesome! Your overall rating is <strong>{rating.overall}</strong>
      </p>
      <StarCommon rating={rating} />
    </div>
  );
}

export default OverallRating;
