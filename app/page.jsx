import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Events from "@/components/pages/Events";
import Gallery from "@/components/pages/Gallery";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import RunningTheme from "@/components/RunningTheme";
import ProShow from "@/components/pages/ProShow";


const fetchData = async () => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "images"));
  querySnapshot.forEach((doc) => {
    data.push({category: doc.id, images: doc.data()})
  });
  return data;
};

export default async function Main() {

  const data = await fetchData();

  return (
    <main className="flex h-max flex-col bg-black">

      <Home />
      <RunningTheme/>
      <About />
      <Events images={data[0]}/>
      <ProShow/>
      <Gallery gallery={data[1]}/>
    </main>
  );
}
