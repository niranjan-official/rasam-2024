import NavBar from "@/components/pages/NavBar";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Events from "@/components/pages/Events";
import Gallery from "@/components/pages/Gallery";
import Footer from "@/components/pages/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

// const querySnapshot = await getDocs(collection(db, "images"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// })

export default function Main() {
  return (
    <main className="flex h-screen flex-col home-bg overflow-y-scroll">
      <NavBar />
      <Home />
      <About />
      <Events />
      <Gallery />
      <Footer />
    </main>
  );
}
