!function(){"use strict";var e=setInterval(function(){window.ga&&ga.create&&(clearInterval(e),function(){i(document.getElementById("btn_link_home"),function(){ga("send",{hitType:"event",eventCategory:"Link:Internal",eventAction:"navigation",eventLabel:"Link:Home"})}),i(document.getElementById("btn_link_current_job"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:Current Job"})}),i(document.getElementById("btn_link_about"),function(){ga("send",{hitType:"event",eventCategory:"Link:Internal",eventAction:"navigation",eventLabel:"Link:About"})}),i(document.getElementById("btn_link_about"),function(){ga("send",{hitType:"event",eventCategory:"Link:Internal",eventAction:"navigation",eventLabel:"Link:Blog"})}),i(document.getElementById("btn_link_os"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:Open Source"})}),i(document.getElementById("btn_link_linkedin"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:LinkedIn"})}),i(document.getElementById("btn_link_twitter"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:Instagram"})}),i(document.getElementById("btn_link_contact"),function(){ga("send",{hitType:"event",eventCategory:"Link:Internal",eventAction:"navigation",eventLabel:"Link:Contact"})}),i(document.getElementById("btn_link_resume"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:Resume"})}),i(document.getElementById("btn_link_resume"),function(){ga("send",{hitType:"event",eventCategory:"Link:External",eventAction:"navigation",eventLabel:"Link:Resume"})});var n=document.getElementsByClassName("btn-link-blog-single");if(0<n.length)for(var t=0;t<n.length;t++)i(n[t],function(){var e=n[t].href;ga("send",{hitType:"event",eventCategory:"Link:Blog",eventAction:"navigation",eventLabel:e})})}())},100),n=setInterval(function(){if(void 0!==loadCSS){clearInterval(n);var e=document.getElementsByClassName("field-source-css")[0].value;loadCSS("https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,700,800"),loadCSS(e)}},100),t=setInterval(function(){void 0!==hljs&&(clearInterval(t),hljs.initHighlightingOnLoad())},100);var i=function(e,n){null!==e&&e.addEventListener("click",n())}}(),function(c){"use strict";var e=function(e,n,t){var i,a=c.document,o=a.createElement("link");if(n)i=n;else{var l=(a.body||a.getElementsByTagName("head")[0]).childNodes;i=l[l.length-1]}var v=a.styleSheets;o.rel="stylesheet",o.href=e,o.media="only x",function e(n){if(a.body)return n();setTimeout(function(){e(n)})}(function(){i.parentNode.insertBefore(o,n?i:i.nextSibling)});var r=function(e){for(var n=o.href,t=v.length;t--;)if(v[t].href===n)return e();setTimeout(function(){r(e)})};function d(){o.addEventListener&&o.removeEventListener("load",d),o.media=t||"all"}return o.addEventListener&&o.addEventListener("load",d),(o.onloadcssdefined=r)(d),o};"undefined"!=typeof exports?exports.loadCSS=e:c.loadCSS=e}("undefined"!=typeof global?global:this);