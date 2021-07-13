import * as fs from "fs";

export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: fs.readFileSync("src/config/hello.json").toString(),
  };
}
