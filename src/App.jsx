import "./style.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Anish",
      address: "Ktm",
      blood: "A+",
      phone: "987654323456",
      date: "2022-12-32",
    },
    {
      name: "Ram",
      address: "Bkt",
      blood: "0+",
      phone: "987654323456",
      date: "2022-12-32",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        console.log(item, index);
        return <Card {...item} />;
      })}

      {/* <Card name="Anish" address={"ktm"} /> */}
    </>
  );
}

export default App;
