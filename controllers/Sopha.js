module.exports.controller = (app) => {
    //get sopha page
    app.get('/Sopha', (req, res) => {
        res.render('index', {title: 'Sopha'})
    })
}