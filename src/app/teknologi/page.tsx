import type { Metadata } from "next";
import { Suspense } from "react";
import TeknologiContent from "./TeknologiContent";

export const metadata: Metadata = {
  title: "Katalog Teknologi — Teknologi Tepat Guna",
  description:
    "Cari dan bandingkan alat teknologi tepat guna untuk pasca panen Biji Kopi dan pengolahan Gula Kelapa. Lengkap dengan spesifikasi, harga, dan link pembelian.",
};

export default function TeknologiPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeknologiContent />
    </Suspense>
  );
}
