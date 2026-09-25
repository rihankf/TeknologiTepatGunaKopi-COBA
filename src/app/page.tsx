"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import CatalogCard from "@/components/ui/CatalogCard";
import ProblemCard from "@/components/ui/ProblemCard";
import CommoditySelector, {
  type Commodity,
} from "@/components/ui/CommoditySelector";
import {
  kopiTools,
  kopiProblems,
  gulaKelapaTools,
  gulaKelapaProblems,
} from "@/data";
import { useState } from "react";

export default function Home() {
  const [commodity, setCommodity] = useState<Commodity>("kopi");

  const isKopi = commodity === "kopi";
  const currentTools = isKopi ? kopiTools : gulaKelapaTools;
  const currentProblems = isKopi ? kopiProblems : gulaKelapaProblems;

  return (
    <>
      <Header />
      <main className="home-page">
        <section className="hero">
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow">Studi &amp; Kajian</p>
            <h1>
              Teknologi Tepat Guna
              <br />
              untuk Komoditas Unggulan
            </h1>
            <p className="hero-copy">
              Mengidentifikasi kebutuhan <i>stakeholder</i> dan merekomendasikan solusi
              teknologi untuk meningkatkan kualitas komoditas unggulan Indonesia
            </p>
            <div className="hero-actions">
              <Link className="button" href="/teknologi">
                Lihat Katalog Teknologi
              </Link>
              <Link className="button button-outline" href="/tentang">
                Tentang Proyek
              </Link>
            </div>
          </div>
        </section>

        <section className="commodities section">
          <div className="container">
            <SectionHeading
              eyebrow="Komoditas"
              title="Pilih Komoditas Unggulan"
            />
            <p
              className="problems-subtitle"
              style={{ marginBottom: "40px" }}
            >
              Pelajari teknologi tepat guna yang direkomendasikan untuk masing-masing
              komoditas unggulan
            </p>
            <CommoditySelector active={commodity} onChange={setCommodity} />
          </div>
        </section>

        <section
          className="problems-section section"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <SectionHeading
              eyebrow="Identifikasi Masalah"
              title={
                isKopi
                  ? "Tantangan Pasca Panen Biji Kopi Indonesia"
                  : "Tantangan Pengolahan Gula Kelapa"
              }
            />
            <p
              className="problems-subtitle"
              style={{
                textAlign: "center",
                margin: "20px auto 60px",
                maxWidth: "900px",
                lineHeight: 1.8,
                color: "var(--muted)",
              }}
            >
              {isKopi
                ? "Pembahasan berfokus pada kendala utama petani yaitu pada proses pascapanen, terutama pada tahap pengeringan, pengukuran kadar air, dan pemilahan kualitas Biji Kopi"
                : "Pembahasan berfokus pada kendala utama pengrajin gula kelapa dalam proses penyaringan nira dan pembuatan gula yang berkualitas konsisten"}
            </p>
            <div
              className="problems-grid"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`,
                gap: "30px",
                marginBottom: "80px",
              }}
            >
              {currentProblems.map((problem, i) => (
                <ProblemCard key={`${commodity}-${i}`} problem={problem} />
              ))}
            </div>
          </div>
        </section>

        <section className="catalog section">
          <div className="container">
            <SectionHeading
              eyebrow="Solusi Teknologi"
              title={
                isKopi
                  ? "Alat Utama yang Direkomendasikan"
                  : "Alat Pengolahan Gula Kelapa"
              }
            />
            <p className="catalog-subtitle">
              {isKopi
                ? "Berdasarkan identifikasi masalah, berikut adalah teknologi tepat guna yang kami rekomendasikan. Setiap alat telah melalui survei harga dan perbandingan spesifikasi di pasaran."
                : "Berikut adalah teknologi tepat guna untuk pengolahan gula kelapa yang kami rekomendasikan, mencakup alat penyaringan nira dan pembuatan gula."}
            </p>
            <div className="catalog-grid">
              {currentTools.slice(0, 5).map((tool) => (
                <CatalogCard key={tool.slug} tool={tool} />
              ))}
            </div>
            <div className="catalog-cta">
              <Link className="button" href="/teknologi">
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
