import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import React from "react";

const getData = async (eventNo) => {
  const docRef = doc(db, "images", "events");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const dataArray = docSnap.data().image;
    const eventData = dataArray[eventNo];
    return eventData;
    console.log(eventData);
  } else {
    console.log("No such document!");
    return null;
  }
};

const page = async ({ params }) => {
  const data = await getData(params.eventNo);

  return (
    <div className="w-full flex flex-col sm:flex-row min-h-screen md:h-screen gap-4 p-4 pt-16 lg:px-28 bg-black text-white pb-6 ">
      <div className="flex w-full h-auto sm:w-1/2 md:px-16">
        <Image
          height={100}
          width={100}
          style={{ width: "100%", height: "auto" }}
          alt={"..."}
          src={data.image}
        />
      </div>
      <div className="flex flex-col sm:w-1/2">
        <h1 className="text-4xl font-semibold">{data.name}</h1>
        <p className="mt-4">{data.about}</p>
        <div className="flex flex-col mt-4">
          <h2 className="text-3xl mb-2">Event Details</h2>
          <h3>Date: {data.date}</h3>
          <h3>Reg Fee: {data.fee}/-</h3>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="text-3xl mb-2">Organizers</h1>
          {Object.keys(data.contact).map((key, index) => (
            <h3 className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              {key} : {data.contact[key]}
            </h3>
          ))}
        </div>
        <a
          href={data.link}
          className="flex justify-center sm:w-56 cursor-pointer p-2 bg-red-500 text-white rounded-lg mt-4 hover:bg-red-700"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default page;
