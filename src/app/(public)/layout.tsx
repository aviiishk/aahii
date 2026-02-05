import Breadcrumb from "@/components/layout/BreadCrumb";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
