import React, { useRef, useEffect, useState, LegacyRef } from "react";
import latte from "./lattesquareT.png";
import cortado from "./cortadosquareT.png";
import espressoYourself from "./espressoYourself.png";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "react-bootstrap";

import "./App.css";
import NavBarCoffee from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

gsap.registerPlugin(ScrollTrigger);

let imageMap = new Map<string, any>([
  ["cortado", cortado],
  ["latte", latte],
]);

const sections = [
  {
    coffeeType: "cortado",
    css: "Cortado",
  },
  {
    coffeeType: "latte",
    css: "Latte",
  },

];

function App() {
  /*
  const blue = '#9EBFBF';
  const [background, setBackground] = useState(grey);
  const toggleBackground = () => { 
    const color = background !== grey ? grey : blue;
    setBackground(color);
  }*/

  // will contain all our sections and the references to them
  const revealsRef = useRef<HTMLDivElement[]>([]); // loop all sections, for each add to this array
  revealsRef.current = []; // then we will be able to loop over revealsRef current array and tween them individually

  /*
  useEffect(() => { 
    let context = gsap.context(() => { 
      gsap.to(eyRef.current, {
        duration: 0.5,
        backgroundColor: background,
        ease: 'none'});
    },eyRef);
    return () => context.revert();
  }, [background]);*/

  useEffect(() => {
    let context = gsap.context(() => {
      
      revealsRef.current.forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
          },
          {
            duration: 2,
            autoAlpha: 1,
            //ease: "none",
            scrollTrigger: {
              id: 'section-' + index,
              trigger: element, 
              start: "top center",
              end: "top 100px",
              // onEnter, onLeave, onEnterBack, onLeaveBack
              toggleActions: 'restart none none reset"', 
              markers: true, 
            }
          }
        );
      });
    }, revealsRef);
    //return () => context.revert();
  });

  const addToRefs = (el: any) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div className="App">
      <NavBarCoffee />
      <div>
        {sections.map(({ coffeeType, css }) => {
          return (
            <div key={coffeeType} className={css}>
              <img
                ref={addToRefs}
                style={{ width: 526 }}
                src={imageMap.get(coffeeType)}
                alt="React Image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
