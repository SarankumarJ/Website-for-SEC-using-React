import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const courses = [
    { id: 1, name: 'Computer Science and Engineering' },
    { id: 2, name: 'Electronics and Communication Engineering' },
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
