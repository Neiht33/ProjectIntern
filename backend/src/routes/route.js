const coverletter = require('./coverletter')
const storecoverletter = require('./storecoverletter')
const category = require('./category')

function route(app) {
    app.use('/api/coverletter', coverletter)
    app.use('/api/storecoverletter', storecoverletter)
    app.use('/api/category', category)
}

module.exports = route