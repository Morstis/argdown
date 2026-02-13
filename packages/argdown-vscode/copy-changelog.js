const fs = require("fs");

// destination.txt will be created or overwritten by default.
fs.copyFile(
  "../../packages/argdown-docs/docs/changes/index.md",
  "CHANGELOG.md",
  (err) => {
    if (err) throw err;
  }
);
