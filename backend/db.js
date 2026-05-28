import database from "better-sqlite3";

export const db = database ("banco.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     email TEXT NOTE NULL UNIQUE,
     password_hash TEXT NOT NULL
  )
`); 