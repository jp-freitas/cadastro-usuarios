import Database from "better-sqlite3";

export const db = new Database("bsnco.db");

db.exec(`
  create table if not exists users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL
  )
  `);