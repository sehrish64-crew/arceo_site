'use client';

import { useEffect, useState } from "react";
import Inventory from '../../components/Inventory';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('/api/Inventory');
      const data = await res.json();
      setDoctors(data);
    }
    fetchDoctors();
  }, []);

  return (
    <div>
      <Inventory />
    </div>
  );
}
