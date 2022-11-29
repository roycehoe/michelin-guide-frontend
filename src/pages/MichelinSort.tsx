import * as React from "react";

const Activated = (props) => {
  if (props.data) {
    return <p>I got activated</p>;
  }
  return <p>No longer activated</p>;
};

export const MichelinHeader = () => {
  // To implement: Michelin Sort and Michelin Filter within this component
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <div className="bg-red-300">
      <p>Times clicked {isMenuOpened}</p>
      <button onClick={() => setIsMenuOpened(!isMenuOpened)}>Click me</button>
      <Activated data={isMenuOpened}></Activated>
    </div>
  );
};
