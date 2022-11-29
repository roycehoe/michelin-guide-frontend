import { MichelinCard } from "@/components/MichelinCard";

export const MichelinPage = (prop) => {
  const michelinData = prop.data;

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
