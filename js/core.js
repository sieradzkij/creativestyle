var Core, callself;

(function ($) {
	"use strict";

	//
	//
	//
	Core = {
		//
		//
		//
		addDOMReadyListener: function (callback) {
			jQuery(callback);
		}
	};

	//
	//
	//
	callself = function (instance, callback) {
		return function () {
			var argumentsList = [this], i;
			for (i = 0; i < arguments.length; i += 1) {
				argumentsList.push(arguments[i]);
			}
			return callback.apply(instance, argumentsList);
		};
	};

}(jQuery));


jQuery(Core.initialize);