import React, { useState } from "react";
import "./Home.css";
import { IoCloseOutline } from "react-icons/io5";
import head from "../Images/head.jpg";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="icon text-white flex justify-end">
            < IoCloseOutline className="rotate-icon"/>
          </div>
          <div className="head w-[100%] flex justify-center  align-middle text-center mt-10">
            <h2>
              Epic Games : An American video game and software developer <br />{" "}
              and publisher based in Cary, North Carolina.
            </h2>
            <div className="flex justify-center align-middle mt-[3rem]">
              <img className="w-[ 1415px] h-[ 500px]" src={head} alt="" />
            </div>
            <p className="text-white flex justify-center align-middle text-center px-28 mt-[3rem] flex-wrap">
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event, or discover over a million creator made
              games, including racing, parkour, zombie survival, and more. Each
              Fortnite island has an individual age rating so you can find the
              one that's right for you and your friends. Find it all in Fortnite
              ... Drop In.
            </p>
            <button className="btn">Visit Website</button>
          </div>
          <div className="cards mt-[5rem]">
            <div className="card">
              <img src={card1} alt="" />
              <p>
                Explore large, destructible environments where no two games are
                ever the same.
              </p>
            </div>
            <div className="card">
              <img src={card2} alt="" />
              <p>
                Explore large, destructible environments where no two games are
                ever the same.
              </p>
            </div>
            <div className="card">
              <img src={card3} alt="" />
              <p>
                Explore large, destructible environments where no two games are
                ever the same.
              </p>
            </div>
          </div>
          <div className="our flex flex-col flex-wrap text-cente  align-middle mt-[3rem]">
            <h2>Our Contribution</h2>
            <p className=" mt-[4rem]">
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user <br />{" "}
              community. Collaborating with us represents an investment, rather
              than a mere expenditure. Our dedication to providing <br />{" "}
              distinctive digital interactions guarantees unparalleled benefits
              for our clientele.
            </p>
            <div className="rating flex flex-wrap justify-around mt-[3rem] align-middle text-center">
              <div>
                <h1>5M</h1>
                <p>
                  Daily User <br /> Engagements
                </p>
              </div>
              <div>
                <h1>$500M</h1>
                <p>Revenue Surge for an <br /> Platform</p>
              </div>
              <div>
                <h1>10x</h1>
                <p>
                  ROAS on all our <br /> marketing campaigns
                </p>
              </div>
            </div>
            <div className="footer mt-[150px]">
              <h2 className="text-[45px]">
                Interested in delving deeper into the project?
              </h2>
              <p>
                If you'd like to explore further details about our <br /> initiatives
                or any of our affiliated brands, don't hesitate to connect. You
                can reach out to us via <br /> email at <span className="">hello@abc.com </span>or
                give us a call at <span> +91 480 20802730.</span>
              </p>
              <div className=" flex flex-wrap justify-center gap-3 mt-[4rem] ">
                <button className="ft-btn1">Ring us on Skype</button>
                <button className="ft-btn2">Contact Us</button>
              </div>
              <p className="ft-copy mt-[5rem] mb-4">
                © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights
                Reserved
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
