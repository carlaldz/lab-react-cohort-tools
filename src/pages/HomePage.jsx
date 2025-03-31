import { useState } from "react";
import { Link } from "react-router-dom";
import studentsData from "../assets/students.json";

function HomePage() {
  const [students] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span style={{ flexBasis: "20%" }}>Image</span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
        <span style={{ flexBasis: "20%" }}>Details</span>
      </div>

      {students.map((student) => (
        <div key={student._id} className="flex justify-between items-center p-2 border-b">
          <span style={{ flexBasis: "20%" }}>
            <img src={student.image} alt={student.name} className="w-12 h-12 rounded-full" />
          </span>
          <span style={{ flexBasis: "20%" }}>{student.name}</span>
          <span style={{ flexBasis: "20%" }}>{student.program}</span>
          <span style={{ flexBasis: "20%" }}>{student.email}</span>
          <span style={{ flexBasis: "20%" }}>{student.phone}</span>
          <span style={{ flexBasis: "20%" }}>
            <Link 
              to={`/students/${student._id}`} 
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
