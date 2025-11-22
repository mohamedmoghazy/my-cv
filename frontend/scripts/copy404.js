const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const dest404 = path.join(distDir, '404.html');

try
{
    if (!fs.existsSync(indexFile))
    {
        console.error('index.html not found in dist. Run build first.');
        process.exit(1);
    }

    fs.copyFileSync(indexFile, dest404);
    console.log('Copied index.html to 404.html');
} catch (err)
{
    console.error('Failed to copy 404:', err);
    process.exit(1);
}
