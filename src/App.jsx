import { Button } from "./components/button/button";

function App() {
  return (
    <>
      <Button
        size="sm"
        onClick={() => console.log("A")}
        label="Button A "
      ></Button>
      <Button
        size="md"
        onClick={() => console.log("B")}
        label="Button B "
      ></Button>
      <Button
        size="lg"
        onClick={() => console.log("C")}
        label="Button C "
      ></Button>
    </>
  );
}

export default App;
