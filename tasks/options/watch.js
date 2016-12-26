module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['src/js/**/*.js'],
    tasks: [ 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['src/scss/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  slim:{
    files: ['src/slim/**/*.slim'],
    tasks: ['slim'],
    options: {
      spawn: false
    }
  },
  copy:{
    files: ['src/i/**/*'],
    tasks: ['copy:images'],
    options: {
      spawn: false
    }
  }
}