import MainNav from "./MainNav";
import TopAnnouncementBar from "./TopAnnouncementBar";


export default function Navbar() {
  return (
    <header className="w-full border-b">
      <TopAnnouncementBar />
      <MainNav />
    </header>
  );
}
