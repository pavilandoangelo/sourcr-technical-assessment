import Overview from "./overview";
import Replies from "./replies/index";

function Reviews() {
  const selectedNav = "Reviews & Ratings";
  const navbars = ["Reviews & Ratings", "NPS", "Leaderboards"];

  return (
    <div className="flex flex-col w-[685px] h-full mt-[25px]">
      <div className="flex flex-row items-center mb-[31px]">
        {navbars.map((nav, index) => {
          return (
            <p
              key={index}
              className={`font-mulish text-[15px] leading-[16px] text-primary-black mr-[24px] ${
                selectedNav === nav
                  ? "font-bold underline underline-offset-8 decoration-[#11283C4d]"
                  : "font-normal"
              }`}
            >
              {nav}
            </p>
          );
        })}
      </div>
      <Overview />
      <Replies />
    </div>
  );
}

export default Reviews;
