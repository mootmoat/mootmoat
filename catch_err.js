import { exec } from "child_process";
import fs from "fs";

exec("npx astro build", (error, stdout, stderr) => {
  fs.writeFileSync("error_log.txt", stdout + "\n---STDERR---\n" + stderr);
});
