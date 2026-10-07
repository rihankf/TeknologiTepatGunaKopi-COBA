import type { Metadata } from "next";
import TentangContent from "./TentangContent";

export const metadata: Metadata = {
  title: "Tentang Proyek — Teknologi Tepat Guna",
  description:
    "Pelajari latar belakang, identifikasi masalah, dan tujuan proyek teknologi tepat guna untuk komoditas Biji Kopi dan Gula Kelapa Indonesia.",
};

export default function TentangPage() {
  return <TentangContent />;
}
