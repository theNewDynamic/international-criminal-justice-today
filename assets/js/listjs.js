if (ENVIRONMENT == 'production') {
  //var documentLoad = "turbolinks:load";
  var documentLoad = "DOMContentLoaded";
} else {
  var documentLoad = "DOMContentLoaded";
}
document.addEventListener(documentLoad, function() {
  var List = require("list.js");

  var libraryFilters = {
    valueNames: ["company", "location", "phone", "website", "partners", "countries", "home_country", "executive"],
    listClass: "filteredlist"
  };
  var library = new List("filter", libraryFilters);  
  var library0 = new List("filter0", libraryFilters);  
  var library1 = new List("filter1", libraryFilters);  
  var library2 = new List("filter2", libraryFilters);  
  var library3 = new List("filter3", libraryFilters);  
  var library4 = new List("filter4", libraryFilters);  




});
  
  

