// // AddTripModal.jsx
// import React, { useState } from 'react';

// const AddTripModal = ({ cities, onAddTrip, onClose }) => {
//   const [selectedCity, setSelectedCity] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleAddTrip = () => {
//     // Validate input data
//     // Add trip
//     onAddTrip({ city: selectedCity, startDate, endDate });
//     // Close modal
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Add New Trip</h2>
//         <label>Select City:</label>
//         <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
//           {cities.map(city => (
//             <option key={city.id} value={city.name}>{city.name}</option>
//           ))}
//         </select>
//         <label>Start Date:</label>
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         <label>End Date:</label>
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//         <button onClick={handleAddTrip}>Done</button>
//         <button onClick={onClose}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default AddTripModal;
