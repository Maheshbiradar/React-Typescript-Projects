import React from "react";
import Tour from "./Tour";

interface Tour {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
}

interface ToursProps {
  tours: Tour[];
  removeTour: (id: number) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
