const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');

const input = fs.readFileSync('./tailwind-input.css', 'utf8');

postcss([tailwindcss])
  .process(input, { from: './tailwind-input.css', to: './styles.css' })
  .then((result) => {
    fs.writeFileSync('./styles.css', result.css);
    console.log('CSS built successfully!');
  })
  .catch((err) => {
    console.error('Error building CSS:', err);
    process.exit(1);
  });
