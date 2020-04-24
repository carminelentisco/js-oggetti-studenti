jQuery(document).ready(function ($) {
    
    // Setup
    var inputText = $('.input-text').val('');
    var sendButton = $('.send-button');
    var source = $('#entry-template').html(); 
    var template = Handlebars.compile(source);
    var messageBox = $('.message-box');
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

    // Print initial messages 
    for ( var key in initialMessage) {
        var html = template(initialMessage[key])
        messageBox.append(html);   
    }

    clickSendMessageButton();
    clickSendMessageKey();
    

    /****************** FUNCTION ******************/
    function reciveMessage() {
        
        setTimeout(function(){
    
            var messageRecive = {
                messageText: 'ok',
                tipeOfMessage: 'message-recive',
                positionMessage: 'flex_start',
                timeMessage: '12:00'
            }

            var html = template(messageRecive);
            messageBox.append(html);

        }, 1000);

    }

    function clickSendMessageButton () {
            
            sendButton.on('click', function() {
        
                if ( inputText.val() !== '') {
                    
                    var textMessage = inputText.val().trim();
                    inputText.val('');
            
                    var messageSend = {
                        messageText: textMessage,
                        tipeOfMessage: 'message-send',
                        positionMessage: 'flex_end',
                        timeMessage: '11:00'
                    }
            
                    var html = template(messageSend);
                    messageBox.append(html);
            
                    reciveMessage(); 

                }       
                
            } );
        
    }

    function clickSendMessageKey() {
        inputText.keyup(function (e) { 
            
            if ( e.which == 13 ) {
                
                if ( inputText.val() !== '') {
                    
                    var textMessage = inputText.val().trim();
                    inputText.val('');
            
                    var messageSend = {
                        messageText: textMessage,
                        tipeOfMessage: 'message-send',
                        positionMessage: 'flex_end',
                        timeMessage: '11:00'
                    }
            
                    var html = template(messageSend);
                    messageBox.append(html);
            
                    reciveMessage();        
                     
                }
            
            }
            
        });
    }

}); // ----------------------- End page