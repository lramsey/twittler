$(document).ready(function(){
        
  var $tweetzone = $('.tweetzone');
  $tweetzone.html('');
        
  var posting = function(item){
    var tweet = item;
    var $tweet = $('<div></div>');
    var text = '<b>@' +tweet.user +'</b>' + ': ' + tweet.message + ". created on " + tweet.created_at;
    var $text = $tweet.append(text);
    $tweet.appendTo($tweetzone);
  };

  var home = function() {
      $('.tweetzone').children().remove();
      var index = streams.home.length - 1;
      while (index >= 0){
        posting(streams.home[index]);
        index -= 1;
      }
      $('input').val("10 Newest Tweets");
      $('input').removeClass('profile');
      profileClick();
      button(streams.home);
      $('h1').text("Welcome to Twittler!");
    };

  var headerClick = function() {
    $('h1').on('click', profilePage);
  };

  var profilePage = function(){
      $('.tweetzone').children().remove();
      var name = $(this).text().slice(1);
      if(name === "ome" || name === 'elcome to Twittler!') {
        home();
      }
      else{
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
      $('h1').text('@' + name);
    }
    };

  var profileClick = function() {
    $('.tweetzone').find('b').on('click', profilePage);
  };

  var sidebar = function() {
    $('.sidebar').find('a').on('click', profilePage);
  };

  var button = function(page){
    $('input').on('click', function(){
      $tweetzone.html('');
      var index = page.length - 1;
      while(index >= 0){
        posting(page[index]);
        $('.tweetzone').children().first().next().next().next().next().next().next().next().next().next().next().remove();
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
  sidebar();
  
});