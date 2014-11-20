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
    return "<a href='/dis/"+doc.url_name+"'>"+link_name+"</a>";
};
page_link.safe = true;

swig.setFilter('page_link', page_link);

var dis_link = function (doc) {
  var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/show_page/"+doc.url_name+"/"+doc._id+"'>"+link_name+"</a>"+", "+doc.body.substring(0,75);
};
dis_link.safe = true;

swig.setFilter('dis_link', dis_link);

};
