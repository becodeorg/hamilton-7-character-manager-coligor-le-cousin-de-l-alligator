const { resolve } = require('path')
const { root } = require('postcss')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        create: './character-creator.html',
        view: './singlecharacter.html',
        update: './editcharacter.html'
      }
    }
  }
}
