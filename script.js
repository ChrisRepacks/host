var MONTH_FORMAT = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];var NO_IMAGE = "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";var IBOX_NUM = 5;var SBOX_NUM = 4;var CAROUSEL_NUM = 6;var WIDGET_RECENT_POST_NUM = 3;var WIDGET_RANDOM_POST_NUM = 3;var WIDGET_RECENT_COMMENT_NUM = 3;var WIDGET_LABEL_POST_NUM = 3;var POSTPERPAGE_NUM = 6;var LABEL_SEARCH_NUM = 6;var POSTNAV_PREV_TEXT ="<i class='fa fa-angle-double-left'/> Prev";var POSTNAV_NEXT_TEXT = "Next <i class='fa fa-angle-double-right'/>";(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(e){var f=-1;var g="";var h="";e("#menu").find("ul").find("li").each(function(){var a=e(this).text();var b=e(this).find("a").attr("href");var c=0;var d=0;for(;d<a.length&&(c=a.indexOf("_",c),-1!=c);d++){c++}
if(level=d,level>f&&(g=g+"<ul>",h=h+"<ul>"),level<f){offset=f-level;d=0;for(;d<offset;d++){g=g+"</ul></li>";h=h+"</ul></li>"}}
a=a.replace(/_/gi,"");g=g+("<li><a href='"+b+"'>"+a+"</a>");h=h+("<li><a href='"+b+"'>");d=0;for(;d<level;d++){h=h+""}
h=h+(a+"</a>");f=level});var i=0;for(;f>=i;i++){g=g+"</ul>";h=h+"</ul>";if(0!=i){g=g+"</li>";h=h+"</li>"}}
e("#menu .LinkList").html(h);e("#menu > .LinkList > ul").attr("id","menu-main-nav");selectnav("menu-main-nav");e("#menu ul > li > ul").parent("li").addClass("parent");e("#menu .widget").attr("style","display:block!important;")});$(function(){selectnav("nav1")});$(document).ready(function(){$("#menu").show();$("ul.sub-menu").parent("li").addClass("has-children");$("#menu ul li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})});$("#search-icon").on("click",function(){$("#nav-search").slideToggle(250)});var e=$("#main-nav #s").val();$("#main-nav #s").blur(function(){if(0===this.value.length){this.value=e}});$("#main-nav #s").focus(function(){if(this.value===e){this.value=""}});$(".index .post-outer,.archive .post-outer").each(function(){$(this).find(".block-image .thumb a").attr("style",function(a,b){return b.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(a,b){return b.replace("s72-c","s1600")})});$(".index .post-outer,.archive .post-outer").each(function(){$(this).find(".block-image .thumb a").attr("style",function(a,b){return b.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",""+NO_IMAGE+"")})});$("body").addClass("img-anime");$(window).bind("load resize scroll",function(){var d=$(this).height();$(".box-image,.bf-thumb,.rcthumb,.PopularPosts img,.home .block-image .thumb a,.tc-thumb a,.related-thumb a,.PopularPosts .item-thumbnail a,.cmm-img").each(function(){var a=0.1*$(this).height();var b=a-d+$(this).offset().top;var c=$(document).scrollTop();if(c>b){$(this).addClass("img-effect")}})})});
