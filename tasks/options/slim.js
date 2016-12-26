module.exports = {
  dist: { // Target
    files: [{
        expand: true,
        cwd: 'src/slim',
        src: ['{,*/**/*}*.slim'],
        dest: 'build/',
        ext: '.html'
      }]
  }
}