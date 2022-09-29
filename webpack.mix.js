// webpack.mix.js

// let mix = require('laravel-mix');
//
// mix.js('src/app.js', 'dist').setPublicPath('dist');

let mix = require('laravel-mix');

const srcDir = 'src';
const distDir = 'dist';

mix.sass(`${srcDir}/styles/main.scss`, `${distDir}`)


// npx mix