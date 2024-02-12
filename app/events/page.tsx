"use client";
import Band from "../../public/images/band.png";
import Dristi from "../../public/images/dristi.jpg";
import DanceGroup from "../../public/images/dance-group.png";
import Designathon from "../../public/images/designathon.png";
import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { useState } from "react";
import Image from "next/image";

export default function Events() {
  const [activeTab, setActiveTab] = useState("ALL");

  const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE"];

  const eventlist = [
    {
      name: "dristi",
      img: Dristi,
      branch: "EEE",
    },
    {
      name: "band 1",
      img: Band,
      branch: "CE",
    },
    {
      name: "dance group",
      img: DanceGroup,
      branch: "ME",
    },
    {
      name: "designathon",
      img: Designathon,
      branch: "CSE",
    },
  ];

  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="events" />

      <SectionLayout>
        <div className="flex flex-col gap-10">
          <div className="font-primary text-6xl tracking-wide">
            witness the <span className="text-primary">tech-culture</span>{" "}
            extravaganza.
          </div>
          <div className="font-secondary text-xl">
            Explore, Learn, and Enjoy: The Events of Techletics '24
          </div>
          <div className="mx-auto flex items-center justify-between rounded-full border-2 border-primary p-2 font-primary text-3xl text-primary">
            {branches.map((branch) => (
              <div
                key={branch}
                className={
                  activeTab === branch
                    ? "rounded-full bg-primary px-10 py-2 text-tertiary"
                    : "px-10"
                }
                onClick={() => setActiveTab(branch)}
              >
                {branch}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-evenly">
            {eventlist
              .filter(
                (event) => activeTab === "ALL" || event.branch === activeTab,
              )
              .map((event) => (
                <div className="h-64 w-64 rounded-xl bg-primary p-2 transition-all duration-200 ease-in hover:scale-125">
                  <Image
                    className="h-full w-full rounded-xl grayscale hover:grayscale-0"
                    src={event.img}
                    alt={event.name}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
