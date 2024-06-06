import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Space } from "antd";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</button>*/}
        <p>count is {count}</p>
        <Space size={12}>
          <Button
            type={"primary"}
            onClick={() => setCount((count) => count + 1)}
          >
            加一
          </Button>
          <Button
            type={"primary"}
            onClick={() => setCount((count) => count - 1)}
          >
            减一
          </Button>
        </Space>
      </div>
    </>
  );
}

export default App;
