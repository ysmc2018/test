import ReactGA from "react-ga";
import Button from "./Button";

<Button onClick={()=>{
  ReactGA.event({
    category: "Event",
    action: "Press play button",
    label: "Watch Video",
  });
}}></Button>