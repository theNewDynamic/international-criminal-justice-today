// TUMBLR API


    $.ajax({
        url: "http://api.tumblr.com/v2/blog/aba-icc.tumblr.com/posts?api_key=712yUR7HNAL8B8YXhrRwvH3sCnAgjV74BlYezAD8KWtbtXM9Ij&limit=3",
        dataType: 'jsonp',
        success: function(results){
          //console.log(results);
          $.each(results.response.posts, function(i, item){
              //var src = item.photos.url; // first picture, first size
              var caption = item.caption;
              var body = item.body;
              var text = item.text;
              var description = item.description;
              var source_title = item.source_title;
              var source_title = item.source_title;
              //$("<img/>").attr("src", src).appendTo("#wrapper").wrap('<div class="postImage"></div>').after('<span class="postCaption">' + body + '</div>');
              if(item.title && item.post_url) {
                  $('<h6><a href="' + item.url +   '" target="_blank">' +  item.title + '</a> <small><i class="icon-link-ext" style="font-size:.8em;"></i></small> </h6>').appendTo('#content_tumblr');
                    }
                    else if(item.title) {
                      $('<h5>' + item.title + '</h5>').appendTo('#content_tumblr');
                };


              if(item.description) {
                  $('<small>' + description + '</small>').appendTo('#content_tumblr');
                };

                if(item.text) {
                  $('<blockquote><em><small>' + text + '</small></em></blockquote>').appendTo('#content_tumblr');
                };

                  if(item.source) {
                  $('<small>&mdash;' + text + '</small>').appendTo('#content_tumblr');
                };

                 if(item.source_title) {
                  $('<br /><small><strong>' + source_title + '</strong></small>').appendTo('#content_tumblr');
                };

                if(item.urlTK) {
                  $('<a href="' + item.url +   '" target="_blank">LINK</a>').appendTo('#content_tumblr');
                };
                    $('<hr />').appendTo('#content_tumblr')
              });
            }
          });


$("a#show-tumblr-extended").click(function(){
  $("#content_tumblr-long").slideToggle('slow');
  $("a#show-tumblr-extended").addClass('space-below-big');
});

$("a#show-arguendo-extended").click(function(){
  $("#content_arguendo").slideToggle('slow');

});


//// SECOND, HIDDEN SET
          $.ajax({
              url: "http://api.tumblr.com/v2/blog/aba-icc.tumblr.com/posts?api_key=712yUR7HNAL8B8YXhrRwvH3sCnAgjV74BlYezAD8KWtbtXM9Ij&limit=40&offset=3",
              dataType: 'jsonp',
              success: function(results){
                //console.log(results);
                $('<div style="display:none;" id="tumblr-extended">').appendTo('#content_tumblr-long');
                $.each(results.response.posts, function(i, item){
                    //var src = item.photos.url; // first picture, first size
                    var caption = item.caption;
                    var body = item.body;
                    var text = item.text;
                    var description = item.description;
                    var source_title = item.source_title;
                    var source_title = item.source_title;
                    //$("<img/>").attr("src", src).appendTo("#wrapper").wrap('<div class="postImage"></div>').after('<span class="postCaption">' + body + '</div>');
                    if(item.title && item.post_url) {
                        $('<h6><a href="' + item.url +   '" target="_blank">' +  item.title + '</a> <small><i class="icon-link-ext" style="font-size:.8em;"></i></small> </h6>').appendTo('#content_tumblr-long');
                          }
                          else if(item.title) {
                            $('<h5>' + item.title + '</h5>').appendTo('#content_tumblr-long');
                      };


                    if(item.description) {
                        $('<small>' + description + '</small>').appendTo('#content_tumblr-long');
                      };

                      if(item.text) {
                        $('<blockquote><em><small>' + text + '</small></em></blockquote>').appendTo('#content_tumblr-long');
                      };

                        if(item.source) {
                        $('<small>&mdash;' + text + '</small>').appendTo('#content_tumblr-long');
                      };

                       if(item.source_title) {
                        $('<br /><small><strong>' + source_title + '</strong></small>').appendTo('#content_tumblr-long');
                      };

                      if(item.urlTK) {
                        $('<a href="' + item.url +   '" target="_blank">LINK</a>').appendTo('#content_tumblr-long');
                      };
                          $('<hr />').appendTo('#content_tumblr-long')
                    });

                  $('</div>').appendTo('#content_tumblr-long');
                  }
                });





//-END TUMBLR API
