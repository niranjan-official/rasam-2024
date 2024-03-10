import NavBar from "@/components/pages/NavBar";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Events from "@/components/pages/Events";
import Gallery from "@/components/pages/Gallery";
import Footer from "@/components/pages/Footer";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
     <NavBar/>
     <Home/>
     <About/>
     <Events/>
     <Gallery/>
     <Footer/>
    </main>
  );
}
