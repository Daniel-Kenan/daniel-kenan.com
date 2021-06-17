const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano') ;
const gulp = require('gulp');
const {src, dest} = require('gulp');

function modify_css(){
    return src('./stylesheets/*.css').pipe(postcss([autoprefixer(),cssnano()])).pipe(dest('./public/stylesheets'));
}

exports.default = modify_css

