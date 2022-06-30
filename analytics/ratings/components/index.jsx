import CandidateRating from "./candidate";
import EmployerRating from "./employer";
import OverallRating from "./overall";
import SpecialisationRating from "./specialisation";

function Ratings() {
  return (
    <div className="flex flex-col w-[417px] mt-[16px] ml-[24px]">
      <div className="flex flex-row justify-end mb-[16px]">
        <div className="flex flex-row items-center">
          <p className="font-mulish font-medium text-[14px] leading-[18px] text-primary-black">
            Agency
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
        <button className="rounded bg-secondary-pink w-[130px] h-[40px] ml-[24.52px] flex items-center justify-center">
          <span className="font-mulish font-bold text-center uppercase text-[12px] leading-[15px] text-white tracking-[0.3px]">
            get reviews
          </span>
        </button>
      </div>
      <OverallRating />
      <EmployerRating />
      <CandidateRating />
      <SpecialisationRating />
    </div>
  );
}

export default Ratings;
