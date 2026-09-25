import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/logo.png"
              alt="Petrolab"
              width={300}
              height={90}
              style={{
                width: "auto",
                height: "60px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          </Link>
          <p>
            Platform teknologi tepat guna untuk komoditas unggulan Indonesia.
            Mengidentifikasi kebutuhan stakeholder dan merekomendasikan solusi
            teknologi yang terjangkau dan berdampak.
          </p>
        </div>
        <div className="footer-map" style={{ width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4979359814547!2d106.78542107499354!3d-6.584855093408716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c539b20fd24f%3A0x77904b38edf6652e!2sPETROLAB%20Bogor!5e0!3m2!1sid!2sid!4v1787738113509!5m2!1sid!2sid"
            width="100%"
            height="165"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          ©2026.Teknologi Tepat Guna Komoditas Unggulan Indonesia.
        </div>
      </div>
    </footer>
  );
}
