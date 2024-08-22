"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import PastHero from "@/app/components/events-past/PastHero";
import { useParams } from "next/navigation";
import Spinner from "@/app/components/spinner/Spinner";


const PastDetailsComp = () => {
  const { id } = useParams();
  const [pastData, setPastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_EVENT_INFO_URI = process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI;

  useEffect(() => {
    const fetchPastData = async () => {
      try {
        const response = await fetch(BACKEND_EVENT_INFO_URI);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const pastData = data.find((past) => past.id === id);
        if (pastData) {
          setPastData(pastData);
        } else {
          setError(new Error("Past data not found"));
        }
      } catch (error) {
        console.error("Error fetching past data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPastData();
    }
  }, [id, BACKEND_EVENT_INFO_URI]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pastData) {
    return <div>Past event not found</div>;
  }

  return (
    <main className="bg-img pt-[6.25rem]">
      <Header />
      <PastHero pastData={pastData} />
      <Footer />
    </main>
  );
};

export default PastDetailsComp;
