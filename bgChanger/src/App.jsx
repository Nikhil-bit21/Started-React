// App.js
import { useState } from "react";
import ColorButton from "./Components/ColorButton"

function App() {
  const [color, setColor] = useState("olive");
  const colors = ["Red", "Green", "Black", "Blue", "Yellow", "Purple", "Orange", "Pink", "Brown", "Teal"];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          {colors.map((color) => (
            <ColorButton key={color} color={color} onClick={() => setColor(color)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
