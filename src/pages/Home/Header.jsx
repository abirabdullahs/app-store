import React from "react";
import HeroImg from '../../assets/images/hero.png'

 function Header() {
  return (
    <section className="bg-white text-black flex flex-col items-center justify-center py-20">
      {/* Top Title */}
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600 font-extrabold">
            Productive Apps
          </span>
        </h2>
        <p className="text-black mt-4 text-sm md:text-base leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button className="bg-white border border-gray-700 hover:border-purple-500 hover:bg-gray-800 transition px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <a href="https://play.google.com/store/games?hl=en">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6"
            />
            </a>
          </button>
          <button className="bg-white border border-gray-700 hover:border-purple-500 hover:bg-gray-800 transition px-4 py-2 rounded-lg text-sm flex items-center gap-2">
           <a href="https://www.apple.com/app-store/">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-6"
            />
           </a>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex justify-center">
        <img
          src={HeroImg}
          alt="App Preview"
          className="w-full max-w-3xl md:max-w-4xl rounded-xl"
        />
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-600 w-full py-10 text-center text-black">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Trusted By Millions, Built For You
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <h4 className="text-3xl font-bold">29.6M</h4>
            <p className="text-sm text-purple-200">Total Downloads</p>
            <p className="text-xs text-purple-300">21% More Than Last Month</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">906K</h4>
            <p className="text-sm text-purple-200">Total Reviews</p>
            <p className="text-xs text-purple-300">46% More Than Last Month</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">132+</h4>
            <p className="text-sm text-purple-200">Active Apps</p>
            <p className="text-xs text-purple-300">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;