import type { Tool } from "@/types";

export const gulaKelapaTools: Tool[] = [
  {
    slug: "saringan-nira-stainless-steel",
    name: "Saringan Nira Stainless Steel",
    category: "Penyaringan",
    image: "/images/placeholder-penyaringan.svg",
    problem:
      "Nira kelapa yang baru ditampung mengandung kotoran seperti serangga, serat bunga, dan partikel lain yang perlu disaring sebelum diproses.",
    description:
      "Saringan berbahan stainless steel food-grade dengan mesh halus 80-100 untuk menyaring nira kelapa dari kotoran fisik. Dilengkapi pegangan ergonomis dan dapat digunakan berulang kali.",
    priceRange: "Rp. 285.000.-",
    buyLink: "#",
    specs: [
      { label: "Material", value: "Stainless Steel 304 Food Grade" },
      { label: "Ukuran Mesh", value: "80-100 mesh" },
      { label: "Diameter", value: "30 cm" },
      { label: "Kapasitas", value: "50-100 liter/jam" },
      { label: "Dimensi", value: "30 x 30 x 15 cm" },
    ],
  },
  {
    slug: "mesin-filter-nira-kelapa",
    name: "Mesin Filter Nira Kelapa",
    category: "Penyaringan",
    image: "/images/placeholder-penyaringan.svg",
    problem:
      "Penyaringan manual memakan waktu lama dan tidak efisien untuk produksi skala menengah hingga besar.",
    description:
      "Mesin penyaring nira otomatis dengan sistem pompa vakum dan filter bertingkat. Mampu menyaring nira dalam jumlah besar dengan hasil lebih bersih dibanding penyaringan manual.",
    priceRange: "Rp. 8.750.000.-",
    buyLink: "#",
    specs: [
      { label: "Kapasitas", value: "200-500 liter/jam" },
      { label: "Sistem Filter", value: "Filter bertingkat 3 tahap" },
      { label: "Sumber Energi", value: "Listrik 220V" },
      { label: "Daya", value: "0,75 kW" },
      { label: "Dimensi", value: "60 x 40 x 80 cm" },
    ],
  },
  {
    slug: "filter-press-nira-kelapa",
    name: "Filter Press Nira Kelapa",
    category: "Penyaringan",
    image: "/images/placeholder-penyaringan.svg",
    problem:
      "Hasil penyaringan sederhana masih menyisakan partikel halus yang mempengaruhi kejernihan dan kualitas gula kelapa.",
    description:
      "Mesin filter press dengan sistem tekanan hidrolik untuk penyaringan nira kelapa secara presisi. Menghasilkan nira yang sangat jernih dan bebas partikel halus.",
    priceRange: "Rp. 15.500.000.-",
    buyLink: "#",
    specs: [
      { label: "Kapasitas", value: "500-1000 liter/jam" },
      { label: "Tekanan Operasi", value: "4-6 bar" },
      { label: "Jumlah Plate", value: "10-15 plate" },
      { label: "Material", value: "Stainless Steel 316" },
      { label: "Dimensi", value: "120 x 50 x 90 cm" },
    ],
  },
  {
    slug: "wajan-pengolahan-gula-kelapa",
    name: "Wajan Pengolahan Gula Kelapa",
    category: "Pembuatan",
    image: "/images/placeholder-pembuatan.svg",
    problem:
      "Proses pemasakan nira secara tradisional menggunakan wajan biasa yang tidak merata panasnya, menyebabkan gula gosong atau kualitas tidak konsisten.",
    description:
      "Wajan khusus pengolahan gula kelapa berbahan besi cor tebal dengan distribusi panas merata. Dilengkapi kompor gas bertekanan tinggi untuk efisiensi pemasakan nira.",
    priceRange: "Rp. 3.200.000.-",
    buyLink: "#",
    specs: [
      { label: "Material", value: "Besi Cor Tebal 8mm" },
      { label: "Diameter", value: "80-100 cm" },
      { label: "Kapasitas", value: "50-80 liter nira" },
      { label: "Sumber Panas", value: "Gas LPG / Kayu Bakar" },
      { label: "Berat", value: "25-35 kg" },
    ],
  },
  {
    slug: "mesin-pengaduk-nira-otomatis",
    name: "Mesin Pengaduk Nira Otomatis",
    category: "Pembuatan",
    image: "/images/placeholder-pembuatan.svg",
    problem:
      "Pengadukan nira secara manual selama berjam-jam melelahkan dan berisiko tidak merata, sehingga gula kelapa mudah gosong.",
    description:
      "Mesin pengaduk otomatis dengan motor listrik dan paddle berbentuk spiral untuk mengaduk nira secara konsisten selama proses pemasakan. Kecepatan putar dapat diatur sesuai kekentalan.",
    priceRange: "Rp. 12.800.000.-",
    buyLink: "#",
    specs: [
      { label: "Kapasitas Wadah", value: "80-120 liter" },
      { label: "Kecepatan Putar", value: "20-60 RPM (adjustable)" },
      { label: "Sumber Energi", value: "Listrik 220V / 1 Phase" },
      { label: "Daya Motor", value: "1,5 kW" },
      { label: "Dimensi", value: "100 x 100 x 120 cm" },
    ],
  },
  {
    slug: "mesin-cetak-gula-kelapa",
    name: "Mesin Cetak Gula Kelapa",
    category: "Pembuatan",
    image: "/images/placeholder-pembuatan.svg",
    problem:
      "Pencetakan gula kelapa secara manual menghasilkan bentuk dan ukuran yang tidak seragam, menurunkan nilai jual produk.",
    description:
      "Mesin pencetak gula kelapa semi-otomatis dengan cetakan modular berbagai ukuran. Menghasilkan gula kelapa cetak dengan bentuk seragam dan tampilan profesional.",
    priceRange: "Rp. 9.500.000.-",
    buyLink: "#",
    specs: [
      { label: "Kapasitas Produksi", value: "200-400 cetak/jam" },
      { label: "Variasi Cetakan", value: "Bulat, Kotak, Silinder" },
      { label: "Material Cetakan", value: "Aluminium Food Grade" },
      { label: "Sistem", value: "Semi-Otomatis Pneumatik" },
      { label: "Dimensi", value: "80 x 60 x 100 cm" },
    ],
  },
];
