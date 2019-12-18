/*
	Copyight: Deux Huit Huit 2013
	License: MIT, http://deuxhuithuit.mit-license.org
*/

/**
 * Client code for link_preview
 *
 * @author deuxhuithuit
 */
(function ($, undefined) {

	'use strict';

	var FIELD = 'field-link_preview';
	var FIELD_CLASS = '.' + FIELD;
	var target = $();

	var hookOne = function (index, elem) {
		elem = $(elem);

		var url = elem.attr('data-url');
		var text = elem.attr('data-text');

		if (!!url && url != '') {
			var link = $('<a />')
				.html('<svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M19 1H10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19 10V1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M1 1V15C1 17.2091 2.79086 19 5 19H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7071 1.70711C20.0976 1.31658 20.0976 0.683417 19.7071 0.292893C19.3166 -0.0976311 18.6834 -0.0976311 18.2929 0.292893L19.7071 1.70711ZM7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L7.29289 11.2929ZM18.2929 0.292893L7.29289 11.2929L8.70711 12.7071L19.7071 1.70711L18.2929 0.292893Z" fill="currentColor"/></svg>')
				.attr('class', 'button drawer vertical-right link-preview')
				.attr('href', url)
				.attr('target', '_blank')
				.attr('title', text);

			target.prepend(link);
		}

		elem.remove();
	};

	var init = function () {
		target = window.Symphony.Elements.contents.find('#contents-actions .actions').first();

		return $(FIELD_CLASS).each(hookOne);
	};

	$(init);

})(jQuery);
