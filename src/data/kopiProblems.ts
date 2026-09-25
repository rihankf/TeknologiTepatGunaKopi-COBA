import type { Problem } from "@/types";

export const kopiProblems: Problem[] = [
  {
    icon: "☀️",
    title: "Pengeringan Bergantung pada Cuaca",
    description:
      "Pengeringan masih banyak dilakukan dengan mengandalkan sinar matahari secara langsung. Cara ini menghadapi kendala berupa cuaca, keterbatasan lahan, kapasitas pengeringan, serta biaya pembangunan fasilitas seperti <i>greenhouse</i> atau <i>sun dryer</i>.",
    impact:
      "Pada musim hujan, kadar air Biji Kopi sulit diturunkan hingga sekitar 10–11%. Apabila Biji Kopi diproses lebih lanjut ketika kadar air masih terlalu tinggi, kualitas dan cita rasa dapat menurun.",
  },
  {
    icon: "💧",
    title: "Pengukuran Kadar Air Belum Terjangkau",
    description:
      "Alat pengukur kadar air sudah tersedia, tetapi harganya relatif mahal. Sebagian petani masih mengandalkan pemeriksaan manual.",
    impact:
      "Hasil pengukuran menjadi kurang presisi, terutama bagi petani baru. Pengukuran yang lebih akurat terkadang baru dilakukan ketika Biji Kopi diperiksa oleh pengepul.",
  },
  {
    icon: "⚖️",
    title: "Pemilahan Kualitas Biji Belum Optimal",
    description:
      "Sistem kering lebih sederhana, tetapi tidak mudah memisahkan biji berdasarkan berat jenis sehingga biji berkualitas baik dan biji kopong dapat tercampur. Sistem basah mampu melakukan pemisahan berdasarkan berat jenis, tetapi membutuhkan banyak air dan kembali meningkatkan kadar air biji.",
    impact:
      "Proses pengeringan menjadi lebih lama dan kualitas hasil pemilahan belum optimal.",
  },
];
