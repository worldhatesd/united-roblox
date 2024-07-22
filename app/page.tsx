"use client";
import { MainHeroCarousel } from "@/components/main-hero-carousel";
import axios from "axios";
import dotenv from "dotenv";
import { Map, Plane, Users } from "lucide-react";
import { useState } from "react";

dotenv.config();

export default async function Home() {
  const [userCount, setUserCount] = useState(10);
  let destinationCount = 9;
  const groupId = process.env.groupId;

  const response = await axios.get(
    `http://groups.roblox.com/v1/groups/15667508`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
          "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
      },
      withCredentials: false,
    }
  );

  const memerCount = response.data.memberCount;
  console.log(response.data.memberCount);
  setUserCount(memerCount);
  return (
    <>
      <MainHeroCarousel />
      <h1 className="text-3xl font-bold items-center text-center pt-4">
        Our Stats
      </h1>
      <main className="flex flex-row items-center justify-between px-72 h-48">
        <div className="flex flex-col gap-1 items-center">
          <Users size={48} />
          <h1 className="text-6xl font-bold pt-3">{}</h1>
          <h1 className="text-3xl font-bold">members</h1>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Plane size={48} />
          <h1 className="text-4xl font-bold">{userCount}</h1>
          <h1 className="text-4xl font-bold">aircrafts</h1>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Map size={48} />
          <h1 className="text-4xl font-bold">{destinationCount}</h1>
          <h1 className="text-4xl font-bold">destinations</h1>
        </div>
      </main>
      <hr className="w-28 items-center align-middle text-center m-auto h-[40px] border-none" />
    </>
  );
}
