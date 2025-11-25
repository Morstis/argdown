import fs from "fs";

// destination.txt will be created or overwritten by default.
fs.copyFile(
  "./src/snow-in-spring.argdown-theme.css",
  "./dist/snow-in-spring.argdown-theme.css",
  (err) => {
    if (err) throw err;
    console.log("CSS file copied to dist/");
  }
);
