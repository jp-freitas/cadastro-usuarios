import Database from "better-sqlite3";

export const db = new Databese("banco.db")

db.exc(`
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  passaword_hash TEXT NOT NULL
  )
`);
