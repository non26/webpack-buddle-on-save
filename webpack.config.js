const path = require('path')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'myBuddle.js',
        path:  path.resolve(__dirname, 'dist') // need absolute path
    },
    // watch: true, in case of use dev-server
    devServer: {
        port: 8080,
        static: { /// use static instead of contentBase
            directory: path.join(__dirname, "dist")
          },
          hot: true /// inject latest code without reload the page
    },
    // mode: 'development'
}