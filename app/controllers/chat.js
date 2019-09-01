module.exports.iniciaChat = function(application, req, res){
    // var dadosForm = req.body;
    // req.assert('apelido','Nome ou apelido e obrigatorio').notEmpty();
    // req.assert('apelido','Nome ou apelido e deve conter entre 3 a 30 caracteres').len(3,30);

    // var erros = req.validatorErrors();

    // if(erros){
    //     res.render("index", {validacao : erros});
    //     return;
    // }

    res.render("chat");
}