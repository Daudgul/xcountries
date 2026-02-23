import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  const filterData = data.filter((item) =>
    item.name?.common?.toLowerCase().includes(inputVal?.toLowerCase())
  );

  return (
    <div className="App">
    Hello this is app
      // <input
      //   type="text"
      //   value={inputVal}
      //   onChange={(e) => setInputVal(e.target.value)}
      // />
      // {data &&
      //   filterData?.map((item, index) => (
      //     <Card key={index} name={item.name.common} url={item.flags.svg} />
      //   ))}
    </div>
  );
}

export default App;

function Card({ name, url }) {
  return (
    <div className="countryCard">
      <img src={url} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
