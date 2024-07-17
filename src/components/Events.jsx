import React from 'react';
import './Events.css';

function Events() {
  const events = [
    { id: 1, name: 'Tech Fest 2024', date: '2024-08-10' },
    { id: 2, name: 'Alumni Meet 2024', date: '2024-09-15' },
    // Add more events here
  ];

  return (
    <div className="events">
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <img src="https://img.freepik.com/free-vector/college-party-poster_1370-107.jpg" alt="event" />
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
