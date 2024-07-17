import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const courses = [
    { id: 1, name: 'Computer Science and Engineering' },
    { id: 2, name: 'Electronics and Communication Engineering' },
    { id: 3, name: 'Electrical and Electronics Engineering' },
    { id: 4, name: 'Mechanical Engineering' },
    { id: 5, name: 'Civil Engineering' },
    { id: 6, name: 'Information Technology' },
    { id: 7, name: 'Aeronautical Engineering' },
    { id: 8, name: 'Automobile Engineering' },
    { id: 9, name: 'Biomedical Engineering' },
    { id: 10, name: 'Chemical Engineering' },
    { id: 11, name: 'Biotechnology' },
    { id: 12, name: 'Artificial Intelligence and Data Science' },
    { id: 13, name: 'Cyber Security' },
    { id: 14, name: 'Robotics and Automation' },
    { id: 15, name: 'Data Science' },
    { id: 16, name: 'Machine Learning' },
    { id: 17, name: 'Internet of Things' },
    { id: 18, name: 'Cloud Computing' },
    { id: 19, name: 'Blockchain Technology' },
    { id: 20, name: 'Augmented Reality and Virtual Reality' },
    { id: 21, name: 'Game Development' },

    // Add more courses here
  ];

  return (
    <div className="courses">
      <h2>Courses Offered</h2>
      <input 
        type="text" 
        placeholder="Search courses..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {courses
          .filter(course => 
            course.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default Courses;
