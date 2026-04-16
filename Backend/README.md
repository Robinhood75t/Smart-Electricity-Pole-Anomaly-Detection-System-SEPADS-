# Smart Electric Pole Anomaly Detection System

A real-time monitoring and anomaly detection system for electric poles that detects issues like **overload, short circuits, and power theft** using IoT devices and backend analytics.

---

## Project Overview

This system collects real-time electrical data (current & voltage) from smart electric poles and processes it to detect anomalies.

It uses:
- 📡 IoT modules (ESP-based devices)
- 🌐 Backend APIs
- 🗄️ MongoDB for data storage
- ⚡ Real-time updates using WebSockets

---

## Key Features

- Real-time monitoring of current & voltage  
- Automatic baseline generation  
- Anomaly detection using statistical methods  
- Scalable backend architecture  
- Live updates to frontend/dashboard  

---

## How It Works

### 1️⃣ Data Collection
- Sensors measure:
  - Current
  - Voltage  
- Data is sent to backend via HTTP API  

---

### Data Storage

We maintain three main collections:

- **pole_readings**  
  → Stores real-time incoming data  

- **pole_reading_history**  
  → Stores historical data (per second)  

- **baseline**  
  → Stores expected values for each pole  

---

### Baseline Calculation

We use MongoDB Aggregation Pipeline:

- `$match` → filters recent data  
- `$group` → calculates:
  - Average current  
  - Average voltage  
  - Standard deviation  

👉 Baseline is updated continuously for each pole.

---

### Real-Time Updates

- Backend emits updates using WebSockets:

```js
io.emit("baseline-update", {
  pole_id,
  expected_current,
  expected_voltage
});
```
### Anomaly Detection Logic

The system compares real-time values with baseline:

If current > avg_current + (k × std_dev)
→ Anomaly Detected 

---

###  Time Window Strategy

We use different time windows depending on use-case:

---

### Testing Mode

const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
Fast updates
Helps in debugging
More sensitive to changes

---

### Production Mode

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
Stable baseline
Reduces noise
Better for real-world deployment
---

### Tech Stack

Backend: Node.js, Express
Database: MongoDB (Aggregation Pipeline)
IoT: ESP8266 / ESP32
Real-Time: Socket.IO
Deployment: Render

---
### Environment Variables

Create a .env file in the root directory:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
PORT=9000

---
### Running the Project

1. Install dependencies
npm install
2. Start server
npm start

---
### Future Improvements

 -Advanced anomaly detection (Machine Learning)
 -Dashboard visualization
 -Alert system (SMS/Email)
 -Geo-mapping of poles

---
### Team

Robin – Backend Developer
Aashish - Frontend Developer
Yash - Testing & Production 
Daksh - IOT & Hardware

---
### Problem Statement

Electric infrastructure often suffers from:
Power theft
Overload failures
Short circuits
This system aims to detect these issues in real-time and improve reliability.

---
### Final Note

This project demonstrates how IoT + Backend + Data Processing can be combined to build a scalable and intelligent monitoring solution.
---
