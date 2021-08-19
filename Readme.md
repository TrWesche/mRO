mRO = Mobile Robotic Orchestration

The goal of the mRO project is to create an easy to deploy system for:
- Scheduling of Robot Tasks
- Ad-hoc Execution of Robot Tasks
- Data Telemetry from Robots including control data as well as integrated sensor structures
- Time Correlated Data Collection from in the Field Robots
- Visualization of Collected Data

To make this into a reality requires multiple database & server components:
- Mosquito MQTT Server - Handles communication between the mobile robot & the data collection / task orchestration services
- Influx DB Server - High speed database for time correlated data collection, best suited for IoT & Industry data collection tasks.
- Grafana Server - Rich & customizable data visualization for collected data.
- PostgreSQL Server - Relational database supporting mobile robot configuration & HMI
- Express Server - Backend server providing HMI consumable API & orchestration between system servers
- React WebApp - Frontend web application providing for system control.