const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create SQLite database file
const dbPath = path.join(__dirname, '..', 'data', 'smart_health.db');

// Create data directory if it doesn't exist
const fs = require('fs');
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ SQLite connection failed:', err.message);
  } else {
    console.log('✅ SQLite connected successfully');
    initializeTables();
  }
});

function initializeTables() {
  const tables = [
    // Create users table
    `CREATE TABLE IF NOT EXISTS users (
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
    )`,
    
    // Create hospitals table
    `CREATE TABLE IF NOT EXISTS hospitals (
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
    )`,
    
    // Create disease_types table
    `CREATE TABLE IF NOT EXISTS disease_types (
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
    )`,
    
    // Create predictions table
    `CREATE TABLE IF NOT EXISTS predictions (
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
    )`,
    
    // Create diabetes_records table
    `CREATE TABLE IF NOT EXISTS diabetes_records (
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
    )`,
    
    // Create heart_disease_records table
    `CREATE TABLE IF NOT EXISTS heart_disease_records (
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
    )`,
    
    // Create contact_messages table
    `CREATE TABLE IF NOT EXISTS contact_messages (
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
    )`
  ];

  // Create all tables first
  let tablesCreated = 0;
  tables.forEach((sql, index) => {
    db.run(sql, (err) => {
      if (err) {
        console.error(`❌ Error creating table ${index}:`, err.message);
      } else {
        tablesCreated++;
        if (tablesCreated === tables.length) {
          // All tables created, now insert data
          insertSampleData();
        }
      }
    });
  });
}

function insertSampleData() {
  // Insert sample disease types
  const insertDiseases = `
    INSERT OR IGNORE INTO disease_types (disease_type_id, disease_name, disease_code, description, severity_level, specialist_required, recommended_action) VALUES
    (1, 'Diabetes', 'D001', 'Type 2 Diabetes Mellitus', 'Urgent', 'Endocrinologist', 'Consult endocrinologist for blood sugar management'),
    (2, 'Heart Disease', 'H001', 'Cardiovascular Disease', 'Critical', 'Cardiologist', 'Immediate consultation with cardiologist required')
  `;

  db.run(insertDiseases, (err) => {
    if (err) {
      console.error('Error inserting diseases:', err.message);
    } else {
      console.log('✅ Sample diseases inserted');
    }
  });

  // Insert sample hospitals
  const insertHospitals = `
    INSERT OR IGNORE INTO hospitals (hospital_name, hospital_type, address, city, latitude, longitude, phone, emergency_services, specialties, rating) VALUES
    ('City General Hospital', 'Hospital', 'Mall Road, Saddar', 'Rawalpindi', 33.5986, 73.0551, '051-9272424', 1, '["Cardiology", "Emergency", "Endocrinology", "Oncology"]', 4.5),
    ('Heart Care Center', 'Hospital', 'Fazal-e-Haq Road', 'Rawalpindi', 33.6007, 73.0679, '051-5123456', 1, '["Cardiology", "Emergency"]', 4.3),
    ('Shifa International Hospital', 'Hospital', 'H-8/4, Pitras Bukhari Road', 'Islamabad', 33.6651, 73.0780, '051-8463000', 1, '["Cardiology", "Oncology", "Endocrinology"]', 4.8),
    ('Holy Family Hospital', 'Hospital', 'Jinnah Road', 'Rawalpindi', 33.6160, 73.0551, '051-9290301', 1, '["Emergency", "General Medicine", "Cardiology"]', 4.2),
    ('PIMS Hospital', 'Hospital', 'G-8/3, Shaheed-e-Millat Road', 'Islamabad', 33.6688, 73.0838, '051-9261170', 1, '["Cardiology", "Oncology", "Emergency"]', 4.4)
  `;

  db.run(insertHospitals, (err) => {
    if (err) {
      console.error('Error inserting hospitals:', err.message);
    } else {
      console.log('✅ Sample hospitals inserted');
    }
  });
}

// Promise wrapper for SQLite queries
const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve([rows]);
      }
    });
  });
};

const execute = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve([{ insertId: this.lastID, affectedRows: this.changes }]);
      }
    });
  });
};

module.exports = {
  query,
  execute,
  close: () => db.close()
};
