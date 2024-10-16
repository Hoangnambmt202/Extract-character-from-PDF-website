
import video from "../../../assets/video/homepageVideo.mp4";
import features1 from "../../../assets/images/features-03-image-01.webp";
import { Routes, Route, Link } from "react-router-dom";
import PDFExtractor from "../Extract";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="container grid  mx-auto px-4  pb-10">
          <div className="max-w-3xl mx-auto pt-24 pb-10">
            <h1 className="text-5xl font-bold text-center title text-white mb-4">
              Extract and store characters easily
            </h1>
            <h3 className="text-xl sub-title text-center text-white mb-8">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </h3>
            <div className="flex justify-center">
              <Link
                to="/about"
                className="inline-block mx-2 px-6 py-3 rounded-lg bg-indigo-600 text-white"
              >
                Start free trial
              </Link>

              <Link
                to="/learn-more"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-3 px-6 rounded-lg inline-flex items-center"
              >
                Learn more
              </Link>
              <Routes>
                <Route path="/extract" element={<PDFExtractor />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
          <div>
            <video src={video} width="100%" height="500" controls></video>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 pb-10">
          <div className="max-w-3xl mx-auto pt-24 pb-10">
            <h1 className="text-5xl font-bold text-center title  text-white mb-4">
              The majority our customers do not understand their workflows.
            </h1>
            <h3 className="text-xl sub-title text-center text-white mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </h3>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 gap-6 ">
            <div className="flex flex-col items-center px-4">
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-indigo-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <path
                  className="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                ></path>
                <path
                  className="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                ></path>
              </svg>
              <h4 className="text-xl text-white font-bold text-center">
                Instant Features
              </h4>
              <p className="detail text-center text-xl text-gray-400  ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-indigo-600"
                  cx="32"
                  cy="32"
                  r="32"
                ></circle>
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                ></path>
                <path
                  className="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                ></path>
              </svg>
              <h4 className="text-xl text-white font-bold text-center">
                Instant Features
              </h4>
              <p className="detail text-center text-xl text-gray-400  ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-indigo-600"
                  width="64"
                  height="64"
                  rx="32"
                ></rect>
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  ></ellipse>
                  <path
                    className="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  ></path>
                  <circle
                    className="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  ></circle>
                </g>
              </svg>
              <h4 className="text-xl text-white font-bold text-center">
                Instant Features
              </h4>
              <p className="detail text-center text-xl text-gray-400  ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid mx-auto px-4 pb-10 ">
          <div className="max-w-3xl mx-auto pt-24 pb-10">
            <h1 className="text-5xl font-bold text-center title  text-white mb-4">
              One product, unlimited solutions
            </h1>
            <h3 className="text-xl sub-title text-center text-white mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </h3>
          </div>
          <div className="grid gap-20">
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 px-4">
                <p className="font-['Handlee'] text-indigo-600 ">
                  More speed. Less spend
                </p>
                <h3 className="title text-3xl text-white font-bold mb-6">
                  Keep projects on schedule
                </h3>
                <p className="subtitle text-xl text-gray-400 mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">Excepteur sint occaecat</span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <img src={features1} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="col-span-1">
                <img src={features1} alt="" />
              </div>
              <div className="col-span-1 px-4">
                <p className="font-['Handlee'] text-indigo-600 ">
                  More speed. Less spend
                </p>
                <h3 className="title text-3xl text-white font-bold mb-6">
                  Keep projects on schedule
                </h3>
                <p className="subtitle text-xl text-gray-400 mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">Excepteur sint occaecat</span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 px-4">
                <p className="font-['Handlee'] text-indigo-600 ">
                  More speed. Less spend
                </p>
                <h3 className="title text-3xl text-white font-bold mb-6">
                  Keep projects on schedule
                </h3>
                <p className="subtitle text-xl text-gray-400 mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">Excepteur sint occaecat</span>
                  </li>
                  <li className="flex items-center mb-2 ">
                    <svg
                      className="w-3 h-3 mr-1 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span className="text-white">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <img src={features1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid mx-auto px-4 pb-10">
          <div className="max-w-3xl mx-auto pt-24 pb-10">
            <h1 className="text-5xl font-bold text-center title  text-white mb-4">
              Don't take our word for it
            </h1>
            <h3 className="text-xl sub-title text-center text-white mb-8">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 p-4 min-h-80 bg-zinc-800">
              <img
                src="../../../assets/images/img_person1.jpg"
                className="rounded-full w-14 h-14 object-cover mb-3"
              />
              <blockquote className="text-gray-400 text-xl">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </blockquote>
              <address className="mt-6 pt-5 border-t border-gray-700">
                <span className="text-white ">Anastasia Dan</span>
              </address>
            </div>
            <div className="col-span-1 p-4 min-h-80 bg-zinc-800">
              <img
                src={require("../../../assets/user/images/img_person2.jpg")}
                className="rounded-full w-14 h-14 object-cover mb-3"
              />
              <blockquote className="text-gray-400 text-xl">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </blockquote>
              <address className="mt-6 pt-5 border-t border-gray-700">
                <span className="text-white ">Anastasia Dan</span>
              </address>
            </div>
            <div className="col-span-1 p-4 min-h-80 bg-zinc-800">
              <img
                 src="../../../assets/images/img_person1.jpg"
                className="rounded-full w-14 h-14 object-cover mb-3"
              />
              <blockquote className="text-gray-400 text-xl">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </blockquote>
              <address className="mt-6 pt-5 border-t border-gray-700">
                <span className="text-white ">Anastasia Dan</span>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
