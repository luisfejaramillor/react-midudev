import { useEffect, useState } from "react";

export const App = () => {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({x:0, y: 0})
  useEffect(() => {
    const handleMove = (event)=> {
       const {clientX, clientY} = event
       setPosition({x:clientX, y:clientY})

    }
    if(enabled){
      window.addEventListener("pointermove", handleMove);
    }

    return ()=> {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]);


  const handleClick = () => {
    setEnable(!enabled);
  };

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)` ,
        }}
      ></div>
      <button onClick={handleClick}>
        {enabled ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
};
