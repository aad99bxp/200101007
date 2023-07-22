// components/TrainSchedule.js
import React, { useState } from 'react';

const TrainSchedule = () => {
    // Sample data for demonstration purposes
    const [trains] = useState([
        { id: 1, name: 'Train A', departure: '08:00 AM', arrival: '10:00 AM' },
        { id: 2, name: 'Train B', departure: '10:30 AM', arrival: '12:30 PM' },
        { id: 3, name: 'Train C', departure: '01:00 PM', arrival: '03:00 PM' },
    ]);

    return (
        <div>
            <h2>Train Schedule</h2>
            <table>
                <thead>
                <tr>
                    <th>Train Name</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                </tr>
                </thead>
                <tbody>
                {trains.map(train => (
                    <tr key={train.id}>
                        <td>{train.name}</td>
                        <td>{train.departure}</td>
                        <td>{train.arrival}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainSchedule;
