import List from "./list";
function Replies() {
  const replyScorePercentage = "20%";
  const reviews = {
    total: 40,
    list: [
      {
        id: 1,
        reviewer: "Chris Almond",
        reviewerRole: "Employer",
        position: "Head of Digital, Google",
        name: "Matte Harte",
        rating: 4,
        date: "Fev 2020",
        comment: "Outstanding Service",
      },
      {
        id: 2,
        reviewer: "Chris Almond",
        reviewerRole: "Employer",
        position: "Head of Digital, Google",
        name: "Matte Harte",
        rating: 4,
        date: "Fev 2020",
        comment: "Outstanding Service",
      },
      {
        id: 3,
        reviewer: "Chris Almond",
        reviewerRole: "Employer",
        position: "Head of Digital, Google",
        name: "Matte Harte",
        rating: 4,
        date: "Fev 2020",
        comment: "Outstanding Service",
      },
      {
        id: 4,
        reviewer: "Chris Almond",
        reviewerRole: "Employer",
        position: "Head of Digital, Google",
        name: "Matte Harte",
        rating: 4,
        date: "Fev 2020",
        comment: "Outstanding Service",
      },
    ],
  };
  const { total, list } = reviews;

  return (
    <div className="flex flex-col w-full h-[420px] bg-white rounded shadow-box-content mt-[32px]">
      <div className="flex flex-row w-full px-[24px] pt-[24px]">
        <div className="flex flex-row items-center">
          <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
            Reviews - Missing Reply
          </p>
          <div className="flex flex-row items-center justify-center w-[27px] h-[21px] rounded-[20px] bg-error ml-[11px]">
            <span className="font-mulish font-semibold text-white text-[12px] leading-[16px] w-[15px] h-[16px]">
              {total}
            </span>
          </div>
        </div>
        <div className="flex flex-col ml-[140px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-row">
              <p className="font-mulish font-medium text-[14px] leading-[16px] text-secondary-black">
                Your Reply Score
              </p>
              <span className="ml-[4px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 1.25C10.9462 1.25 13.75 4.05375 13.75 7.5C13.75 10.9462 10.9462 13.75 7.5 13.75C4.05375 13.75 1.25 10.9462 1.25 7.5C1.25 4.05375 4.05375 1.25 7.5 1.25ZM7.5 0C3.35813 0 0 3.35813 0 7.5C0 11.6419 3.35813 15 7.5 15C11.6419 15 15 11.6419 15 7.5C15 3.35813 11.6419 0 7.5 0ZM8.28125 10.625C8.28125 11.0562 7.93188 11.4062 7.5 11.4062C7.06938 11.4062 6.71875 11.0562 6.71875 10.625C6.71875 10.1938 7.06938 9.84375 7.5 9.84375C7.93188 9.84375 8.28125 10.1938 8.28125 10.625ZM9.15187 4.37625C8.77187 3.99125 8.205 3.77938 7.5575 3.77938C6.195 3.77938 5.31375 4.74812 5.31375 6.24813H6.57062C6.57062 5.31938 7.08875 4.99 7.53187 4.99C7.92812 4.99 8.34875 5.25313 8.38437 5.75625C8.42313 6.28562 8.14062 6.55438 7.78312 6.89437C6.90063 7.73375 6.88438 8.14 6.88812 9.06187H8.14125C8.13313 8.64687 8.16 8.31 8.72563 7.70062C9.14875 7.24438 9.675 6.67687 9.68563 5.81187C9.6925 5.23438 9.50812 4.7375 9.15187 4.37625Z"
                    fill="#6F7283"
                  />
                </svg>
              </span>
            </div>
            <p className="font-mulish font-semibold text-[14px] leading-[16px] text-error ml-[22px]">
              {replyScorePercentage}
            </p>
          </div>
          <div className="w-[180px] h-[3px] bg-grey-75 rounded-[20px] mt-[6px]">
            <div
              className="bg-error h-full rounded-[20px]"
              style={{ width: replyScorePercentage }}
            ></div>
          </div>
        </div>
        <div className="flex flex-row w-[49px] h-[16px] ml-[32px]">
          <p className="font-mulish font-semibold text-[13px] leading-[16px] underline text-secondary-pink">
            View all
          </p>
        </div>
      </div>
      <List list={list} />
    </div>
  );
}

export default Replies;
