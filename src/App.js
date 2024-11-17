import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      if (!res.ok) {
        alert("there is some issue in the json");
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "newDAta");

  return (
    <div className="App">
      {data &&
        data.map((item, index) => (
          <Card key={index} name={item.name} url={item.flag} />
        ))}
    </div>
  );
}

export default App;

function Card({ name, url }) {
  return (
    <div className="card_body">
      <img src={url} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
