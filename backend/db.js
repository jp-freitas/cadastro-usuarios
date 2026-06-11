import Database from "better-sqlite3";

export const db = new Database("banco.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    emaill TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
  )
  `);