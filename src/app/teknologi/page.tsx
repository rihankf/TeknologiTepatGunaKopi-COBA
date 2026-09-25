"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import CatalogCard from "@/components/ui/CatalogCard";
import { kopiTools, gulaKelapaTools } from "@/data";
import { useState, useMemo } from "react";

const KOPI_CATEGORIES = ["Pengeringan", "Pengukuran", "Pemilahan"];
const GULA_CATEGORIES = ["Penyaringan", "Pembuatan"];
const ALL_TOOLS = [...kopiTools, ...gulaKelapaTools];

/** Parse price string like "Rp. 19.560.000.-" into a number */
function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^0-9]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}

/** Format number to Rupiah display */
function formatRupiah(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

export default function TeknologiPage() {
  const [search, setSearch] = useState("");
  const [activeKomoditas, setActiveKomoditas] = useState("Semua");
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(200_000_000);
  const [sortBy, setSortBy] = useState("relevansi");

  // Determine available stages based on selected komoditas
  const availableStages = useMemo(() => {
    if (activeKomoditas === "Biji Kopi") return KOPI_CATEGORIES;
    if (activeKomoditas === "Gula Kelapa") return GULA_CATEGORIES;
    return [...KOPI_CATEGORIES, ...GULA_CATEGORIES];
  }, [activeKomoditas]);

  // When switching komoditas, reset selected stages
  const handleKomoditasChange = (val: string) => {
    setActiveKomoditas(val);
    setSelectedStages([]);
  };

  // Toggle a stage checkbox
  const toggleStage = (stage: string) => {
    setSelectedStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  // Select/deselect all stages
  const toggleAllStages = () => {
    if (selectedStages.length === availableStages.length) {
      setSelectedStages([]);
    } else {
      setSelectedStages([...availableStages]);
    }
  };

  const filteredTools = useMemo(() => {
    let result = ALL_TOOLS.filter((tool) => {
      // Search filter
      const matchesSearch =
        search === "" ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase());

      // Komoditas filter
      let matchesKomoditas = true;
      if (activeKomoditas === "Biji Kopi") {
        matchesKomoditas = KOPI_CATEGORIES.includes(tool.category);
      } else if (activeKomoditas === "Gula Kelapa") {
        matchesKomoditas = GULA_CATEGORIES.includes(tool.category);
      }

      // Stage filter (if any selected)
      const matchesStage =
        selectedStages.length === 0 || selectedStages.includes(tool.category);

      // Price filter
      const price = parsePrice(tool.priceRange);
      const matchesPrice = price === 0 || price <= maxPrice;

      return matchesSearch && matchesKomoditas && matchesStage && matchesPrice;
    });

    // Sorting
    if (sortBy === "harga-asc") {
      result = [...result].sort(
        (a, b) => parsePrice(a.priceRange) - parsePrice(b.priceRange)
      );
    } else if (sortBy === "harga-desc") {
      result = [...result].sort(
        (a, b) => parsePrice(b.priceRange) - parsePrice(a.priceRange)
      );
    } else if (sortBy === "nama") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, activeKomoditas, selectedStages, maxPrice, sortBy]);

  const handleReset = () => {
    setSearch("");
    setActiveKomoditas("Semua");
    setSelectedStages([]);
    setMaxPrice(200_000_000);
    setSortBy("relevansi");
  };

  const rangePct = Math.min((maxPrice / 200_000_000) * 100, 100);

  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="catalog section">
          <div className="container">
            <SectionHeading eyebrow="" title="Cari Produk" />
            <p className="catalog-subtitle" style={{ marginBottom: "20px" }}>
              Alat utama yang direkomendasikan
            </p>

            {/* ── Download Catalog Cards ── */}
            <div className="commodity-selector" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <a
                href="/katalog-produk.pdf"
                download
                className="commodity-card commodity-download"
                style={{
                  background:
                    "linear-gradient(135deg, #4f200d 0%, #7c3a12 100%)",
                  borderColor: "#ff9a00",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <span className="commodity-icon">☕</span>
                <div className="commodity-info">
                  <h2>Unduh Katalog Biji Kopi</h2>
                </div>
              </a>

              <a
                href="/katalog-produk.pdf"
                download
                className="commodity-card commodity-download"
                style={{
                  background:
                    "linear-gradient(135deg, #4f200d 0%, #7c3a12 100%)",
                  borderColor: "#ff9a00",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <span className="commodity-icon">🥥</span>
                <div className="commodity-info">
                  <h2>Unduh Katalog Gula Kelapa</h2>
                </div>
              </a>
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Cari produk, kategori, atau pemasok..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="teknologi-search"
            />

            {/* Sidebar + Grid Layout */}
            <div className="teknologi-layout">
              {/* ── Sidebar Filters ── */}
              <aside className="teknologi-sidebar">
                <h3 className="sidebar-title">Filter Produk</h3>

                {/* Kategori / Komoditas */}
                <div className="filter-group">
                  <span className="filter-label">Kategori</span>
                  <select
                    className="filter-select"
                    value={activeKomoditas}
                    onChange={(e) => handleKomoditasChange(e.target.value)}
                  >
                    <option value="Semua">Semua Kategori</option>
                    <option value="Biji Kopi">Biji Kopi</option>
                    <option value="Gula Kelapa">Gula Kelapa</option>
                  </select>
                </div>

                {/* Rentang Harga */}
                <div className="filter-group">
                  <span className="filter-label">Rentang Harga</span>
                  <div className="filter-range-wrapper">
                    <input
                      type="range"
                      min={0}
                      max={200_000_000}
                      step={1_000_000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="filter-range"
                      style={
                        { "--range-pct": `${rangePct}%` } as React.CSSProperties
                      }
                    />
                    <div className="filter-range-labels">
                      <span>Rp 0</span>
                      <span>{formatRupiah(maxPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Tahapan Proses */}
                <div className="filter-group">
                  <span className="filter-label">Tahapan Proses</span>
                  <div className="filter-checkbox-list">
                    <label className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={
                          selectedStages.length === availableStages.length &&
                          availableStages.length > 0
                        }
                        onChange={toggleAllStages}
                      />
                      <strong>Semua Tahapan</strong>
                    </label>
                    {availableStages.map((stage) => (
                      <label key={stage} className="filter-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedStages.includes(stage)}
                          onChange={() => toggleStage(stage)}
                        />
                        {stage}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                <button className="filter-reset" onClick={handleReset}>
                  Reset Filter
                </button>
              </aside>

              {/* ── Main Product Grid ── */}
              <div className="teknologi-main">
                <div className="teknologi-top-bar">
                  <div>
                    <h2>
                      {activeKomoditas === "Semua"
                        ? "Semua Produk"
                        : activeKomoditas}
                    </h2>
                    <p className="product-count">
                      {filteredTools.length} produk ditemukan
                    </p>
                  </div>
                  <select
                    className="teknologi-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="relevansi">Relevansi</option>
                    <option value="nama">Nama A-Z</option>
                    <option value="harga-asc">Harga Terendah</option>
                    <option value="harga-desc">Harga Tertinggi</option>
                  </select>
                </div>

                {filteredTools.length > 0 ? (
                  <div className="catalog-grid">
                    {filteredTools.map((tool) => (
                      <CatalogCard key={tool.slug} tool={tool} />
                    ))}
                  </div>
                ) : (
                  <div className="teknologi-empty">
                    <div className="teknologi-empty-icon">🔍</div>
                    <h3>Tidak ada produk ditemukan</h3>
                    <p>
                      Coba ubah kata kunci atau sesuaikan filter pencarian Anda
                    </p>
                    <button className="button" onClick={handleReset}>
                      Lihat Semua Produk
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
