
import { Eye } from "./Eye";

function Eyes() {
  return (
    <div className="relative shrink-0" data-name="eyes">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative">
        <Eye isRightEye={false} />
        <Eye isRightEye={true} />
      </div>
    </div>
  );
}

function Monster() {
  return (
    <div
      className="bg-[var(--cookie-monster-blue)] relative shrink-0 h-[432px] w-full overflow-clip"
      data-name="monster"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center px-[22px] py-[117px] relative">
          <Eyes />
        </div>
      </div>
    </div>
  );
}

function Hero({ colorHex = "#0062AD" }: { colorHex?: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-[#000000] text-left w-full">
        <div
          className="font-['Inter:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[64px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[68px] text-[64px] font-bold">
            {colorHex.toUpperCase()}
          </p>
        </div>
        <div
          className="font-['Inter:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[24px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[normal] text-[24px]">
            Cookie Monster
          </p>
        </div>
      </div>
    </div>
  );
}

function Legend({ colorHex = "#0062AD", onTogglePalette }: { colorHex?: string; onTogglePalette?: () => void }) {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="legend"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[55px] items-start justify-start px-0 py-[9px] relative w-full">
          <Hero colorHex={colorHex} />
          <button
            onClick={onTogglePalette}
            style={{
              font: "inherit",
              fontFamily: "Inter, Medium, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor: "transparent",
              border: "2px solid #000000",
              color: "#000000",
              cursor: "pointer",
              padding: "4px 12px",
              borderRadius: "4px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#fbf0dc";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Mistix
          </button>
        </div>
      </div>
    </div>
  );
}

export function EyeCard({ colorHex = "#0062AD", onTogglePalette }: { colorHex?: string; onTogglePalette?: () => void }) {
  return (
    <div className="bg-[var(--cream-background)] relative w-full max-w-[458px]">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[18px] relative">
          <Monster />
          <Legend colorHex={colorHex} onTogglePalette={onTogglePalette} />
        </div>
      </div>
    </div>
  );
}
