const fs = require("fs");
const path = require("path");

const replacements = {
  "Ã¢â‚¬â€ ": "—",
  "Ã¢â‚¬â„¢": "'",
  "Ã¢â‚¬Å“": "\"",
  "Ã¢â‚¬ï¿½": "\"",
  "Ã‚Â·": "·",
  "Ã¢â‚¬â€œ": "–",
  "Ã¢â‚¬Ëœ": "'",
  "Ã¢â‚¬Â ": "\"",
  "Ã¢â€ â€™": "→",
  "ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ": "—",
  "ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢": "'"
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, "src"), function(filePath) {
  if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    for (let key in replacements) {
      if (content.includes(key)) {
        content = content.split(key).join(replacements[key]);
        modified = true;
      }
    }
    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log("Fixed: " + filePath);
    }
  }
});
