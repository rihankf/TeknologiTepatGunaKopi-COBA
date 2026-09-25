"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionHeading from "@/components/ui/SectionHeading";
import CommoditySelector, {
  type Commodity,
} from "@/components/ui/CommoditySelector";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function TentangPage() {
  const [commodity, setCommodity] = useState<Commodity>("kopi");
  const isKopi = commodity === "kopi";

  return (
    <>
      <Header />
      <main className="inner-page">
        {/* ── Commodity Selector ── */}
        <section className="commodities section">
          <div className="container">
            <SectionHeading eyebrow="Komoditas" title="Komoditas Unggulan" />
            <p
              className="problems-subtitle"
              style={{ marginBottom: "40px" }}
            >
              Pilih komoditas unggulan untuk melihat rangkuman masalah, latar belakang, dan tujuan proyek
            </p>
            <CommoditySelector active={commodity} onChange={setCommodity} />
          </div>
        </section>

        {/* ── Rangkuman Masalah ── */}
        <section className="problems-section section">
          <div className="container">
            <SectionHeading eyebrow="Identifikasi" title="Rangkuman Masalah" />
            <p
              className="problems-subtitle"
              style={{
                textAlign: "center",
                margin: "20px auto 30px",
                maxWidth: "900px",
                lineHeight: 1.8,
              }}
            >
              {isKopi
                ? "Berdasarkan identifikasi permasalahan pascapanen Biji Kopi, terdapat tiga masalah utama: pengeringan, pengukuran kadar air, dan pemilahan kualitas biji"
                : "Berdasarkan identifikasi permasalahan pengolahan gula kelapa, terdapat dua masalah utama: penyaringan nira dan proses pembuatan gula"}
            </p>

            {/* Timeline */}
            {isKopi ? (
              <div
                className="timeline"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  marginTop: "30px",
                  marginBottom: "40px",
                }}
              >
                <div
                  className="timeline-line"
                  style={{ left: "16.66%", right: "16.66%" }}
                />
                <div className="timeline-item timeline-active">
                  <div className="timeline-node">
                    <span className="timeline-month" style={{ fontSize: "20px" }}>☀️</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">Tahap 1</span>
                    <h3>Pengeringan</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Ketergantungan pada sinar matahari menyebabkan proses pengeringan rentan terhadap perubahan cuaca.
                      Keterbatasan lahan dan kapasitas pengeringan juga menjadi hambatan bagi petani.
                    </p>
                  </div>
                </div>
                <div className="timeline-item timeline-active">
                  <div className="timeline-node">
                    <span className="timeline-month" style={{ fontSize: "20px" }}>💧</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">Tahap 2</span>
                    <h3>Pengukuran</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Harga alat ukur yang relatif mahal membuat sebagian petani masih mengandalkan pemeriksaan manual atau berdasarkan pengalaman,
                      sehingga akurasi pengukuran menjadi tantangan.
                    </p>
                  </div>
                </div>
                <div className="timeline-item timeline-active">
                  <div className="timeline-node">
                    <span className="timeline-month" style={{ fontSize: "20px" }}>⚖️</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">Tahap 3</span>
                    <h3>Pemilahan</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Pemilahan dengan sistem kering sulit membedakan biji berdasarkan berat jenis,
                      sedangkan sistem basah membutuhkan banyak air dan memperpanjang proses pengeringan.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="timeline"
                style={{
                  gridTemplateColumns: "repeat(2, 1fr)",
                  marginTop: "30px",
                  marginBottom: "40px",
                }}
              >
                <div
                  className="timeline-line"
                  style={{ left: "25%", right: "25%" }}
                />
                <div className="timeline-item timeline-active">
                  <div className="timeline-node">
                    <span className="timeline-month" style={{ fontSize: "20px" }}>🧹</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">Tahap 1</span>
                    <h3>Penyaringan</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Nira kelapa yang baru ditampung mengandung kotoran fisik seperti serangga dan serat bunga.
                      Penyaringan manual menggunakan kain biasa tidak mampu menyaring partikel halus,
                      mempengaruhi kejernihan dan kualitas akhir gula kelapa.
                    </p>
                  </div>
                </div>
                <div className="timeline-item timeline-active">
                  <div className="timeline-node">
                    <span className="timeline-month" style={{ fontSize: "20px" }}>🍯</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">Tahap 2</span>
                    <h3>Pembuatan</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Proses pemasakan nira masih dilakukan secara manual dengan pengadukan tangan selama 4-6 jam.
                      Distribusi panas tidak merata dan pencetakan manual menghasilkan bentuk tidak seragam.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Latar Belakang ── */}
        <section className="about section">
          <div className="container">
            <SectionHeading title={isKopi ? "Mengapa Proyek Ini Penting?" : "Mengapa Gula Kelapa Perlu Teknologi Tepat Guna?"} />
            <div className="about-grid" style={{ marginTop: "40px" }}>
              <div style={{ textAlign: "center" }}>
                {isKopi ? (
                  <Image
                    src="/images/sejarah-kopi.jpg"
                    alt="Ilustrasi Sejarah Biji Kopi Indonesia"
                    width={800}
                    height={533}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "800px",
                      borderRadius: "16px",
                      boxShadow: "var(--shadow-md)",
                      margin: "0 auto",
                    }}
                  />
                ) : (
                  <Image
                    src="/images/sejarah-gulakelapa.png"
                    alt="Ilustrasi Pengolahan Gula Kelapa Indonesia"
                    width={800}
                    height={533}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "800px",
                      borderRadius: "16px",
                      boxShadow: "var(--shadow-md)",
                      margin: "0 auto",
                    }}
                  />
                )}
              </div>
              <div className="about-copy" style={{ paddingTop: "0" }}>
                {isKopi ? (
                  <>
                    <p>
                      Biji Kopi melalui proses panjang mulai dari budidaya, panen, pascapanen, hingga roasting.
                      Pada tahap pascapanen, petani masih menghadapi beberapa kendala utama, terutama dalam pengeringan, pengukuran kadar air, dan pemilahan kualitas Biji Kopi.
                      Ketiga hal tersebut menjadi bagian penting karena menentukan kondisi biji sebelum masuk ke tahap pengolahan berikutnya.
                    </p>
                    <p>
                      Proses pengeringan masih banyak mengandalkan sinar matahari dengan cara menghamparkan Biji Kopi secara langsung, sehingga sangat dipengaruhi oleh cuaca, keterbatasan lahan, kapasitas pengeringan, dan biaya fasilitas seperti <i>greenhouse</i> atau <i>sun dryer</i>.
                      Pada musim hujan, kadar air Biji Kopi lebih sulit diturunkan hingga sekitar 10–11%. Sementara itu, alat pengukur kadar air yang tersedia masih relatif mahal, sehingga sebagian petani mengandalkan sentuhan atau pengalaman untuk memperkirakan kondisi biji.
                      Cara ini kurang akurat terutama bagi petani baru.
                    </p>
                    <p>
                      Pada pemilahan kualitas, sistem kering lebih sederhana tetapi belum mudah memisahkan biji berdasarkan berat jenis, sehingga biji dapat tercampur.
                      Sistem basah dapat memisahkan berdasarkan berat jenis. Biji yang tenggelam cenderung memiliki kualitas lebih baik, sedangkan yang mengapung cenderung lebih rendah atau kopong.
                      Karena itu, terdapat peluang untuk mengembangkan metode pemilahan berdasarkan berat jenis tanpa penggunaan air dalam jumlah besar.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Gula kelapa merupakan salah satu komoditas unggulan Indonesia yang memiliki potensi pasar besar, baik domestik maupun ekspor.
                      Indonesia adalah produsen gula kelapa terbesar di dunia, namun sebagian besar proses pengolahan masih dilakukan secara tradisional oleh petani kecil.
                    </p>
                    <p>
                      Proses pengolahan gula kelapa dimulai dari penyadapan nira kelapa, penyaringan, pemasakan, hingga pencetakan.
                      Pada tahap penyaringan, pengrajin masih menggunakan kain atau saringan sederhana yang tidak mampu menghilangkan partikel halus dan mikroorganisme.
                      Hal ini mempengaruhi kejernihan, kebersihan, dan masa simpan gula kelapa.
                    </p>
                    <p>
                      Pada tahap pembuatan, proses pemasakan nira dilakukan di atas tungku terbuka selama 4-6 jam dengan pengadukan manual.
                      Metode ini tidak efisien, menghasilkan kualitas yang tidak konsisten, dan berisiko gosong.
                      Pencetakan manual juga menghasilkan bentuk dan ukuran yang bervariasi, menurunkan daya saing produk di pasar modern dan ekspor.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tujuan ── */}
        <section
          className="objectives-section section"
          style={{ paddingTop: "40px", paddingBottom: "60px" }}
        >
          <div className="container">
            <SectionHeading title="Tujuan yang Ingin dicapai?" />
            <div
              className="objectives-grid"
              style={{ marginTop: "60px", gap: "20px" }}
            >
              <div className="objective-card">
                <div className="objective-number">01</div>
                <div className="objective-illustration">
                  <Image
                    src="/images/obj-identifikasi.jpg"
                    alt="Ilustrasi Identifikasi Kebutuhan"
                    width={400}
                    height={300}
                  />
                </div>
                <h3>Identifikasi Kebutuhan</h3>
                <p>
                  {isKopi
                    ? <>Mengidentifikasi kebutuhan dan permasalahan <i>stakeholder</i> melalui wawancara serta penggalian informasi dari petani, pelaku usaha, dan pihak terkait dalam rantai pasok Biji Kopi</>
                    : "Mengidentifikasi kebutuhan dan permasalahan pengrajin gula kelapa melalui wawancara serta observasi langsung di sentra produksi gula kelapa."}
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">02</div>
                <div className="objective-illustration">
                  <Image
                    src="/images/obj-survei.jpg"
                    alt="Ilustrasi Survei Teknologi"
                    width={400}
                    height={300}
                  />
                </div>
                <h3>Survei Teknologi</h3>
                <p>
                  {isKopi
                    ? "Melakukan survei terhadap teknologi alat panen Biji Kopi yang tersedia di pasaran dari yang paling sederhana hingga yang canggih lengkap dengan spesifikasi dan harga"
                    : "Melakukan survei terhadap teknologi alat pengolahan gula kelapa yang tersedia di pasaran, mulai dari alat penyaringan hingga mesin cetak modern."}
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">03</div>
                <div className="objective-illustration">
                  <Image
                    src="/images/obj-rekomendasi.jpg"
                    alt="Ilustrasi Rekomendasi Solusi"
                    width={400}
                    height={300}
                  />
                </div>
                <h3>Rekomendasi Solusi</h3>
                <p>
                  Merekomendasikan solusi teknologi yang tepat guna bukan yang
                  paling mahal atau canggih, tetapi yang paling sesuai dengan
                  kebutuhan
                </p>
              </div>
              <div className="objective-card">
                <div className="objective-number">04</div>
                <div className="objective-illustration">
                  <Image
                    src="/images/obj-katalog.jpg"
                    alt="Ilustrasi Katalog"
                    width={400}
                    height={300}
                  />
                </div>
                <h3>Katalog</h3>
                <p>
                  Menyusun katalog lengkap berisi solusi dan usulan berdasarkan
                  kajian
                </p>
              </div>
            </div>
            <div className="catalog-cta" style={{ textAlign: "center", marginTop: "50px" }}>
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
