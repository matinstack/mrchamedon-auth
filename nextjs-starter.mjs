import path from "path";
import fs from "fs";

const folders = [
  "actions",
  "actions/auth",

  "app/(protected)",
  "app/(root)",
  "app/api/auth/[...nextauth]",
  "app/auth",
  "app/auth/login",
  "app/auth/register",
  "app/auth/verify",

  "components/ui",
  "components/shared",
  "components/shared/header",
  "components/shared/footer",
  "components/shared/header",
  "components/auth",

  "lib",
  "lib/db",
  "lib/db/schema",
  "lib/db/migrations",

  "hooks",
  "data",

  "schema",
];

folders.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`⌛ Creating :`, dir);
  } else {
    console.log(`⏭️ Directory : ${dir} Already Exists, Skipping`);
  }
});
console.log("✅ Creating Folders DONE");
