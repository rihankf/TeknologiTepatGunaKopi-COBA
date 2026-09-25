"use client";

export type Commodity = "kopi" | "gula-kelapa";

interface CommoditySelectorProps {
  active: Commodity;
  onChange: (commodity: Commodity) => void;
}

const commodities: {
  id: Commodity;
  icon: string;
  label: string;
  description: string;
  gradient: string;
  accentColor: string;
}[] = [
  {
    id: "kopi",
    icon: "☕",
    label: "Biji Kopi",
    description: "Teknologi pasca panen Biji Kopi: pengeringan, pengukuran & pemilahan",
    gradient: "linear-gradient(135deg, #4f200d 0%, #7c3a12 100%)",
    accentColor: "#ff9a00",
  },
  {
    id: "gula-kelapa",
    icon: "🥥",
    label: "Gula Kelapa",
    description: "Teknologi pengolahan gula kelapa: penyaringan & pembuatan",
    gradient: "linear-gradient(135deg, #4f200d 0%, #7c3a12 100%)",
    accentColor: "#ff9a00",
  },
];

export default function CommoditySelector({
  active,
  onChange,
}: CommoditySelectorProps) {
  return (
    <div className="commodity-selector">
      {commodities.map((item) => (
        <button
          key={item.id}
          className={`commodity-card${active === item.id ? " commodity-active" : ""}`}
          onClick={() => onChange(item.id)}
          style={
            active === item.id
              ? {
                  background: item.gradient,
                  borderColor: item.accentColor,
                  color: "#fff",
                }
              : undefined
          }
        >
          <span className="commodity-icon">{item.icon}</span>
          <div className="commodity-info">
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
