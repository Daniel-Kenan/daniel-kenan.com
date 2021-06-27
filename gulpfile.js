const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano') ;
const gulp = require('gulp');
const {src, dest, watch} = require('gulp');

function modify_css(){
    return src('./stylesheets/*.css').pipe(postcss([autoprefixer(),cssnano()])).pipe(dest('./public/stylesheets'));
}
function watchFile(){
    watch('./stylesheets/*.css',modify_css)
}
exports.default = watchFile

