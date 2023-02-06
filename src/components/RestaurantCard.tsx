import {
  BIB_GOURMAND_IMAGE,
  MICHELIN_AWARD_MAP,
  MICHELIN_STAR_IMAGE,
} from "@/constants";
import {
  MichelinAward,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import Badge from "@mui/joy/Badge";
import { Card, Chip, Link } from "@mui/material";

function getMichelinRatingDisplay(michelinAward: MichelinAward) {
  switch (michelinAward) {
    case "THREE_STARS":
    case "TWO_STARS":
    case "ONE_STAR":
      const arraySize = MICHELIN_AWARD_MAP[michelinAward];
      return (
        <div className="flex">
          {[...new Array(arraySize)].map((key, index) => (
            <img key={index} className="w-8" src={MICHELIN_STAR_IMAGE} alt="" />
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

export const RestaurantCard = (props) => {
  const data = props.data as MichelinDataResponse;
  return (
    <Card>
      <div className="michelin-card grid grid-cols-6 justify-around">
        <div className="flex flex-col justify-center col-span-1">
          <div className="michelin-card__picture m-4">
            <img src={data.image} alt="" />
          </div>
        </div>
        <div className="michelin-card__detail flex flex-col col-span-5 m-4 justify-between">
          <div className="michelin-card__detail__non-cuisine-group">
            <div className="michelin-card__detail--stars">
              {getMichelinRatingDisplay(data.michelin_award)}
            </div>
            <div>
              <Link
                underline="none"
                className="michelin-card__detail--name text-lg "
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
          <Badge color="primary" variant="soft" />
          {data.cuisines.map((cuisine, index) => {
            return (
              <div key={index}>
                <Chip
                  className="michelin-card__detail--cuisine mt-2"
                  size="small"
                  color="success"
                  variant="outlined"
                  label={cuisine}
                >
                  {/* {cuisine} */}
                </Chip>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
