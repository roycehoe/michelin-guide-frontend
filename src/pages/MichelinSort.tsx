import * as React from "react";

const Activated = (props) => {
  if (props.data) {
    return <p>I got activated</p>;
  }
  return <p>No longer activated</p>;
};

export const MichelinSort = (prop) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <div className="bg-red-300">
      <p>{prop.data}</p>
      <p>Times clicked {isMenuOpened}</p>
      <button onClick={() => setIsMenuOpened(!isMenuOpened)}>Click me</button>
      <Activated data={isMenuOpened}></Activated>
    </div>
  );
};
