const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace');

const entry = './src/server/**/*.js';
const cleanEntry = './src/server/config/index.js';

// 开发环境
function dev() {
    return watch(
        entry,
        {
            ignoreInitial: false,
        },
        function () {
            gulp.src(entry)
                .pipe(plumber())
                .pipe(
                    babel({
                        babelrc: false,
                        plugins: ['@babel/plugin-transform-modules-commonjs'],
                    })
                )
                .pipe(gulp.dest('./dist/server'));
        }
    );
}

// 生产环境
function prod() {
    return gulp
        .src(entry)
        .pipe(
            babel({
                babelrc: false,
                ignore: [cleanEntry],
                plugins: ['@babel/plugin-transform-modules-commonjs'],
            })
        )
        .pipe(gulp.dest('./dist/server'));
}

// 进行配置文件的treesharking
function config() {
    return gulp
        .src(entry)
        .pipe(
            rollup({
                input: cleanEntry,
                output: {
                    format: 'cjs',
                },
                plugins: [
                    replace({
                        'process.env.NODE_ENV': JSON.stringify('production'),
                    }),
                ],
            })
        )
        .pipe(gulp.dest('./dist/server'));
}

let build = gulp.series(dev);
if (process.env.NODE_ENV === 'production') {
    build = gulp.series(prod, config);
}
gulp.task('default', build);
