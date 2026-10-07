import Image from "next/image";
import Link from "next/link";
import { Tool } from "@/types";

interface CatalogCardProps {
  tool: Tool;
}

export default function CatalogCard({ tool }: CatalogCardProps) {
  return (
    <Link
      className="catalog-card"
      href={`/product/${tool.slug}`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="catalog-image"
        style={{ aspectRatio: "1", position: "relative" }}
      >
        <Image
          src={tool.image}
          alt={tool.name}
          fill
          sizes="(max-width: 700px) 100vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="catalog-body"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "12px",
        }}
      >
        <h3
          style={{
            color: "var(--ink)",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "8px",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {tool.name}
        </h3>

        <div style={{ marginTop: "auto", textAlign: "right" }}>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #EAEAEA",
              margin: "8px 0",
              width: "100%",
            }}
          />
          <strong
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "#F97316",
              backgroundColor: "#FFEDD5",
              padding: "4px 10px",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            {tool.priceRange}
          </strong>
        </div>
      </div>
    </Link>
  );
}
