import Database from  ""better-sqlite3";

export const db = new Database("banco.db")

db.exec(`
  
  CREAT TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL, 
  email TEXT NOT NULL UNIQUE, 
  passoword_hash TEXT NOT NULL
  )
  `);
