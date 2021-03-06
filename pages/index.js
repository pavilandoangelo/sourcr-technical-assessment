import Head from "next/head";
import Ratings from "../analytics/ratings/components/index";
import Reviews from "../analytics/reviews/components/index";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-w-screen min-h-screen h-screen w-screen">
        <div className="flex flex-row w-[1280px] h-[886px] bg-body">
          <div className="flex flex-col w-[58px] h-[700px] bg-primary-black">
            <div className="flex w-[38px] h-[38px] mx-[10px] mt-[10px] bg-secondary-pink">
              <svg
                className="flex self-center"
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8024 14.5602H12.1608C10.3042 14.5602 8.77254 13.0202 8.77254 11.1535C8.77254 9.28688 10.3042 7.74688 12.1608 7.74688H20.0978V3.54688H12.1608C8.0299 3.59354 4.6416 7.00021 4.6416 11.2002C4.6416 14.4202 6.63745 17.1269 9.42235 18.2469L5.80198 24.5002H10.6291L13.9246 18.7602H16.7559C18.6125 18.7602 20.1442 20.3002 20.1442 22.1669V24.4535H24.3216V22.1669C24.2752 17.9669 20.9333 14.6069 16.8024 14.5602Z"
                  fill="white"
                />
                <path
                  d="M31.6058 20.2529H27.4285V24.4529H31.6058V20.2529Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full h-full pt-[40px] pb-[60px] px-[48px]">
            <h2 className="flex items-center font-Mulish font-normal text-[24px] leading-[30px] text-primary-black">
              Analytics
            </h2>
            <div className="flex flex-row w-full">
              <Reviews />
              <Ratings />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
