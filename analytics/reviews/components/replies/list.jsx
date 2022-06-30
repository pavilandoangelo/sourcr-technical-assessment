import StarRating from "../../../common/components/star";

const ListItem = ({ review }) => {
  const { name, position, reviewer, rating, date, comment, reviewerRole } =
    review;

  return (
    <div className="group flex flex-row border-b border-b-grey-40 last-of-type:border-b-0">
      <div className="flex flex-row px-[24px] py-[16px] group-first-of-type:pt-0">
        <div className="flex flex-col justify-center">
          <p className="font-mulish font-bold text-[16px] leading-[16px] w-max text-primary-black">
            {reviewer} ({reviewerRole})
          </p>
          <p className="font-mulish font-medium text-[14px] leading-[14px] text-grey-90 mt-[6px]">
            {position}
          </p>
          <p className="font-mulish font-normal text-[12px] leading-[13px] text-grey-70 mt-[8px]">
            {name}
          </p>
        </div>
        <div className="flex flex-col justify-center ml-[55px]">
          <div className="flex flex-row items-center w-max">
            <div className="flex flex-row">
              <StarRating overall={rating} />
            </div>
            <p className="font-mulish font-normal text-[13px] leading-[16px] text-grey-60 ml-[8px]">
              {date}
            </p>
          </div>
          <p className="font-mulish font-medium text-[14px] leading-[18px] text-primary-black mt-[4px]">
            {comment}
          </p>
        </div>
        <div className="flex flex-row items-center ml-[177px]">
          <button className="flex flex-row items-center justify-center shadow-box-content rounded border-secondary-pink border w-[61px] h-[36px]">
            <span className="font-mulish font-bold text-center uppercase text-[12px] leading-[15px] tracking-[0.3px] text-secondary-pink">
              REPLY
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

function List({ list }) {
  return (
    <div className="flex flex-col w-full mt-[33px]">
      {list.length > 0 &&
        list.map((review, index) => <ListItem key={index} review={review} />)}
    </div>
  );
}

export default List;
