import { MichelinCard } from "@/components/MichelinCard";
import { useEffect, useState } from "react";
import { DATA } from "./data";

export const MichelinPage = () => {
  const [michelinData, setMichelinData] = useState([] as Object[]);

  useEffect(() => {
    setMichelinData((michelinData) => (michelinData = DATA));
  });

  return (
    <div>
      {michelinData.map((data) => {
        return (
          <div className="mt-4">
            <MichelinCard data={data}></MichelinCard>
          </div>
        );
      })}
    </div>
  );
};
