import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import CatalogCard from "@/components/ui/CatalogCard";
import { kopiTools, gulaKelapaTools } from "@/data";

const allTools = [...kopiTools, ...gulaKelapaTools];

export function generateStaticParams() {
  return allTools.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = allTools.find((item) => item.slug === slug);
  if (!tool) notFound();
  const related = allTools.filter((item) => item.slug !== slug && item.category === tool.category);

  return (
    <>
      <Header />
      <main className="product-page" style={{ paddingTop: "90px" }}>


        <section className="container product-story" style={{ marginTop: "0" }}>
          <div className="product-showcase">
            <div className="product-main-image">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                sizes="(max-width: 800px) 100vw, 47vw"
              />
            </div>
          </div>
          <article className="detail-copy">
            <p className="detail-kicker dark" style={{ marginBottom: "8px" }}>
              {tool.category}
            </p>
            <h1
              style={{
                font: '800 34px/1.2 "Montserrat", sans-serif',
                letterSpacing: "-1px",
                margin: "0 0 16px",
                color: "var(--ink)",
              }}
            >
              {tool.name}
            </h1>
            <div style={{ marginBottom: "24px" }}>
              <strong
                style={{
                  fontSize: "28px",
                  color: "var(--ink)",
                  fontWeight: "800",
                }}
              >
                {tool.priceRange}
              </strong>
            </div>

            <a
              href={tool.buyLink || "#"}
              target={tool.buyLink ? "_blank" : undefined}
              rel={tool.buyLink ? "noopener noreferrer" : undefined}
              className="buy-button"
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "center",
                padding: "14px 24px",
                background: "var(--sand)",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "32px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(255, 154, 0, 0.3)",
              }}
            >
              Beli Langsung
            </a>

            <details className="product-accordion" open>
              <summary>Deskripsi Produk</summary>
              <div className="accordion-content">
                <p className="lead" style={{ margin: 0 }}>
                  {tool.description}
                </p>
              </div>
            </details>

            <details className="product-accordion" open>
              <summary>Spesifikasi Produk</summary>
              <div className="accordion-content">
                <div
                  className="specs-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                  }}
                >
                  {tool.specs.map((s, i) => (
                    <div
                      className="spec-item"
                      key={i}
                      style={{
                        padding: "15px",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        background: "var(--cream)",
                      }}
                    >
                      <span
                        className="spec-label"
                        style={{
                          display: "block",
                          fontSize: "12px",
                          color: "var(--muted)",
                          marginBottom: "4px",
                        }}
                      >
                        {s.label}
                      </span>
                      <strong
                        className="spec-value"
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "var(--ink)",
                        }}
                      >
                        {s.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </article>
        </section>

        <section
          className="related-section container"
          style={{ marginTop: "0", marginBottom: "60px" }}
        >
          <div className="related-heading">
            <div>
              <p className="detail-kicker dark">Katalog Lainnya</p>
              <h2 className="related-title">Teknologi Lainnya</h2>
            </div>
            <Link href="/teknologi" className="text-link">
              Lihat semua alat <span>→</span>
            </Link>
          </div>
          <div className="related-grid">
            {related.slice(0, 3).map((item) => (
              <CatalogCard key={item.slug} tool={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
