$(document).ready(function(){
        
  var $span = $('span');
  $span.html('');
        
  var posting = function(item){
    var tweet = item;
    var $tweet = $('<div></div>');
    var text = '<b>@' +tweet.user +'</b>' + ': ' + tweet.message + ". created on " + tweet.created_at;
    var $text = $tweet.append(text);
    $tweet.appendTo($span);
  };

  var headerClick = function() {
    $('h1').on('click', function() {
      $('span').children().remove();
      var index = streams.home.length - 1;
      while (index >= 0){
        posting(streams.home[index]);
        index -= 1;
      }
      $('input').val("10 Newest Tweets");
      $('input').removeClass('profile');
      profileClick();
      button(streams.home);
    });
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
      $('input').val("@" + name + "'s 10 Newest Tweets");
      $('input').addClass('profile');
      profileClick();
      button(profile);
    });
  };

  var button = function(page){
    $('input').on('click', function(){
      $span.html('');
      var index = page.length - 1;
      while(index >= 0){
        posting(page[index]);
        $('span').children().first().next().next().next().next().next().next().next().next().next().next().remove();
        index -= 1;
      }
      profileClick();
  });

  };

  var index = streams.home.length - 1;
  while (index >= 0){
    posting(streams.home[index]);
    index -= 1;
  }

  headerClick();
  profileClick();
  button(streams.home);
  
});