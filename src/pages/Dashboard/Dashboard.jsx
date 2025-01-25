import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../styles/Dashboard.css';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/700.css'; 

const Section = ({ title, rows }) => {
  return (
    <div className="section-container">
      <h1 className="section-title">{title}</h1>
      <div className="section">
        {rows.map((row, rowIndex) => (
          <div className="section-row" key={rowIndex}>
            {row.map((buttonText, index) => (
              <button
                key={index}
                className={`section-button ${
                  ['General Information', 'Documentation'].includes(buttonText)
                    ? 'wide-button'
                    : ''
                } ${
                  [
                    'Minutes of Meeting',
                    'Records of Major Absence',
                    'Records of In-disciplinary Activities',
                  ].includes(buttonText)
                    ? 'extra-wide-button'
                    : ''
                } ${
                  [
                    'Examinations Cleared',
                    'Co-curricular Activities',
                    'Internship Details',
                    'Semester Wise Records',
                  ].includes(buttonText)
                    ? 'academic-wide-button'
                    : ''
                }`}
              >
                {buttonText}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Section
          title="PERSONAL INFORMATION"
          rows={[['General Information', 'Documentation']]}
        />
        <Section
          title="MENTORING DIARY"
          rows={[
            ['Minutes of Meeting', 'Records of Major Absence'],
            ['Records of In-disciplinary Activities'], 
          ]}
        />
        <Section
          title="ACADEMIC DETAILS"
          rows={[
            ['Examinations Cleared', 'Co-curricular Activities'],
            ['Internship Details', 'Semester Wise Records'],
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
