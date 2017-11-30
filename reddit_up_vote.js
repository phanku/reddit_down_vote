var items = $('.arrow.down');
function doit(target) {if ($(target).parent('.midcol').hasClass('unvoted')) {window.scrollTo(0, $(target).position().top - 200); $(target).click();}next();}
function next() {if (items.length > 0) {var next = items.splice(0, 1);setTimeout(function() {doit(next[0])},gr());} else {console.log('done');}}
function ggr() {return Math.floor(Math.random() * (5000 - 700 + 1)) + 700;}
function gr() {return Math.floor(Math.random() * (ggr() - 500 + 1)) + 400;}
next();
