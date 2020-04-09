const rm = require('gulp-rm')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const { src, dest, task, series, watch, parallel } = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const gcmq = require('gulp-group-css-media-queries')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const svgo = require('gulp-svgo')
const svgSprite = require('gulp-svg-sprite')
const { DIST_PATH, SRC_PATH, STYLES, MODULES } = require('./gulp.config')
const gulpif = require('gulp-if')
const env = process.env.NODE_ENV

task('clean', () => {
  return src(`${DIST_PATH}/**/*`, {read: false})
    .pipe(rm())
})

task('copy:html', () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(`${DIST_PATH}`))
    .pipe(reload({ stream: true }))
})

task('styles', () => {
  return src([...STYLES, 'src/styles/main.scss'])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === 'dev', autoprefixer({
      overrideBrowsersList: ['last 2 versions'],
      cascade: false
    })))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}`))
    .pipe(reload({ stream: true }))
})

task('scripts', () => {
  return src([...MODULES, 'src/scripts/*.js'])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js', { newLine:';' }))
    .pipe(gulpif(env === 'prod', babel({ presets: ['@babel/env'] })))
    .pipe(gulpif(env === 'prod', uglify()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}`))
    .pipe(reload({ stream: true }))
})
task('icons', () => {
  return src(`${SRC_PATH}/img/svg/*.svg`)
    .pipe(svgo({
      plugins: [
        {
          removeAttrs: {
            attrs: 'viewBox'
          }
        }
      ]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest(`${DIST_PATH}/img/svg`))
})

task('fonts', function() {
  return src([`${SRC_PATH}/fonts/**/*`])
    .pipe(dest(`${DIST_PATH}/fonts/`))
});

task('images', function() {
  return src([`${SRC_PATH}/img/**/*.{jpg,png}`])
    .pipe(dest(`${DIST_PATH}/img/`))
});

task('videos', function() {
  return src([`${SRC_PATH}/videos/**/*.mp4`])
    .pipe(dest(`${DIST_PATH}/videos/`))
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: `./${DIST_PATH}`
    },
    open: false
  })
})

task('watch', () => {
  watch(`./${SRC_PATH}/styles/**/*.scss`, series('styles'))
  watch(`./${SRC_PATH}/*.html`, series('copy:html'))
  watch(`./${SRC_PATH}/scripts/*.js`, series('scripts'))
  watch(`./${SRC_PATH}/img/svg/*.svg`, series('icons'))
  watch(`./${SRC_PATH}/img/**/*.{jpg,png}`, series('images'))
  watch(`./${SRC_PATH}/videos/**/*.mp4`, series('videos'))
})

task('default', series('clean', parallel('copy:html', 'styles', 'scripts', 'icons', 'fonts', 'images', 'videos'), parallel('watch', 'server')))

task('build', series('clean', parallel('copy:html', 'styles', 'scripts', 'icons', 'fonts', 'images', 'videos')))