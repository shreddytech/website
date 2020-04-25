import * as React from "react";
import Content from "./Content";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

function Header(): JSX.Element {
  return (<header />);
}

const footer = "</> with ☕ and 🌧️ in Seattle, WA";

function Footer(): JSX.Element {
  return (
    <footer>
      <div>
        <p className="subtext">{footer}</p>
      </div>
    </footer>
  );
}
