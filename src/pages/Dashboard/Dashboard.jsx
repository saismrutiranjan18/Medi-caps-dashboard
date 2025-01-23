import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1>Personal Information</h1>
        <div className="section">
          <button>General Information</button>
          <button>Documentation</button>
        </div>
        <h1>Mentoring Diary</h1>
        <div className="section">
          <button>Minutes of Meeting</button>
          <button>Records of Major Absence</button>
          <button>Records of In-disciplinary Activities</button>
        </div>
        <h1>Academic Details</h1>
        <div className="section">
          <button>Examinations Cleared</button>
          <button>Co-curricular Activities</button>
          <button>Internship Details</button>
          <button>Semester Wise Records</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
