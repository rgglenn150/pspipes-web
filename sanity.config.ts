import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "pspipes.net Blog",
  apiVersion: "2024-01-01",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
