module.exports = function(app){
    app.get('/' ,require('./home'));

    app.use('/list', require('./list'));

    app.use(function(req ,res){
        if(!res.headersSent) {
            res.status(404).render('404.html',{title:"页面去了火星"});
        }
    });
};