import { useState } from "react";
import { EyeCard } from "./components/EyeCard";

const COLOR_PALETTE = [
  { name: "Blue", value: "#0062AD" },
  { name: "Purple", value: "#7C3AED" },
  { name: "Pink", value: "#EC4899" },
  { name: "Orange", value: "#F97316" },
  { name: "Green", value: "#10B981" },
  { name: "Red", value: "#EF4444" },
  { name: "Cyan", value: "#06B6D4" },
  { name: "Yellow", value: "#FBBF24" },
];

function ColorSelector({ selectedColor, setSelectedColor }: { selectedColor: typeof COLOR_PALETTE[0]; setSelectedColor: any }) {
  return (
    <div 
      style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 999,
      }}
    >
      {COLOR_PALETTE.map((color) => (
        <button
          key={color.name}
          onClick={() => {
            setSelectedColor(color);
            document.documentElement.style.setProperty(
              "--cookie-monster-blue",
              color.value
            );
          }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: color.value,
            border: "3px solid white",
            cursor: "pointer",
            transition: "all 0.3s ease",
            transform: selectedColor.name === color.name ? "scale(1.3)" : "scale(1)",
            boxShadow: selectedColor.name === color.name ? "0 0 20px rgba(255,255,255,0.8)" : "0 2px 8px rgba(0,0,0,0.2)",
            opacity: selectedColor.name === color.name ? 1 : 0.7,
          }}
          title={color.name}
          onMouseEnter={(e) => {
            if (selectedColor.name !== color.name) {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (selectedColor.name !== color.name) {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);
  const [showPalette, setShowPalette] = useState(true);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center sm:p-4 transition-colors duration-500"
      style={{ backgroundColor: "var(--cookie-monster-blue)" }}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border flex flex-row gap-2 items-center justify-center sm:p-[24px] size-full">
          <EyeCard colorHex={selectedColor.value} onTogglePalette={() => setShowPalette(!showPalette)} />
        </div>
      </div>
      {showPalette && (
        <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      )}
    </div>
  );
}