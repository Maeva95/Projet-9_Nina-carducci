const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: [
                './**/*.html',
                './gallery/modal.html',
                
            ],
            css: [
                './assets/bootstrap/bootstrap.css'
            ]
        })
    ]
}