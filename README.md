### gif-roulette

Replace every image on the page with a random pic from imgur.

#### Installation instructions:

Drag (this link)[javascript:!function(){function t(){i=document.getElementsByTagName("img"),u="e454899ed9b0ad8"}function n(){e(r)}function e(t){var n=new XMLHttpRequest;n.open("GET",a(),!1),n.setRequestHeader("Authorization","Client-ID "+u),n.send(null);var e=n.responseText;t(e)}function r(t){function n(){var t=Math.floor(Math.random()*r);return e[t].link}for(var e=JSON.parse(t).data,r=e.length,a=0;a<i.length;a++){var o=i[a],u=o.clientWidth,c=o.clientHeight,h=n();o.width=u,o.height=c,o.src=h}}function a(){return"https://api.imgur.com/3/gallery/random/random/"+o()}function o(t){return Math.floor(Math.random()*(t||1e5))}var i,u;t(),n()}();] to your toolbar. Then go to a page with some images and click it.
