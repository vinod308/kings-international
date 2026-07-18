import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function readContentDir<T>(dir: string): T[] {
  const dirPath = path.join(CONTENT_DIR, dir);
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), "utf8");
    return JSON.parse(raw) as T;
  });
}

export function readContentFile<T>(file: string): T {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  return JSON.parse(raw) as T;
}
