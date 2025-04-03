import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Contentbar = () => {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Myria",
      description:
        "Eco-friendly insulated water bottle that keeps liquids hot or cold for 24 hours.",
      category: "Home & Kitchen",
      price: 24.99,
      rating: 4.7,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      name: "David",
      description:
        "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      category: "Electronics",
      price: 99.99,
      rating: 4.5,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Myria",
      description:
        "Eco-friendly insulated water bottle that keeps liquids hot or cold for 24 hours.",
      category: "Home & Kitchen",
      price: 24.99,
      rating: 4.7,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      name: "David",
      description:
        "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      category: "Electronics",
      price: 99.99,
      rating: 4.5,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Myria",
      description:
        "Eco-friendly insulated water bottle that keeps liquids hot or cold for 24 hours.",
      category: "Home & Kitchen",
      price: 24.99,
      rating: 4.7,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      name: "David",
      description:
        "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      category: "Electronics",
      price: 99.99,
      rating: 4.5,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      name: "Myria",
      description:
        "Eco-friendly insulated water bottle that keeps liquids hot or cold for 24 hours.",
      category: "Home & Kitchen",
      price: 24.99,
      rating: 4.7,
    },
  ];

  return (
    <div className="h-screen ">
      <div className="block md:hidden h-15  mb-5 border-b border-gray-800">
        <Navbar />
      </div>

      {/* <------------------storySection---------------> */}
      <div className="story-section">
        <div className="contentNavbar flex flex-wrap gap-2 m-10 ">
          {data.map((data1) => {
            return (
              <div className="flex flex-col gap-1 items-center text-white h-20 w-20">
                <div className=" h-15 w-15 rounded-full overflow-hidden">
                  <img
                    src={data1.image}
                    alt={data1.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="text-xs">{data1.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <------------------postSection---------------> */}
      <div className="post-section mx-10 lg:mx-30 h-200 bg-black text-white border-b border-gray-800">
        <div className="h-150 w-full bg-amber-700">
          <div className="post-navbar flex justify-between items-center bg-black text-white h-15 w-full ">
            <Link to="#" className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p>Manish_shekhawat</p>
            </Link>
            <Link to="#">
              <Icon icon="majesticons:more-menu" width="40" height="40" />
            </Link>
          </div>
          <div className="post-image h-full w-full rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="post-footer flex flex-col gap-3 ">
            <div className="flex justify-between h-10 pt-4">
              <div className="flex gap-2 items-center">
                <Icon icon="mdi:heart-outline" width="30" height="30" />
                <Icon icon="iconamoon:comment" width="30" height="30" />
                <Icon
                  icon="bitcoin-icons:share-outline"
                  width="30"
                  height="30"
                />
              </div>
              <div className="flex items-center">
                <Icon icon="stash:save-ribbon" width="40" height="30" />
              </div>
            </div>
            <p>2,389 likes</p>
            <div>
              <span>Manish_shekhawat </span>
              <span>This is a nice pic!</span>
            </div>
          </div>
        </div>
      </div>

      {/* <------------------mobileNavbar---------------> */}

      <div className="block md:hidden fixed bottom-0 w-full border-t border-gray-800 bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Contentbar;
