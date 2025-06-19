"use client"; // This is a Client Component because it has interactive filtering.

import React, { useState, useEffect } from "react";
import Image from "next/image";

// NOTE: This example replaces Isotope with React state.
// For a masonry effect, you would use a library like 'react-masonry-css'.

const portfolioItems = [
  { id: 1, category: "web new", imgSrc: "/imgs/web-1.jpg", title: "Web 1" },
  {
    id: 2,
    category: "advertising",
    imgSrc: "/imgs/advertising-2.jpg",
    title: "Ad 2",
  },
  {
    id: 3,
    category: "branding new",
    imgSrc: "/imgs/branding-1.jpg",
    title: "Brand 1",
  },
  // ... add all your portfolio items here
];

const Portfolio = () => {
  const [filter, setFilter] = useState(".new"); // Initial filter
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filter === "*") {
      setFilteredItems(portfolioItems);
    } else {
      // The logic from Isotope data-filter=".new" means "contains the class 'new'"
      const a = portfolioItems.filter((item) =>
        item.category.includes(filter.replace(".", ""))
      );
      setFilteredItems(a);
    }
  }, [filter]);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h6 className="subtitle">My Work</h6>
        <h6 className="section-title mb-4">See My Portfolio</h6>
        <div className="filters">
          {/* We now use onClick to update the state */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFilter(".new");
            }}
            className={filter === ".new" ? "active" : ""}
          >
            New
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFilter(".advertising");
            }}
            className={filter === ".advertising" ? "active" : ""}
          >
            Advertising
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFilter(".branding");
            }}
            className={filter === ".branding" ? "active" : ""}
          >
            Branding
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFilter(".web");
            }}
            className={filter === ".web" ? "active" : ""}
          >
            Web
          </a>
        </div>

        {/* The container now renders the filtered items from state */}
        <div className="portfolio-container row">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-md-6 col-lg-4 ${item.category}`}>
              <div className="portfolio-item">
                <Image
                  src={item.imgSrc}
                  className="img-fluid"
                  alt={item.title}
                  width={400}
                  height={300}
                />
                <div className="content-holder">
                  <a className="img-popup" href={item.imgSrc}></a>
                  <div className="text-holder">
                    <h6 className="title">{item.title}</h6>
                    <p className="subtitle">
                      Expedita corporis doloremque velit in totam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
