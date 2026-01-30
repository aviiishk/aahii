import BrandingBar from "./BrandingBar";
import MainNav from "./MainNav";
import TopUtilityBar from "./TopUtilityBar";


export default function Navbar() {
  return (
    <header className="w-full border-b">
      <TopUtilityBar />
      <BrandingBar />
      <MainNav />
    </header>
  );
}
