import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

interface Tour {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
}

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData: Tour[] = await response.json();
      setLoading(false);
      setTours(toursData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
