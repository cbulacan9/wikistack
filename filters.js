var marked = require('marked');

module.exports = function(swig) {

var markedFilter = function(body) { 
	return marked(body);
}
markedFilter.safe = true;
swig.setFilter('markedFilter', markedFilter);
var page_link = function (doc) {
  var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/show_page/"+doc.url_name+"'>"+link_name+"</a>";
};
page_link.safe = true;

swig.setFilter('page_link', page_link);

var edit_link = function (doc) {
  var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/edit_page/"+doc.url_name+"'>"+link_name+"</a>";
};
edit_link.safe = true;

swig.setFilter('edit_link', edit_link);

};
