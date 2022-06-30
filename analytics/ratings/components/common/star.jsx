import StarRating from "../../../common/components/star";

function StarCommon({ rating }) {
  const { overall, numberOfReviews } = rating;

  return (
    <div className="flex flex-row mt-[16px]">
      <div className="flex flex-row">
        <StarRating overall={overall} />
      </div>
      <p className="font-mulish font-medium text-[14px] leading-[16px] ml-[8px] text-grey-80">
        {`(${overall} rating based on ${numberOfReviews} reviews)`}
      </p>
    </div>
  );
}

export default StarCommon;
