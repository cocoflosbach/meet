import React from "react";
import "./WelcomeScreen.css";
import "tailwindcss/tailwind.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen py-20">
      <div className="container m-14 w-2/3 h-w-3/5 mx-auto object-center shadow-md px-4 pb-8 rounded-r-lg rounded-l-lg">
        <div className="w-64 h-64 logo justify-self-center mx-auto">
          <img
            alt=""
            crossOrigin="*"
            variant="top"
            src="https://i.imgur.com/yOdwSuL.png"
          />
        </div>
        <h1 className="text-amber-700 text-2xl font-bold">
          Welcome to the Meet app
        </h1>
        <h4>
          Log in to see upcoming events around the world for full-stack
          developers
        </h4>
        <div className="button_cont static" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper ">
              <img
                className="google-icon ml-3"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
        <a
          href="https://Cocoflosbach.github.io/meet/privacy.html"
          rel="nofollow noopener"
          className="text-amber-700 text-sm"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}
export default WelcomeScreen;
