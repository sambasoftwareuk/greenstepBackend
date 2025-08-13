// lib/db.js
import mysql from "mysql2/promise";

export function getDb() {
  if (!globalThis._mysqlPool) {
    globalThis._mysqlPool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      timezone: "Z", // UTC
    });
  }
  return globalThis._mysqlPool;
}
