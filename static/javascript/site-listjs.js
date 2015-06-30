  var options = {
      valueNames: [ 'name', 'slug' , 'category', 'tagline', 'categories', 'date'],
      listClass: 'list-filter',
      page: 2000 // how many items should first show up on the page - affects performance
      // add tagline, or option for it?
  };


  var authorList = new List('container-filter', options);


if (document.getElementById("filter-news")) {
  document.getElementById("filter-news").onclick=function(){
          authorList.filter(function(item) {
             if (item.values().category == "news" ) {
               return true;
               } else {
               return false;
            }
        });
      };
    }

if (document.getElementById("filter-opinion")) {
  document.getElementById("filter-opinion").onclick=function(){
          authorList.filter(function(item) {
             if (item.values().category == "opinion" ) {
               return true;
               } else {
               return false;
            }
        });
      };
    }



//and clear the filters
if (document.getElementById("filter-clear")) {
   document.getElementById("filter-clear").onclick=function(){
       authorList.filter();
      };
    }

