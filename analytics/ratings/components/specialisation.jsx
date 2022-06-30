function SpecialisationRating() {
  return (
    <div className="flex flex-col w-full mt-[24px] bg-white p-[24px] rounded shadow-box-content">
      <div className="flex flex-row justify-between">
        <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
          Specialisation Ratings Ratings
        </p>
        <div className="flex flex-row items-center">
          <p className="font-mulish font-medium text-[14px] leading-[18px] text-primary-black">
            Overall Ratings
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
      <div className="flex flex-row items-center mt-[25px]">
        <p className="font-mulish font-medium text-[14px] leading-[18px] text-primary-black">
          Digital
        </p>
        <div className="w-[309px] h-[18px] bg-grey-40 rounded-full ml-[18px]">
          <div className="bg-blue h-full w-[292px] rounded-full flex justify-end items-center">
            <p className="font-mulish font-semibold text-[12px] leading-[16px] text-white pr-[9px]">
              4.9 stars (20)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialisationRating;
