"use client";

import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MapWithIcons from "@/components/MapwithIcon";

// This Page component renders dynamic content based on the type and id passed as props.
const Page = ({ type, id }: { type: string; id: string }) => (
  <div>
    <h1>{type} ที่ {id}</h1>
    <p>รายละเอียดเพิ่มเติม...</p>
  </div>
);

const MapPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures rendering only on the client side
  }, []);

  if (!isClient) {
    return null; // Optionally, show a loading spinner until the client is ready
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapWithIcons />} />
        {[...Array(12).keys()].map(i => {
          const id = (i + 1).toString().padStart(2, "0");
          return (
            <Route
              key={`สายบุญ-${id}`}
              path={`/meritDetail/${id}`}
              element={<Page type="สายบุญ" id={id} />} // Use Page here
            />
          );
        })}
        {[...Array(8).keys()].map(i => {
          const id = (i + 1).toString().padStart(2, "0");
          return (
            <Route
              key={`สายอาร์ต-${id}`}
              path={`/artDetail/${id}`}
              element={<Page type="สายอาร์ต" id={id} />} // Use Page here
            />
          );
        })}
        {[...Array(10).keys()].map(i => {
          const id = (i + 1).toString().padStart(2, "0");
          return (
            <Route
              key={`สายชิล-${id}`}
              path={`/chillDetail/${id}`}
              element={<Page type="สายชิล" id={id} />} // Use Page here
            />
          );
        })}
        {[...Array(24).keys()].map(i => {
          const id = (i + 1).toString().padStart(2, "0");
          return (
            <Route
              key={`สายกิน-${id}`}
              path={`/eatDetail/${id}`}
              element={<Page type="สายกิน" id={id} />} // Use Page here
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default MapPage;
