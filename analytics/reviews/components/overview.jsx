function Overview() {
  const overviews = [
    {
      id: 1,
      count: 2,
      name: "Missing Verification",
      type: "danger",
    },
    {
      id: 2,
      count: 2,
      name: "Invite not sent",
      type: "dark",
    },
    {
      id: 3,
      count: 2,
      name: "Invite Scheduled",
      type: "light",
    },
    {
      id: 4,
      count: 6,
      name: "Invite Sent",
      type: "warning",
    },
    {
      id: 5,
      count: 2,
      name: "Missing Reply",
      type: "danger",
    },
    {
      id: 6,
      count: 100,
      name: "Complete",
      type: "light",
    },
  ];

  const getColour = (type) => {
    if (type === "danger") return { border: "border-error", bg: "bg-error" };
    if (type === "dark") return { border: "border-grey-70", bg: "bg-grey-70" };
    if (type === "light") return { border: "border-grey-40", bg: "bg-grey-40" };
    if (type === "warning")
      return { border: "border-warning", bg: "bg-warning" };
  };

  return (
    <div className="flex flex-col w-full h-[174px] bg-white rounded p-[24px] shadow-box-content">
      <p className="font-mulish font-medium text-[18px] leading-[16px] text-primary-black">
        Reviews Overview
      </p>
      <div className="flex flex-row items-center mt-[16px]">
        {overviews.map((overview, index) => {
          const { count, name, type } = overview;
          const box = getColour(type);
          const isLight = type !== "light";

          return (
            <div
              key={index}
              className={`box-overview flex flex-col drop-shadow-box-content border w-[99px] h-[94px] rounded mr-[9px] last-of-type:mr-0 justify-center ${box.border}`}
            >
              {isLight && (
                <div
                  className={`w-[6px] h-[6px] rounded-full top-2 right-2 absolute ${box.bg}`}
                ></div>
              )}
              <p className="flex flex-row self-center font-mulish font-bold text-[18px] leading-[16px] text-primary-black w-fit h-fit mb-[6px]">
                {count}
              </p>
              <p className="flex flex-row self-center font-mulish font-medium font-[13px] leading-[16px] text-center w-fit h-fit text-primary-black">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
