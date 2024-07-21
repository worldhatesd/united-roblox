import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const testtable = pgTable("testtable", {
  id: serial("id").primaryKey(),
  name: text("name"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});
