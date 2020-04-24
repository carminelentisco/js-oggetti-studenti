jQuery(document).ready(function ($) {
    
    // Setup
    var inputText = $('.input-text');
    var sendButton = $('.send-button');

    var source = $('#entry-template').html(); 
    var template = Handlebars.compile(source);

    var initialMessage = [
        {
            tipeOfMessage: 'message-send',
            positionMessage: 'flex_end',
            messageText: 'Ciao',
            timeMessage: '11:00'
        },
        {
            tipeOfMessage: 'message-recive',
            positionMessage: 'flex_start',
            messageText: 'Ciao',
            timeMessage: '11:00'
        },
        {
            tipeOfMessage: 'message-send',
            positionMessage: 'flex_end',
            messageText: 'Come va?',
            timeMessage: '11:00'
        },
        {
            tipeOfMessage: 'message-recive',
            positionMessage: 'flex_start',
            messageText: 'Bene, tu?',
            timeMessage: '11:00'
        }
    ];
    
    for ( var key in initialMessage) {
        var html = template(initialMessage[key])
        $('.message-box').append(html);
        console.log(html);
        
    }

    sendButton.on('click', function() {
        var textMessage = inputText.val().trim();

        var messageSend = {
            messageText: textMessage,
            tipeOfMessage: 'message-send',
            positionMessage: 'flex_end',
            timeMessage: '11:00'
        }

        var html = template(messageSend);
        $('.message-box').append(html);

        setTimeout(function(){

            var messageRecive = {
                messageText: 'ok',
                tipeOfMessage: 'message-recive',
                positionMessage: 'flex_start',
                timeMessage: '12:00'
            }

            var html = template(messageRecive);
            $('.message-box').append(html);


        }, 1000);
        


    } );

});