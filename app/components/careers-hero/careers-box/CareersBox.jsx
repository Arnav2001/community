"use client";
import { useEffect, useState } from "react";
import CareerOpening from "./career-opening/CareerOpening";
import CareersEmpty from "./career-empty/CareersEmpty";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../../redux/careersSlice";
import Spinner from "../../spinner/Spinner";


const CareersBox = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const careersData = useSelector((state) => state.careers.careersData);
  const status = useSelector((state) => state.careers.status);
  const error = useSelector((state) => state.careers.error);

  useEffect(() => {
    dispatch(fetchCareers());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded" || status === "failed") {
      setLoading(false);
    }
  }, [status]);

  return (
    <div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {status === "succeeded" && careersData.length !== 0 ? (
            <CareerOpening />
          ) : (
            <CareersEmpty />
          )}
        </>
      )}
    </div>
  );
};

export default CareersBox;
