import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [selectedFlavor, setSelectedFlavor] = useState("strawberry");

  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar selectedFlavor={selectedFlavor} />
      <Hero selectedFlavor={selectedFlavor} setSelectedFlavor={setSelectedFlavor} />
    </div>
  );
}
