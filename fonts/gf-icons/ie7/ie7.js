/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'gf-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'gf-icon-heart': '&#xe600;',
		'gf-icon-heart2': '&#xe601;',
		'gf-icon-share': '&#xe602;',
		'gf-icon-location': '&#xe603;',
		'gf-icon-phone': '&#xe604;',
		'gf-icon-map': '&#xe605;',
		'gf-icon-location2': '&#xe606;',
		'gf-icon-star': '&#xe607;',
		'gf-icon-star2': '&#xe608;',
		'gf-icon-thumbs-up': '&#xe609;',
		'gf-icon-chat': '&#xe60a;',
		'gf-icon-comment': '&#xe60b;',
		'gf-icon-user': '&#xe60c;',
		'gf-icon-users': '&#xe60d;',
		'gf-icon-user-add': '&#xe60e;',
		'gf-icon-export': '&#xe60f;',
		'gf-icon-forward': '&#xe610;',
		'gf-icon-reply-all': '&#xe611;',
		'gf-icon-reply': '&#xe612;',
		'gf-icon-pencil': '&#xe613;',
		'gf-icon-mail': '&#xe614;',
		'gf-icon-paperclip': '&#xe615;',
		'gf-icon-quote': '&#xe616;',
		'gf-icon-house': '&#xe617;',
		'gf-icon-link': '&#xe618;',
		'gf-icon-camera': '&#xe61a;',
		'gf-icon-cross': '&#xe61b;',
		'gf-icon-checkmark': '&#xe61c;',
		'gf-icon-plus': '&#xe61d;',
		'gf-icon-minus': '&#xe61e;',
		'gf-icon-layout': '&#xe61f;',
		'gf-icon-list': '&#xe620;',
		'gf-icon-list2': '&#xe621;',
		'gf-icon-play': '&#xe622;',
		'gf-icon-record': '&#xe623;',
		'gf-icon-arrow-down': '&#xe624;',
		'gf-icon-arrow-right': '&#xe625;',
		'gf-icon-arrow-up': '&#xe626;',
		'gf-icon-arrow-left': '&#xe627;',
		'gf-icon-arrow-down2': '&#xe628;',
		'gf-icon-arrow-left2': '&#xe629;',
		'gf-icon-arrow-up2': '&#xe62a;',
		'gf-icon-arrow-right2': '&#xe62b;',
		'gf-icon-ellipsis': '&#xe62c;',
		'gf-icon-github': '&#xe62d;',
		'gf-icon-flickr': '&#xe62e;',
		'gf-icon-vimeo': '&#xe62f;',
		'gf-icon-twitter': '&#xe630;',
		'gf-icon-facebook': '&#xe631;',
		'gf-icon-googleplus': '&#xe632;',
		'gf-icon-pinterest': '&#xe633;',
		'gf-icon-tumblr': '&#xe634;',
		'gf-icon-linkedin': '&#xe635;',
		'gf-icon-dribbble': '&#xe636;',
		'gf-icon-instagram': '&#xe637;',
		'gf-icon-dropbox': '&#xe638;',
		'gf-icon-skype': '&#xe639;',
		'gf-icon-behance': '&#xe63a;',
		'gf-icon-smashing': '&#xe63b;',
		'gf-icon-cc': '&#xe63c;',
		'gf-icon-resize-shrink': '&#xe63d;',
		'gf-icon-resize-enlarge': '&#xe63e;',
		'gf-icon-pictures': '&#xe63f;',
		'gf-icon-cycle': '&#xe640;',
		'gf-icon-cw': '&#xe641;',
		'gf-icon-rocket': '&#xe642;',
		'gf-icon-network': '&#xe643;',
		'gf-icon-key': '&#xe644;',
		'gf-icon-lock': '&#xe645;',
		'gf-icon-lock-open': '&#xe646;',
		'gf-icon-infinity': '&#xe647;',
		'gf-icon-dot': '&#xe648;',
		'gf-icon-search': '&#xe619;',
		'gf-icon-menu': '&#xe649;',
		'gf-icon-safari': '&#xe64a;',
		'gf-icon-opera': '&#xe64b;',
		'gf-icon-IE': '&#xe64c;',
		'gf-icon-firefox': '&#xe64d;',
		'gf-icon-chrome': '&#xe64e;',
		'gf-icon-css3': '&#xe64f;',
		'gf-icon-html5': '&#xe650;',
		'gf-icon-html52': '&#xe651;',
		'gf-icon-windows8': '&#xe652;',
		'gf-icon-windows': '&#xe653;',
		'gf-icon-android': '&#xe654;',
		'gf-icon-finder': '&#xe655;',
		'gf-icon-apple': '&#xe656;',
		'gf-icon-tux': '&#xe657;',
		'gf-icon-earth': '&#xe658;',
		'gf-icon-camera2': '&#xe659;',
		'gf-icon-cog': '&#xe65a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/gf-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
