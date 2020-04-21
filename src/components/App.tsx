import * as React from "react";
import Splash from "./Splash";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Splash />
      <Footer />
    </div>
  );
}

function Header(): JSX.Element {
  return <></>;
}

function Footer(): JSX.Element {
  return <></>;
}
