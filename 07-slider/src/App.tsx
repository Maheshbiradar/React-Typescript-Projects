import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(data);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>reviews</span>
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() =>
            setIndex(
              (prevIndex) => (prevIndex - 1 + people.length) % people.length
            )
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            setIndex((prevIndex) => (prevIndex + 1) % people.length)
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
