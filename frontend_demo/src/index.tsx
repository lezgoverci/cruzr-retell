// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   // Render your React component
//   root.render(<App />);
// } else {
//   console.error("Root element not found");
// }


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Function to load the external script
const loadScript = (src: string, onLoad: () => void) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = onLoad;
  document.head.appendChild(script);
};

// Load the Telegram Web App script before rendering the React component
loadScript("https://telegram.org/js/telegram-web-app.js", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // Render your React component
    root.render(<App />);
  } else {
    console.error("Root element not found");
  }
});