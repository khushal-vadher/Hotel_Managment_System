import React, { useState } from 'react';

function Home() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

//   // function to fetch available rooms based on selected dates and number of guests
  async function fetchAvailableRooms() {
    
  }

  // function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    fetchAvailableRooms();
  }

  // function to handle selecting a room
  function handleSelectRoom(room) {
    setSelectedRoom(room);
  }

  return (
    <div>
      <h1>Hotel Reservation System</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Check-in date:
          <input type="date" value={checkInDate} onChange={event => setCheckInDate(event.target.value)} required />
        </label>
        <br />
        <label>
          Check-out date:
          <input type="date" value={checkOutDate} onChange={event => setCheckOutDate(event.target.value)} required />
        </label>
        <br />
        <label>
          Number of guests:
          <input type="number" min="1" value={numberOfGuests} onChange={event => setNumberOfGuests(parseInt(event.target.value))} required />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <h2>Available rooms</h2>
      {availableRooms.length > 0 ? (
        <ul>
          {availableRooms.map(room => (
            <li key={room.id}>
              {room.name} - ${room.pricePerNight}/night{' '}
              <button onClick={() => handleSelectRoom(room)}>Select</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No rooms available for selected dates and number of guests.</p>
      )}
      {selectedRoom && (
        <div>
          <h3>Selected room</h3>
          <p>{selectedRoom.name} - ${selectedRoom.pricePerNight}/night</p>
          <button>Book now</button>
        </div>
      )}
    </div>
  );
}

export default Home;