import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#edf3f7]">
      <Navbar />
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
