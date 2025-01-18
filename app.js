import React, { useState } from "react";
import { useEffect } from "react";
import QrReader from "react-qr-reader"; // Install this package: npm install react-qr-reader
import axios from "axios";

const App = () => {
  const [qrData, setQrData] = useState(null);
  const [dishDetails, setDishDetails] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);

  // Handle QR Code Scanning
  const handleScan = (data) => {
    if (data) {
      const parsedData = JSON.parse(data);
      setQrData(parsedData);
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
  };

  // Fetch dish details from backend after QR scan
  useEffect(() => {
    if (qrData) {
      axios
        .get(`/api/dish/${qrData.dishName}`) // Replace with your backend API URL
        .then((response) => {
          setDishDetails(response.data);
          calculateTotalCalories(response.data.items);
        })
        .catch((error) => console.error("Error fetching dish details:", error));
    }
  }, [qrData]);

  // Calculate total calories
  const calculateTotalCalories = (items) => {
    const total = items.reduce((sum, item) => sum + item.quantity * item.caloriesPerUnit, 0);
    setTotalCalories(total);
  };

  // Update quantity dynamically
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...dishDetails.items];
    updatedItems[index].quantity = newQuantity;
    setDishDetails({ ...dishDetails, items: updatedItems });
    calculateTotalCalories(updatedItems);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>QR Code Food Calorie Tracker</h1>

      {/* QR Code Scanner */}
      <div style={{ marginBottom: "20px" }}>
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
      </div>

      {/* Dish Details */}
      {dishDetails && (
        <div>
          <h2>{dishDetails.dishName}</h2>
          <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Calories/Unit</th>
                <th>Total Calories</th>
              </tr>
            </thead>
            <tbody>
              {dishDetails.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="0"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td>{item.caloriesPerUnit}</td>
                  <td>{item.quantity * item.caloriesPerUnit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Calories: {totalCalories}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
