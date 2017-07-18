const watson = require('watson-developer-cloud');

exports.message = (mensagem, callback) => {



    var ConversationV1 = require('watson-developer-cloud/conversation/v1');

    var conversation = new ConversationV1({
        username: 'xxxxxxx',
        password: 'xxxxxx',
        version_date: ConversationV1.VERSION_DATE_2017_04_21
    });



    conversation.message({
        input: { 'text': mensagem.texto },
        workspace_id: 'xxxxxxx',
        context: mensagem.contexto
    }, function(err, response) {
        if (err) {
            console.error(err);
            callback(err,null);

        } else {
            console.log(JSON.stringify(response, null, 2));
            callback(null,response);
        }
    });
}
