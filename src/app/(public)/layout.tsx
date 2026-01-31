import Breadcrumb from "@/components/layout/BreadCrumb";
import Navbar from "@/components/layout/Navbar";

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
    </>
  );
}
