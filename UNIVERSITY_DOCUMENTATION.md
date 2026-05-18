# Smart Health Diagnosis System
## Complete Project Documentation

---

**Project Title:** Smart Health Diagnosis System  
**Project Type:** Web-Based Healthcare Application with Machine Learning  
**Academic Year:** 2024-2025  
**Submitted to:** [University Name]  
**Department:** Computer Science / Information Technology  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Objectives](#3-objectives)
4. [System Architecture](#4-system-architecture)
5. [Technology Stack](#5-technology-stack)
6. [Features and Functionality](#6-features-and-functionality)
7. [Database Design](#7-database-design)
8. [Machine Learning Implementation](#8-machine-learning-implementation)
9. [API Documentation](#9-api-documentation)
10. [User Interface Design](#10-user-interface-design)
11. [Installation and Setup](#11-installation-and-setup)
12. [Testing](#12-testing)
13. [Future Enhancements](#14-future-enhancements)
14. [Conclusion](#15-conclusion)
15. [References](#16-references)

---

## 1. Project Overview

The Smart Health Diagnosis System is a comprehensive web-based healthcare application that leverages Machine Learning algorithms to predict the likelihood of diseases such as Diabetes and Heart Disease based on user-provided health parameters. The system provides users with instant health assessments, severity classifications, medical recommendations, and locates nearby healthcare facilities.

### 1.1 Project Purpose

The primary purpose of this system is to democratize access to preliminary health diagnostics by providing users with an easy-to-use platform that can assess their health risks based on standard medical parameters. The system aims to:

- Provide early disease detection capabilities
- Reduce the burden on healthcare systems by filtering non-critical cases
- Educate users about their health status
- Connect users with appropriate healthcare facilities
- Maintain comprehensive health prediction history

### 1.2 Target Users

- **General Public:** Individuals seeking preliminary health assessments
- **Healthcare Providers:** Medical professionals who can use the system for quick screenings
- **Administrators:** System administrators who manage users, hospitals, and system data

---

## 2. Problem Statement

In today's fast-paced world, many individuals neglect regular health check-ups due to time constraints, financial limitations, or lack of awareness. This often leads to late detection of serious health conditions such as Diabetes and Heart Disease, which could have been managed more effectively if detected early.

### 2.1 Current Challenges

- Limited access to preliminary health screening tools
- High cost of comprehensive medical check-ups
- Lack of awareness about personal health risks
- Difficulty in finding appropriate healthcare facilities
- No centralized system for tracking personal health history

### 2.2 Proposed Solution

The Smart Health Diagnosis System addresses these challenges by providing:
- Free and accessible health risk assessment tools
- Machine Learning-powered predictions with high accuracy
- Location-based hospital recommendations
- Personal health history tracking
- User-friendly interface accessible from any device

---

## 3. Objectives

### 3.1 Primary Objectives

1. Develop a web-based platform for disease prediction using Machine Learning
2. Implement accurate prediction models for Diabetes and Heart Disease
3. Provide users with severity classification and medical recommendations
4. Integrate location-based services for hospital recommendations
5. Ensure data security and user privacy

### 3.2 Secondary Objectives

1. Create an intuitive and visually appealing user interface
2. Implement comprehensive admin dashboard for system management
3. Maintain audit logs for all system activities
4. Provide responsive design for mobile and desktop devices
5. Ensure system scalability and maintainability

---

## 4. System Architecture

The Smart Health Diagnosis System follows a three-tier architecture pattern:

### 4.1 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                      │
│                  (React Frontend Application)              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │
│  │  Login   │ │Dashboard │ │ Prediction│ │ Hospital Map │  │
│  │ Register │ │ Profile  │ │  Forms    │ │ Contact Form │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│                   (Node.js/Express Backend)                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │   Routes     │ │ Controllers  │ │  Middleware  │       │
│  │  (API Endpoints)│ (Business Logic)│ (Auth, Audit)│       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                             │
│              (SQLite Database + ML Models)                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │   Users      │ │ Predictions  │ │  Hospitals   │       │
│  │   Hospitals  │ │ Disease Data │ │  ML Models   │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  ML Service Layer                           │
│                  (Python ML Models)                         │
│  ┌──────────────┐ ┌──────────────┐                         │
│  │ Diabetes RF  │ │ Heart Disease│                         │
│  │    Model     │ │    RF Model  │                         │
│  └──────────────┘ └──────────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Component Description

**Presentation Layer:**
- React-based single-page application
- Component-based architecture for reusability
- Responsive design with TailwindCSS
- Interactive UI with smooth animations

**Application Layer:**
- RESTful API endpoints
- Business logic implementation
- Authentication and authorization
- Request validation and error handling

**Data Layer:**
- SQLite database for data persistence
- Structured schema with proper relationships
- Data integrity constraints
- Efficient query optimization

**ML Service Layer:**
- Python-based prediction service
- Random Forest classification models
- Model serialization with joblib
- Confidence scoring and severity classification

---

## 5. Technology Stack

### 5.1 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| React Router DOM | 6.30.2 | Client-side routing |
| Axios | 1.13.2 | HTTP client for API calls |
| Leaflet | 1.9.4 | Interactive maps |
| React Leaflet | 4.2.1 | React wrapper for Leaflet |
| TailwindCSS | 4.1.17 | Utility-first CSS framework |
| PostCSS | 8.5.6 | CSS processing |
| Autoprefixer | 10.4.22 | CSS vendor prefixing |

### 5.2 Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | JavaScript runtime |
| Express | 4.18.2 | Web framework |
| SQLite3 | 6.0.1 | Database management |
| bcryptjs | 2.4.3 | Password hashing |
| jsonwebtoken | 9.0.2 | JWT authentication |
| cors | 2.8.5 | Cross-origin resource sharing |
| dotenv | 16.3.1 | Environment variables |
| mysql2 | 3.6.0 | MySQL driver (optional) |

### 5.3 Machine Learning Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Python | 3.x | ML programming language |
| scikit-learn | - | ML algorithms |
| pandas | - | Data manipulation |
| numpy | - | Numerical computing |
| joblib | - | Model serialization |

### 5.4 Development Tools

| Tool | Purpose |
|------|---------|
| Nodemon | Auto-restart development server |
| Git | Version control |
| VS Code | Code editor |

---

## 6. Features and Functionality

### 6.1 User Features

#### 6.1.1 Authentication System
- **User Registration:** New users can create accounts with username, email, password, and personal details
- **User Login:** Secure login with JWT token-based authentication
- **Password Security:** Passwords hashed using bcryptjs with salt rounds of 10
- **Session Management:** JWT tokens with 24-hour expiration

#### 6.1.2 Disease Prediction
- **Diabetes Prediction:**
  - Input parameters: Glucose level, BMI, Age, Insulin level, Pregnancies, Blood pressure, Skin thickness, Diabetes pedigree function
  - Output: Prediction result (Positive/Negative), Confidence score, Risk percentage, Severity level
  - Model: Random Forest Classifier with 100 estimators

- **Heart Disease Prediction:**
  - Input parameters: Age, Sex, Chest pain type, Resting blood pressure, Cholesterol, Fasting blood sugar, Resting ECG, Max heart rate, Exercise-induced angina, ST depression, Slope of ST, Number of major vessels, Thalassemia
  - Output: Prediction result (Positive/Negative), Confidence score, Risk percentage, Severity level
  - Model: Random Forest Classifier with 150 estimators

#### 6.1.3 Severity Classification
- **Critical:** Immediate medical attention required, emergency services recommended
- **Urgent:** Consultation within 24-48 hours recommended
- **Mild:** Routine check-up recommended, lifestyle changes suggested

#### 6.1.4 Hospital Recommendations
- Location-based hospital search using user's GPS coordinates
- Specialized hospital recommendations based on disease type
- Hospital details: Name, address, phone, specialties, rating
- Distance calculation using Haversine formula
- Emergency services identification

#### 6.1.5 Dashboard
- Personalized welcome message with username
- Statistics overview: Total predictions, High-risk results, Recent predictions
- Prediction history table with detailed information
- Visual indicators for severity levels
- Confidence score visualization with progress bars

#### 6.1.6 Profile Management
- View and update personal information
- Display user details: Username, email, name, phone, city
- Location settings for hospital recommendations

#### 6.1.7 Contact Form
- Submit inquiries and feedback
- Message tracking with status updates
- Priority assignment (Low, Medium, High)
- Admin response system

#### 6.1.8 Interactive Map
- Leaflet-based interactive map
- Display nearby hospitals with markers
- User location indicator
- Hospital details on marker click
- Responsive map design

### 6.2 Admin Features

#### 6.2.1 Admin Authentication
- Separate admin login system
- Role-based access control
- Admin dashboard with comprehensive management tools

#### 6.2.2 User Management
- View all registered users
- User status management (Active/Inactive)
- User details viewing
- Account deletion capabilities

#### 6.2.3 Message Management
- View all contact messages
- Message status tracking (Pending, In Progress, Resolved, Closed)
- Respond to user messages
- Priority-based message handling

#### 6.2.4 Audit Logs
- Comprehensive activity logging
- Filter logs by action type, user, date
- View detailed action information
- Security monitoring and compliance

### 6.3 UI/UX Features

#### 6.3.1 Modern Design
- Gradient backgrounds with purple-to-blue color scheme
- Professional card-based layout
- Consistent color palette throughout
- High contrast for better readability

#### 6.3.2 Animations
- Smooth page transitions (fadeIn, slideIn effects)
- Button ripple effects on hover
- Card scale animations
- Statistics number bounce effects
- Loading spinners for async operations
- Form validation feedback animations

#### 6.3.3 Responsive Design
- Mobile-first approach
- Optimized layouts for tablets and desktops
- Touch-friendly interface elements
- Adaptive navigation

#### 6.3.4 Accessibility
- Clear visual hierarchy
- Focus states for keyboard navigation
- Color-coded severity indicators
- Emoji icons for visual communication

---

## 7. Database Design

### 7.1 Database Schema

The system uses SQLite as the primary database with the following tables:

#### 7.1.1 Users Table
```sql
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT,
    city TEXT,
    latitude REAL,
    longitude REAL,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Purpose:** Stores user account information and location data for hospital recommendations.

#### 7.1.2 Hospitals Table
```sql
CREATE TABLE hospitals (
    hospital_id INTEGER PRIMARY KEY AUTOINCREMENT,
    hospital_name TEXT NOT NULL,
    hospital_type TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    phone TEXT,
    emergency_services INTEGER DEFAULT 0,
    specialties TEXT,
    rating REAL DEFAULT 0.0,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Purpose:** Stores hospital information including location, specialties, and emergency services availability.

#### 7.1.3 Disease Types Table
```sql
CREATE TABLE disease_types (
    disease_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    disease_name TEXT UNIQUE NOT NULL,
    disease_code TEXT,
    description TEXT,
    severity_level TEXT,
    specialist_required TEXT,
    recommended_action TEXT,
    prevention_tips TEXT,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Purpose:** Stores disease information including severity levels and specialist recommendations.

#### 7.1.4 Predictions Table
```sql
CREATE TABLE predictions (
    prediction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    disease_type_id INTEGER NOT NULL,
    prediction_result TEXT NOT NULL,
    confidence_score REAL,
    risk_percentage REAL,
    severity_level TEXT NOT NULL,
    emergency_required INTEGER DEFAULT 0,
    ml_model_version TEXT,
    recommendations TEXT,
    recommended_hospital_id INTEGER,
    distance_to_hospital REAL,
    prediction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (disease_type_id) REFERENCES disease_types(disease_type_id),
    FOREIGN KEY (recommended_hospital_id) REFERENCES hospitals(hospital_id)
);
```

**Purpose:** Stores all prediction results with associated metadata and recommendations.

#### 7.1.5 Diabetes Records Table
```sql
CREATE TABLE diabetes_records (
    diabetes_id INTEGER PRIMARY KEY AUTOINCREMENT,
    prediction_id INTEGER UNIQUE NOT NULL,
    glucose_level REAL,
    insulin_level REAL,
    bmi REAL,
    age INTEGER,
    pregnancies INTEGER,
    blood_pressure INTEGER,
    skin_thickness REAL,
    diabetes_pedigree_function REAL,
    FOREIGN KEY (prediction_id) REFERENCES predictions(prediction_id) ON DELETE CASCADE
);
```

**Purpose:** Stores specific parameters used for diabetes predictions.

#### 7.1.6 Heart Disease Records Table
```sql
CREATE TABLE heart_disease_records (
    heart_disease_id INTEGER PRIMARY KEY AUTOINCREMENT,
    prediction_id INTEGER UNIQUE NOT NULL,
    age INTEGER,
    sex INTEGER,
    chest_pain_type TEXT,
    resting_blood_pressure INTEGER,
    cholesterol REAL,
    fasting_blood_sugar INTEGER,
    resting_ecg TEXT,
    max_heart_rate INTEGER,
    exercise_induced_angina INTEGER,
    st_depression REAL,
    slope_of_st TEXT,
    num_major_vessels INTEGER,
    thalassemia TEXT,
    FOREIGN KEY (prediction_id) REFERENCES predictions(prediction_id) ON DELETE CASCADE
);
```

**Purpose:** Stores specific parameters used for heart disease predictions.

#### 7.1.7 Contact Messages Table
```sql
CREATE TABLE contact_messages (
    message_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'Pending',
    priority TEXT DEFAULT 'Medium',
    admin_response TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    responded_at DATETIME,
    resolved_at DATETIME,
    responded_by INTEGER
);
```

**Purpose:** Stores user contact messages and admin responses with status tracking.

### 7.2 Entity Relationship Diagram

```
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│    users    │───────│ predictions  │───────│disease_types│
└─────────────┘       └──────────────┘       └─────────────┘
                             │
                             │
                    ┌────────┴────────┐
                    │                 │
           ┌────────▼────────┐ ┌──────▼──────┐
           │diabetes_records│ │heart_disease│
           └─────────────────┘ │  _records   │
                                └─────────────┘

┌─────────────┐       ┌──────────────┐
│  hospitals  │◄──────│ predictions  │
└─────────────┘       └──────────────┘

┌─────────────┐       ┌──────────────┐
│    users    │───────│contact_msgs  │
└─────────────┘       └──────────────┘
```

### 7.3 Data Integrity

- Foreign key constraints ensure referential integrity
- UNIQUE constraints prevent duplicate usernames and emails
- CASCADE DELETE maintains data consistency
- Default values for timestamps and status fields
- NOT NULL constraints for required fields

---

## 8. Machine Learning Implementation

### 8.1 Model Selection

The system uses **Random Forest Classifier** for both Diabetes and Heart Disease predictions due to its:

- High accuracy on medical datasets
- Ability to handle non-linear relationships
- Feature importance extraction capabilities
- Resistance to overfitting
- Good interpretability

### 8.2 Diabetes Prediction Model

#### 8.2.1 Dataset
- **Source:** Pima Indians Diabetes Dataset
- **Samples:** 768 records
- **Features:** 8 medical parameters
- **Target:** Binary classification (0: No Diabetes, 1: Diabetes)

#### 8.2.2 Features Used
1. Glucose Level (mg/dL)
2. Blood Pressure (mm Hg)
3. Skin Thickness (mm)
4. Insulin Level (mu U/ml)
5. BMI (Body Mass Index)
6. Diabetes Pedigree Function
7. Age (years)
8. Pregnancies (number)

#### 8.2.3 Model Configuration
```python
RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42
)
```

#### 8.2.4 Training Process
1. Data loading and preprocessing
2. Train-test split (70-30 ratio with stratification)
3. Model training with Random Forest
4. Model evaluation using accuracy, classification report, and confusion matrix
5. Model serialization using joblib

#### 8.2.5 Performance Metrics
- Accuracy: ~75-80% (varies based on training)
- Precision, Recall, F1-score for both classes
- Feature importance analysis for interpretability

### 8.3 Heart Disease Prediction Model

#### 8.3.1 Dataset
- **Source:** Cleveland Heart Disease Dataset
- **Samples:** 303 records
- **Features:** 13 medical parameters
- **Target:** Binary classification (0: No Heart Disease, 1: Heart Disease)

#### 8.3.2 Features Used
1. Age (years)
2. Sex (1: Male, 0: Female)
3. Chest Pain Type (1-4)
4. Resting Blood Pressure (mm Hg)
5. Serum Cholesterol (mg/dL)
6. Fasting Blood Sugar (>120 mg/dL)
7. Resting ECG (0-2)
8. Maximum Heart Rate Achieved
9. Exercise Induced Angina (1: Yes, 0: No)
10. ST Depression (exercise vs rest)
11. Slope of Peak Exercise ST Segment (1-3)
12. Number of Major Vessels (0-3)
13. Thalassemia (3: Normal, 6: Fixed Defect, 7: Reversible Defect)

#### 8.3.3 Model Configuration
```python
RandomForestClassifier(
    n_estimators=150,
    max_depth=12,
    random_state=42
)
```

#### 8.3.4 Training Process
1. Data loading and preprocessing
2. Train-test split (70-30 ratio with stratification)
3. Model training with Random Forest
4. Model evaluation using accuracy and classification report
5. Model serialization using joblib

#### 8.3.5 Performance Metrics
- Accuracy: ~80-85% (varies based on training)
- Precision, Recall, F1-score for both classes
- Feature importance for clinical interpretation

### 8.4 Prediction Service

The ML service is implemented as a Python script (`predict.py`) that:

1. Receives disease type and feature parameters from Node.js backend
2. Loads the appropriate pre-trained model
3. Preprocesses input data
4. Makes prediction using the model
5. Calculates confidence score using `predict_proba()`
6. Classifies severity based on confidence thresholds
7. Returns JSON response with prediction results

### 8.5 Severity Classification Logic

#### Diabetes Severity
- **Critical:** Confidence ≥ 75% (Emergency required)
- **Urgent:** Confidence ≥ 50% (Consult within 3-5 days)
- **Mild:** Confidence < 50% (Routine check-up)

#### Heart Disease Severity
- **Critical:** Confidence ≥ 70% (Emergency required)
- **Urgent:** Confidence ≥ 50% (Consult within 24-48 hours)
- **Mild:** Confidence < 50% (Routine check-up)

### 8.6 Model Integration

The Node.js backend communicates with the Python ML service using child process spawning:

```javascript
const python = spawn('python3', [
  'ml_service/predict.py',
  diseaseType,
  ...features
]);
```

This allows seamless integration between the web application and ML models.

---

## 9. API Documentation

### 9.1 Base URL
```
http://localhost:5000/api
```

### 9.2 Authentication Endpoints

#### 9.2.1 Register User
- **Endpoint:** `POST /auth/register`
- **Description:** Register a new user account
- **Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "1234567890",
  "city": "Rawalpindi"
}
```
- **Response:**
```json
{
  "message": "User registered successfully",
  "userId": 1
}
```

#### 9.2.2 Login User
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticate user and receive JWT token
- **Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```
- **Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "city": "Rawalpindi"
  }
}
```

#### 9.2.3 Get User Profile
- **Endpoint:** `GET /auth/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Description:** Get current user profile information
- **Response:**
```json
{
  "user_id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "1234567890",
  "city": "Rawalpindi"
}
```

### 9.3 Prediction Endpoints

#### 9.3.1 Predict Diabetes
- **Endpoint:** `POST /predict/diabetes`
- **Headers:** `Authorization: Bearer <token>`
- **Description:** Predict diabetes risk based on health parameters
- **Request Body:**
```json
{
  "glucose": 150,
  "bmi": 28.5,
  "age": 35,
  "insulin": 80,
  "pregnancies": 2,
  "bloodPressure": 120,
  "skinThickness": 25,
  "dpf": 0.5
}
```
- **Response:**
```json
{
  "predictionId": 1,
  "prediction": "Positive",
  "confidence": 0.78,
  "riskPercentage": "78.00",
  "severity": "Critical",
  "emergencyRequired": true,
  "recommendations": "Immediate medical attention required. Visit endocrinologist within 24 hours.",
  "nearbyHospitals": [...]
}
```

#### 9.3.2 Predict Heart Disease
- **Endpoint:** `POST /predict/heart`
- **Headers:** `Authorization: Bearer <token>`
- **Description:** Predict heart disease risk based on health parameters
- **Request Body:**
```json
{
  "age": 52,
  "sex": 1,
  "cp": 2,
  "trestbps": 135,
  "chol": 203,
  "fbs": 0,
  "restecg": 0,
  "thalach": 155,
  "exang": 1,
  "oldpeak": 1.5,
  "slope": 1,
  "ca": 0,
  "thal": 2
}
```
- **Response:**
```json
{
  "predictionId": 2,
  "prediction": "Positive",
  "confidence": 0.82,
  "riskPercentage": "82.00",
  "severity": "Critical",
  "emergencyRequired": true,
  "recommendations": "EMERGENCY: Visit nearest hospital immediately. Call emergency services.",
  "nearbyHospitals": [...]
}
```

#### 9.3.3 Get Prediction History
- **Endpoint:** `GET /predict/history`
- **Headers:** `Authorization: Bearer <token>`
- **Description:** Get user's prediction history
- **Response:**
```json
[
  {
    "prediction_id": 1,
    "disease_name": "Diabetes",
    "prediction_result": "Positive",
    "confidence_score": 0.78,
    "risk_percentage": 78.00,
    "severity_level": "Critical",
    "emergency_required": 1,
    "prediction_date": "2024-01-15T10:30:00.000Z",
    "hospital_name": "City General Hospital"
  }
]
```

### 9.4 Hospital Endpoints

#### 9.4.1 Get All Hospitals
- **Endpoint:** `GET /hospitals/`
- **Description:** Get list of all hospitals
- **Response:**
```json
[
  {
    "hospital_id": 1,
    "hospital_name": "City General Hospital",
    "hospital_type": "Hospital",
    "address": "Mall Road, Saddar",
    "city": "Rawalpindi",
    "latitude": 33.5986,
    "longitude": 73.0551,
    "phone": "051-9272424",
    "emergency_services": 1,
    "specialties": "[\"Cardiology\", \"Emergency\", \"Endocrinology\"]",
    "rating": 4.5
  }
]
```

### 9.5 Contact Endpoints

#### 9.5.1 Submit Contact Message
- **Endpoint:** `POST /contact/submit`
- **Description:** Submit a contact message
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "I have a question about the service."
}
```
- **Response:**
```json
{
  "message": "Contact message submitted successfully",
  "messageId": 1
}
```

### 9.6 Admin Endpoints

#### 9.6.1 Admin Login
- **Endpoint:** `POST /admin/login`
- **Description:** Authenticate admin user
- **Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "adminPassword"
}
```
- **Response:**
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "admin_id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "role": "super_admin"
  }
}
```

#### 9.6.2 Get All Users
- **Endpoint:** `GET /admin/users`
- **Headers:** `Authorization: Bearer <adminToken>`
- **Description:** Get list of all users (Admin only)
- **Response:**
```json
[
  {
    "user_id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "is_active": 1,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
]
```

#### 9.6.3 Get All Messages
- **Endpoint:** `GET /admin/messages`
- **Headers:** `Authorization: Bearer <adminToken>`
- **Description:** Get all contact messages (Admin only)
- **Response:**
```json
[
  {
    "message_id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "General Inquiry",
    "message": "I have a question about the service.",
    "status": "Pending",
    "priority": "Medium",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

#### 9.6.4 Get Audit Logs
- **Endpoint:** `GET /admin/audit-logs`
- **Headers:** `Authorization: Bearer <adminToken>`
- **Description:** Get system audit logs (Admin only)
- **Response:**
```json
[
  {
    "log_id": 1,
    "user_id": 1,
    "action_type": "DIABETES_PREDICTION",
    "action_category": "PREDICTION",
    "description": "Diabetes prediction made - Result: Positive, Confidence: 78.00%",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
]
```

---

## 10. User Interface Design

### 10.1 Design Principles

The user interface follows modern design principles:

- **Simplicity:** Clean, uncluttered layout with clear visual hierarchy
- **Consistency:** Uniform design patterns across all pages
- **Accessibility:** High contrast, readable fonts, keyboard navigation support
- **Responsiveness:** Adaptive layouts for all device sizes
- **Feedback:** Visual feedback for all user interactions

### 10.2 Color Scheme

| Color | Purpose | Hex Code |
|-------|---------|----------|
| Primary Gradient | Main background | Linear gradient from #667eea to #764ba2 |
| Success | Positive results | #10b981 |
| Warning | Urgent severity | #f59e0b |
| Danger | Critical severity | #ef4444 |
| Info | Information | #3b82f6 |
| Text | Primary text | #1f2937 |
| Text Light | Secondary text | #6b7280 |

### 10.3 Page Descriptions

#### 10.3.1 Landing Page
- Hero section with application title and tagline
- Call-to-action buttons for login and registration
- Brief feature overview
- Modern gradient background

#### 10.3.2 Login Page
- Clean login form with email and password fields
- Password visibility toggle
- Remember me option
- Link to registration page
- Smooth fade-in animation

#### 10.3.3 Registration Page
- Multi-field registration form
- Password strength indicator with visual meter
- Real-time password validation
- Confirm password matching indicator
- Password visibility toggle
- Step-by-step form organization

#### 10.3.4 Dashboard
- Personalized welcome message
- Statistics cards with animated counters
- Prediction history table
- Severity badges with color coding
- Confidence score progress bars
- Hospital recommendations display

#### 10.3.5 Prediction Forms
- Multi-step form with progress indicator
- Organized field grouping
- Clear field labels with descriptions
- Real-time validation feedback
- Next/Previous navigation buttons
- Result display with severity classification
- Hospital recommendations for critical cases

#### 10.3.6 Hospital Map
- Interactive Leaflet map
- User location marker
- Hospital markers with popups
- Hospital details display
- Distance indicators
- Responsive map container

#### 10.3.7 Contact Form
- Clean form layout
- Subject selection
- Message textarea
- Success/error feedback
- Loading state indicator

#### 10.3.8 Admin Dashboard
- Sidebar navigation
- User management table
- Message management with status
- Audit logs viewer
- Statistics overview
- Responsive layout

### 10.4 Animation Library

The application uses custom CSS animations for enhanced UX:

| Animation | Duration | Purpose |
|-----------|----------|---------|
| fadeInUp | 0.5-0.8s | Page/element entrance |
| fadeInDown | 0.5-0.6s | Top element entrance |
| slideInLeft | 0.5-0.6s | Left-side entrance |
| slideInRight | 0.5-0.6s | Right-side entrance |
| scaleIn | 0.5s | Card entrance |
| pulse | 1.5-2s | Attention grabber |
| bounce | 2s | Statistics numbers |
| glow | 2s | Shadow pulse |
| rotate | 1s | Loading spinner |

### 10.5 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 11. Installation and Setup

### 11.1 Prerequisites

- Node.js (v14 or higher)
- Python (v3.7 or higher)
- npm or yarn package manager
- Git (for version control)

### 11.2 Backend Setup

#### Step 1: Navigate to Backend Directory
```bash
cd backend
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Configure Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
DB_PATH=./data/smart_health.db
```

#### Step 4: Setup ML Service
```bash
cd ml_service
pip install pandas numpy scikit-learn joblib
```

#### Step 5: Train ML Models
```bash
# Train Diabetes Model
python train_diabetes.py

# Train Heart Disease Model
python train_heart.py
```

#### Step 6: Start Backend Server
```bash
cd ..
npm start
```

The backend server will start on `http://localhost:5000`

### 11.3 Frontend Setup

#### Step 1: Navigate to Frontend Directory
```bash
cd frontend
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Start Frontend Server
```bash
npm start
```

The frontend application will open in your browser at `http://localhost:3000`

### 11.4 Database Setup

The SQLite database is automatically created when the backend server starts. The database includes:

- Pre-defined table structures
- Sample disease types
- Sample hospital data (Rawalpindi/Islamabad region)

For MySQL setup (optional), use the provided `database/schema.sql` file:
```bash
mysql -u root -p < database/schema.sql
```

### 11.5 Verification

1. Open `http://localhost:3000` in your browser
2. Register a new user account
3. Login with the registered credentials
4. Navigate to the prediction page
5. Submit a diabetes or heart disease prediction
6. View results on the dashboard

---

## 12. Testing

### 12.1 Manual Testing Checklist

#### Authentication Testing
- [ ] User registration with valid data
- [ ] User registration with duplicate email
- [ ] User registration with weak password
- [ ] User login with correct credentials
- [ ] User login with incorrect credentials
- [ ] JWT token expiration handling
- [ ] Protected route access without token

#### Prediction Testing
- [ ] Diabetes prediction with valid parameters
- [ ] Diabetes prediction with invalid parameters
- [ ] Heart disease prediction with valid parameters
- [ ] Heart disease prediction with invalid parameters
- [ ] Prediction history retrieval
- [ ] Confidence score accuracy
- [ ] Severity classification logic

#### Hospital Testing
- [ ] Hospital list retrieval
- [ ] Location-based hospital search
- [ ] Distance calculation accuracy
- [ ] Emergency services filtering
- [ ] Specialty-based filtering

#### Admin Testing
- [ ] Admin login
- [ ] User management (view, activate, deactivate)
- [ ] Message management (view, respond, update status)
- [ ] Audit log viewing
- [ ] Access control for non-admin users

#### UI/UX Testing
- [ ] Responsive design on mobile devices
- [ ] Responsive design on tablets
- [ ] Responsive design on desktop
- [ ] Animation smoothness
- [ ] Form validation feedback
- [ ] Loading states
- [ ] Error handling

### 12.2 Test Data

#### Sample Diabetes Prediction Data
```
Glucose: 150 mg/dL
BMI: 28.5
Age: 35 years
Insulin: 80 mu U/ml
Pregnancies: 2
Blood Pressure: 120 mm Hg
Skin Thickness: 25 mm
Diabetes Pedigree Function: 0.5
```

#### Sample Heart Disease Prediction Data
```
Age: 52 years
Sex: 1 (Male)
Chest Pain Type: 2 (Atypical Angina)
Resting Blood Pressure: 135 mm Hg
Cholesterol: 203 mg/dL
Fasting Blood Sugar: 0 (<= 120 mg/dL)
Resting ECG: 0 (Normal)
Max Heart Rate: 155 bpm
Exercise Induced Angina: 1 (Yes)
ST Depression: 1.5
Slope of ST: 1 (Upsloping)
Number of Major Vessels: 0
Thalassemia: 2 (Fixed Defect)
```

### 12.3 Performance Testing

- Backend API response time: < 500ms
- ML prediction time: < 2s
- Page load time: < 3s
- Animation frame rate: 60fps

---

## 13. Future Enhancements

### 13.1 Planned Features

1. **Additional Disease Predictions**
   - Hypertension prediction
   - Cancer risk assessment
   - Respiratory disease prediction
   - Liver disease prediction

2. **Enhanced ML Models**
   - Deep learning models for improved accuracy
   - Ensemble methods combining multiple algorithms
   - Real-time model retraining with new data
   - Model versioning and A/B testing

3. **Mobile Application**
   - Native iOS and Android apps
   - Offline mode support
   - Push notifications for health alerts
   - Integration with wearable devices

4. **Telemedicine Integration**
   - Video consultation booking
   - Doctor appointment scheduling
   - Prescription management
   - Medical record sharing

5. **Advanced Analytics**
   - Health trend analysis over time
   - Personalized health reports
   - Risk factor visualization
   - Comparative health metrics

6. **Social Features**
   - Anonymous health data sharing
   - Community health challenges
   - Health tips and articles
   - Expert Q&A forums

7. **Integration Capabilities**
   - Electronic Health Record (EHR) integration
   - Laboratory test result integration
   - Pharmacy integration for prescriptions
   - Insurance provider integration

8. **Security Enhancements**
   - Two-factor authentication
   - Biometric login support
   - Data encryption at rest
   - HIPAA compliance certification

### 13.2 Technical Improvements

1. **Performance Optimization**
   - Database query optimization
   - Caching layer implementation
   - CDN for static assets
   - Lazy loading for components

2. **Scalability**
   - Microservices architecture
   - Container orchestration with Kubernetes
   - Load balancing
   - Auto-scaling capabilities

3. **Monitoring and Logging**
   - Real-time application monitoring
   - Error tracking and alerting
   - Performance metrics dashboard
   - User behavior analytics

4. **Testing Automation**
   - Unit testing with Jest
   - Integration testing
   - End-to-end testing with Cypress
   - Continuous integration/continuous deployment (CI/CD)

---

## 14. Conclusion

The Smart Health Diagnosis System represents a significant step towards democratizing access to preliminary health diagnostics. By leveraging Machine Learning algorithms and modern web technologies, the system provides users with accurate disease risk assessments, severity classifications, and personalized healthcare recommendations.

### 14.1 Project Achievements

1. **Successful Implementation**
   - Fully functional web application with user and admin interfaces
   - Accurate ML models for Diabetes and Heart Disease prediction
   - Comprehensive database design with proper relationships
   - RESTful API architecture for seamless communication

2. **User Experience**
   - Intuitive and visually appealing interface
   - Smooth animations and transitions
   - Responsive design for all devices
   - Clear feedback and error handling

3. **Technical Excellence**
   - Clean, maintainable code structure
   - Proper separation of concerns
   - Security best practices implementation
   - Scalable architecture design

4. **Healthcare Impact**
   - Early disease detection capabilities
   - Reduced burden on healthcare systems
   - Increased health awareness among users
   - Connection to appropriate healthcare facilities

### 14.2 Learning Outcomes

This project provided valuable experience in:

- Full-stack web development with React and Node.js
- Machine Learning model development and deployment
- Database design and management
- API design and implementation
- UI/UX design principles
- Security best practices
- Project management and documentation

### 14.3 Final Remarks

The Smart Health Diagnosis System demonstrates the potential of technology to transform healthcare delivery. While the current implementation focuses on Diabetes and Heart Disease prediction, the architecture is designed to accommodate additional disease models and features. With continued development and refinement, this system has the potential to become a valuable tool for individuals seeking to take control of their health.

---

## 15. References

### 15.1 Academic References

1. World Health Organization. (2023). "Diabetes Fact Sheet." 
2. American Heart Association. (2023). "Heart Disease and Stroke Statistics."
3. Pima Indians Diabetes Dataset. National Institute of Diabetes and Digestive and Kidney Diseases.
4. Cleveland Heart Disease Dataset. UCI Machine Learning Repository.

### 15.2 Technical References

1. React Documentation. https://react.dev/
2. Node.js Documentation. https://nodejs.org/docs/
3. Express.js Documentation. https://expressjs.com/
4. scikit-learn Documentation. https://scikit-learn.org/
5. SQLite Documentation. https://www.sqlite.org/docs.html
6. Leaflet Documentation. https://leafletjs.com/reference.html

### 15.3 Dataset Sources

1. Pima Indians Diabetes Dataset: https://www.kaggle.com/uciml/pima-indians-diabetes-database
2. Heart Disease Dataset: https://www.kaggle.com/ronitf/heart-disease-uci

### 15.4 Libraries and Frameworks

1. React: https://reactjs.org/
2. Express: https://expressjs.com/
3. scikit-learn: https://scikit-learn.org/
4. Leaflet: https://leafletjs.com/
5. TailwindCSS: https://tailwindcss.com/

---

## Appendix

### A. Project Structure

```
smart_health_system/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── sqlite.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── auditController.js
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   ├── hospitalController.js
│   │   └── predictionController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── auditLogger.js
│   ├── ml_service/
│   │   ├── diabetes.csv
│   │   ├── heart.csv
│   │   ├── mlService.js
│   │   ├── models/
│   │   │   ├── diabetes_rf_model.pkl
│   │   │   └── heart_rf_model.pkl
│   │   ├── predict.py
│   │   ├── train_diabetes.py
│   │   └── train_heart.py
│   ├── routes/
│   │   ├── admin.js
│   │   ├── audit.js
│   │   ├── auth.js
│   │   ├── contact.js
│   │   ├── hospital.js
│   │   └── prediction.js
│   ├── data/
│   │   └── smart_health.db
│   ├── scripts/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminLayout.js
│   │   │   ├── AdminLogin.js
│   │   │   ├── AuditLogs.js
│   │   │   ├── MessagesManagement.js
│   │   │   └── UserManagement.js
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── Dashboard.js
│   │   │   ├── HospitalMap.js
│   │   │   ├── Login.js
│   │   │   ├── Navbar.js
│   │   │   ├── PredictionForms/
│   │   │   │   ├── DiabetesForm.js
│   │   │   │   └── HeartForm.js
│   │   │   ├── PredictionPage.js
│   │   │   ├── Profile.js
│   │   │   └── Register.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── database/
│   └── schema.sql
├── ENHANCEMENT_CHECKLIST.md
├── ENHANCEMENT_REPORT.md
├── ENHANCEMENT_SUMMARY.md
├── QUICK_START.md
├── README.md
├── VISUAL_SHOWCASE.md
└── UNIVERSITY_DOCUMENTATION.md
```

### B. Configuration Files

#### Backend package.json
```json
{
  "name": "smart-health-backend",
  "version": "1.0.0",
  "description": "Smart Health Diagnosis System Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.6.0",
    "sqlite3": "^6.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

#### Frontend package.json
```json
{
  "name": "smart-health-frontend",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "axios": "^1.13.2",
    "leaflet": "^1.9.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-leaflet": "^4.2.1",
    "react-router-dom": "^6.30.2",
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.22",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17"
  }
}
```

### C. Sample Data

#### Sample Hospital Data
```json
{
  "hospital_name": "City General Hospital",
  "hospital_type": "Hospital",
  "address": "Mall Road, Saddar",
  "city": "Rawalpindi",
  "latitude": 33.5986,
  "longitude": 73.0551,
  "phone": "051-9272424",
  "emergency_services": true,
  "specialties": ["Cardiology", "Emergency", "Endocrinology", "Oncology"],
  "rating": 4.5
}
```

#### Sample Disease Type Data
```json
{
  "disease_name": "Diabetes",
  "disease_code": "D001",
  "description": "Type 2 Diabetes Mellitus",
  "severity_level": "Urgent",
  "specialist_required": "Endocrinologist",
  "recommended_action": "Consult endocrinologist for blood sugar management"
}
```

---

**Document Version:** 1.0  

**Prepared By:** [Muhammad Ibrar]  
**Student ID:** [23-st047]  
**University:** [Punjab Tianjin University of Technology]

---

*End of Documentation*
