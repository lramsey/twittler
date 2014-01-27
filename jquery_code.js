      $(document).ready(function(){
        
        var $span = $('span');
        $span.html('');
        
        var posting = function(input){
          var tweet = input;
          var $tweet = $('<div></div>');
          var text = '<b>@' +tweet.user +'</b>' + ': ' + tweet.message + ".\n created on " + tweet.created_at;
          var $text = $tweet.append(text);
          $tweet.appendTo($span);
        };

        var profileClick = function() {
          $('span').find('b').on('click', function(){
            $('span').children().remove();
            var name = $(this).text().slice(1);
            var profile = streams.users[name];
            var profileIndex = profile.length -1;
            while(profileIndex >= 0){
              posting(profile[profileIndex]);
              profileIndex -= 1;
            }
            profileClick();
          });
        };

        var index = streams.home.length - 1;
        while (index >= 0){
          posting(streams.home[index]);
          index -= 1;
        }

        profileClick();

        $('button').on('click', function(){
          $span.html('');
          var index = streams.home.length - 1;
          while(index >= 0){
            posting(streams.home[index]);
            $('span').children().first().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().remove();
            index -= 1;
          }
          profileClick();
        });

      });