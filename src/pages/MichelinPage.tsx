import { MichelinCard } from "@/components/MichelinCard";
import { DATA } from "./data";

export const MichelinPage = () => {
  return (
    <div>
      {DATA.map((data) => {
        return <MichelinCard data={data}></MichelinCard>;
      })}
    </div>
  );
};
