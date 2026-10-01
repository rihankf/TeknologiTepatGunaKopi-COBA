import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Teknologi Tepat Guna — Komoditas Unggulan Indonesia",
  description:
    "Platform sistem informasi dan katalog teknologi pasca panen untuk komoditas Biji Kopi dan Gula Kelapa. Mengidentifikasi kebutuhan stakeholder dan merekomendasikan solusi yang terjangkau.",
};

export default function Home() {
  return <HomeContent />;
}
