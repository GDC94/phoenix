import {useEffect, useState} from "react";

import "./App.css";
import {Button} from "./ui/atoms/Button";

export interface NetworksResponse {
  header: number;
  chain: Chain;
  currency: Currency;
}

export interface Chain {
  chainID: string;
  name: string;
  icon: string;
  blockExplorer: string;
  testnet: boolean;
  supportsEIP1559: boolean;
}

export interface Currency {
  symbol: string;
  decimals: number;
  icon: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [networks, setNetworks] = useState<NetworksResponse[]>([]);

  useEffect(() => {
    fetch("/api/v1/networks")
      .then((res) => res.json())
      .then((data) => {
        setNetworks(data);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Phoenix UI Library</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div>{networks[0]?.chain.name}</div>
      <div>
        <Button weight="bold" label={"ghost"} variant="ghost" color="blue" />
        <br />
        <Button weight="bold" label={"solid"} variant="solid" color="blue" />
        <br />
        <Button weight="bold" label={"solid"} variant="flat" color="blue" />
        <br />
        <Button weight="bold" label={"solid"} variant="light" color="blue" />
      </div>
    </>
  );
}

export default App;
