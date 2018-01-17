import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cssmin from 'gulp-cssmin';
import concat from 'gulp-concat';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
  return gulp.src(project.cssProcessor.sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/'))
    .pipe(sourcemaps.init())
    .pipe(concat(project.cssProcessor.concatCssDest))
    .pipe(cssmin({
      keepSpecialComments: 0
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.'))
    .pipe(changedInPlace({firstPass: true}))
    .pipe(build.bundle());
}
