import NavBar from "@/components/pages/NavBar";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Events from "@/components/pages/Events";
import Gallery from "@/components/pages/Gallery";
import Footer from "@/components/pages/Footer";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const fetchData = async () => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "images"));
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    data.push({category: doc.id, images: doc.data()})
  });
  return data;
};

export default async function Main() {

  const data = await fetchData();
  //console.log("Events: "+data[0]);

  return (
    <main className="flex h-screen flex-col bg-black overflow-y-scroll">
      <NavBar />
      <Home />
      <About />
      <Events images={data[0]}/>
      <Gallery gallery={data[1]}/>
      <Footer />
    </main>
  );
}
