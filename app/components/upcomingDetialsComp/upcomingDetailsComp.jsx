"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import UpcomingHero from "@/app/components/events-upcoming/UpcomingHero";
import Spinner from "@/app/components/spinner/Spinner";
import ProceedCancelBtn from "@/app/components/proceed-cancel/ProceedCancelBtn";


const UpcomingDetailsComp = () => {
  const router = useRouter();
  const { id } = useParams();
  const [upcomingData, setUpcomingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BACKEND_EVENT_INFO_URI = process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI;

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showProceedCancel, setShowProceedCancel] = useState(false);
  const [targetURL, setTargetURL] = useState("");

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = ""; // Trigger confirmation dialog
      }
    };

    const handleNavigation = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault(); // Prevent the default back navigation
        const confirmLeave = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?",
        );
        setShowProceedCancel(true);

        if (confirmLeave) {
          // User confirmed; navigate back
          window.history.back();
        } else {
          // User canceled; stay on the same page
          // (Do nothing as the default action is already prevented)
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleNavigation);

    const handleLinkClick = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        setTargetURL(event.currentTarget.href); // Store the target URL
        setShowProceedCancel(true);
      }
    };

    // Add event listener for link clicks
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleNavigation);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [hasUnsavedChanges]);

  useEffect(() => {
    const fetchUpcomingData = async () => {
      try {
        const response = await fetch(BACKEND_EVENT_INFO_URI);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const upcomingData = data.find((upcoming) => upcoming.id === id);
        if (upcomingData) {
          setUpcomingData(upcomingData);
        } else {
          setError(new Error("Upcoming data not found"));
        }
      } catch (error) {
        console.error("Error fetching upcoming data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchUpcomingData();
    }
  }, [id]);

  const handleProceed = () => {
    if (targetURL) {
      window.location.href = targetURL;
      setShowProceedCancel(false);
    }
  };

  const handleCancel = () => {
    setShowProceedCancel(false);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!upcomingData) {
    return <div>Career not found</div>;
  }

  return (
    <main className="bg-img relative pt-[6.25rem]">
      <Header />
      {showProceedCancel && (
        <div className="fixed left-0 right-0 top-[20%] z-50">
          <ProceedCancelBtn onProceed={handleProceed} onCancel={handleCancel} />
        </div>
      )}
      <UpcomingHero
        upcomingData={upcomingData}
        setHasUnsavedChanges={setHasUnsavedChanges}
      />
      <Footer />
    </main>
  );
};

export default UpcomingDetailsComp;
