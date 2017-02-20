var a=11;!function(o){o.module("moviecat",["moviecat.home_page","moviecat.jsonp","moviecat.detail","moviecat.list"]).controller("myController",["$scope","$location",function(o,a){o.location=a,o.url="",o.$watch("location.url()",function(a,c){o.url=a}),o.qName="",o.search=function(){a.url("/search?q="+o.qName)}}])}(angular);

console.log("");