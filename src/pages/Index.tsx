import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
// Imported directly (not lazy) so every section is included in the prerendered HTML
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Workflow />
      <Features />
      <AppPreview />
      <Footer />
    </main>
  );
};

export default Home;
