import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <p>404</p>
        <h1>Page not found</h1>
        <Link className="button" href="/">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
