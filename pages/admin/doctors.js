'use client';

import { useEffect, useState } from "react";
import DoctorsTable from '../../components/DoctorsTable';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('/api/doctors');
      const data = await res.json();
      setDoctors(data);
    }
    fetchDoctors();
  }, []);

  return (
    <div>
      <DoctorsTable doctors={doctors} />
    </div>
  );
}
