import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
//import App from './App.tsx'
import StarRating from "./StarRating";

function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        defaultRating={3}
        messages={["v bad", "bad", "normal", "good", "v good"]}
        onSetRating={setRating}
      />
      <p>{rating} stars</p>
    </div>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<App />*/}
    <Test />
  </StrictMode>,
);
