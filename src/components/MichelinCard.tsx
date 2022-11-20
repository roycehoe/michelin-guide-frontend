import {
  BIB_GOURMAND_IMAGE,
  MICHELIN_AWARD_MAP,
  MICHELIN_STAR_IMAGE,
} from "@/constants";
import {
  MichelinAward,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { Card, Link } from "@mui/material";

function getMichelinRatingDisplay(michelinAward: MichelinAward) {
  switch (michelinAward) {
    case "THREE_STARS":
    case "TWO_STARS":
    case "ONE_STAR":
      const arraySize = MICHELIN_AWARD_MAP[michelinAward];
      return (
        <div className="flex">
          {[...new Array(arraySize)].map((key) => (
            <img key={key} className="w-8" src={MICHELIN_STAR_IMAGE} alt="" />
          ))}
        </div>
      );
    case "BIB_GOURMAND":
      return (
        <div>
          <img className="w-8" src={BIB_GOURMAND_IMAGE} alt="" />
        </div>
      );
    default:
      return <div></div>;
  }
}

export const MichelinCard = (props) => {
  const data = props.data as MichelinDataResponse;
  return (
    <Card>
      <div className="michelin-card grid grid-cols-6 bg-blue-100 justify-around">
        <div className="flex bg-orange-300 flex-col justify-center col-span-1">
          <div className="michelin-card__picture m-4">
            <img src={data.image} alt="" />
          </div>
        </div>
        <div className="michelin-card__detail flex flex-col bg-pink-200 col-span-5 m-4 justify-evenly">
          <div className="michelin-card__detail__non-cuisine-group">
            <div className="michelin-card__detail--stars">
              {getMichelinRatingDisplay(data.michelin_award)}
            </div>
            <div>
              <Link
                underline="none"
                className="michelin-card__detail--name text-lg bg-red-400"
                href={`https://www.google.com/maps?q=${data.name.replace(
                  " ",
                  "+"
                )}+${data.postcode}`}
              >
                {data.name}
              </Link>
            </div>
            <p className="michelin-card__detail--address">{data.address}</p>
            <p className="michelin-card__detail--price mr-4 mb-2">
              Price: {"$".repeat(data.price_category)}
            </p>
          </div>
          {data.cuisines.map((cuisine) => {
            return <p className="michelin-card__detail--cuisine">{cuisine}</p>;
          })}
        </div>
      </div>
    </Card>
  );
};
