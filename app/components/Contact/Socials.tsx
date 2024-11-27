import React from "react";
import Link from "next/link";
import {
  LinkedinLogo,
  GithubLogo,
  SpotifyLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";

const Socials = () => {
  return (
    <div className="w-full h-full rounded-xl flex gap-4  text-gray-300 justify-center items-center text-4xl group duration-150">
      <Link
        href={"https://github.com/KartikChinda/"}
        target="__blank"
        className="hover:text-white duration-150"
      >
        {" "}
        <GithubLogo size={32} />
      </Link>
      <Link
        href={"https://twitter.com/ChindaKartik"}
        className="hover:text-white duration-150"
      >
        {" "}
        <XLogo size={32} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/kartikchinda"}
        className="hover:text-white duration-150"
      >
        {" "}
        <LinkedinLogo size={32} />
      </Link>
      <Link
        href={"https://www.instagram.com/kartik.chinda11"}
        className="hover:text-white duration-150"
      >
        {" "}
        <InstagramLogo size={32} />
      </Link>
      <Link
        href={
          "https://open.spotify.com/user/p0c5ypajshr2kwcvtkpyx9ojv?si=f7cad2cd34404ae2"
        }
        className="hover:text-white duration-150"
      >
        {" "}
        <SpotifyLogo size={32} />
      </Link>
    </div>
  );
};

export default Socials;
