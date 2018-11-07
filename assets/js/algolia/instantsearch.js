import instantsearch from "instantsearch.js/es";

// import widgets individually
import { searchBox } from "instantsearch.js/es/widgets";
import { stats } from "instantsearch.js/es/widgets";
//import { clearAll } from 'instantsearch.js/es/widgets';
import { refinementList } from "instantsearch.js/es/widgets";
import { hits } from "instantsearch.js/es/widgets";
import { pagination } from "instantsearch.js/es/widgets";

// import templates
import hitTemplate from "./templates/hits-listed-content.html";
import noResultsTemplate from "./templates/no-results.html";
import queryResultsTemplate from "./templates/query-results.html";
import hitsToolsTemplate from "./templates/hits-tools.html";

if (ENVIRONMENT == "production") {
  //var documentLoad = 'turbolinks:load';
  var documentLoad = "DOMContentLoaded";
} else {
  var documentLoad = "DOMContentLoaded";
}

document.addEventListener(documentLoad, function() {
  var search = instantsearch({
    appId: "R9DVKMXD80",
    apiKey: "2334c1652172c730d8405bc2c5667ff5",
    indexName: "all_content",
    routing: true
    // searchFunction: function(helper) {
    // 	var searchResults = document.getElementById('results');
    // 	var b = document.getElementsByTagName('BODY')[0];
    // 	if (helper.state.query === '') {
    // 		// searchResults.hide()
    // 		searchResults.classList.add('results-hidden');
    // 		b.classList.remove('search-displayed');
    // 		console.log('No Query');
    // 		return;
    // 	}
    // 	helper.search();
    // 	// searchResults.show()
    // 	console.log('query: ' + helper.state.query);
    // 	searchResults.classList.remove('results-hidden');

    // 	b.classList.add('search-displayed');
    // }
  });

  search.addWidget(
    searchBox({
      container: "#searchbox",
      autofocus: false,
      poweredBy: false,
      placeholder: "Search",
      magnifier: false,
      reset: false
    })
  );

  var secondarySearchbox = document.querySelector("#searchbox2");

  if (secondarySearchbox) {
    search.addWidget(
      searchBox({
        container: "#searchbox2",
        autofocus: true,
        poweredBy: false,
        placeholder: "Search",
        magnifier: false,
        reset: false
      })
    );
  }

  var searchStats = document.querySelector("#stats");	
	if (searchStats) {
    search.addWidget(
      stats({
        container: "#stats",
        templates: {
          body: queryResultsTemplate
        }
      })
    );
  }

  // search.addWidget(
  //   clearAll({
  //     container: "#clear-all",
  //     templates: {
  //       link: "Reset",
  //     },
  //     autoHideContainer: true,
  //     clearsQuery: true,
  //     cssClasses: {
  //       link:
  //         "inline-block px-3 py-1 no-underline rounded-t text-white text-sm bg-grey",
  //     },
  //   })
  // )
  var searchSections = document.querySelector("#sections");
  if (searchSections) {
    search.addWidget(
      refinementList({
        container: "#sections",
        attributeName: "Section",
        operator: "and",
        limit: 100,
        collapsible: { collapsed: false },
        cssClasses: {
          item: "inline-block mr-3 my-2 text-sm",
          list: "nav nav-list",
          count: "badge pull-right",
          active: "active"
        }
      })
    );
  }

  var searchRegions = document.querySelector("#regions");
  if (searchRegions) {
    search.addWidget(
      refinementList({
        container: "#regions",
        attributeName: "region",
        operator: "and",
        limit: 100,
        collapsible: { collapsed: false },
        cssClasses: {
          item: "inline-block mr-3 my-2 text-sm",
          list: "nav nav-list",
          count: "badge pull-right",
          active: "active"
        }
      })
    );
  }
  

  var searchHits = document.querySelector("#hits");
  if (searchHits) {
    search.addWidget(
      hits({
        hitsPerPage: 100,
        container: "#hits",
        collapsible: true,
        templates: {
          empty: noResultsTemplate,
          item: hitTemplate
        }
      })
    );
  }

  // var searchPagination = document.querySelector("#pagination");
  // if (searchPagination) {
  //   // initialize pagination
  //   search.addWidget(
  //     pagination({
  //       container: "#pagination",
  //       maxPages: 100,
  //       // default is to scroll to 'body', here we disable this behavior
  //       scrollTo: true
  //     })
  //   );
  // }

  search.start();
  // console.log("instantsearch Has been loaded")
  // document.addEventListener("DOMContentLoaded", function() {})
});
