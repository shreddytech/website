import * as React from "react";
import SplashLogo from "../assets/splash-logo.svg";

export default function Splash(): JSX.Element {
  return (
    <div className="splash-container">
      <div className="splash-item">
        <SplashLogo className="splash-svg" />
        <p className="subtext">Coming soon</p>
      </div>
    </div>
  );
}
