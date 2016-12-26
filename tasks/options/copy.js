module.exports = {
  images: {
    expand: true,
    cwd: 'src/i/',
    src: ['**/*.{png,jpg,svg}'],
    dest: 'build/i/'
  },
  javascript: {
    expand: true,
    cwd: 'src/js/',
    src: ['**'],
    dest: 'build/js'
  }
}