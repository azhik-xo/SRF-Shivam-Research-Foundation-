import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import VisionMission from "./sections/VissionMission";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <main className="">
        {/* Hero Section */}
        <Hero />
        {/*our vission section*/}
        <VisionMission />
        <section className="min-h-screen bg-white"></section>
      </main>
    </div>
  );
};

export default Home;
