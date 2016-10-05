var i = $('.arrow.down');
function d(t) {if ($(t).parent('.midcol').hasClass('unvoted')) {$(t).click();}n();}
function n() {if (i.length > 0) {var n = items.splice(0, 1);setTimeout(function() {d(n[0])},r());} else {console.log('done');}}
function s() {return Math.floor(Math.random() * (3000 - 700 + 1)) + 700;}
function r() {return Math.floor(Math.random() * (s() - 500 + 1)) + 400;}
n();
