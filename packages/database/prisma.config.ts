import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../apps/web/.env") });

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    seed: "tsx src/seed.ts",
  },
});
