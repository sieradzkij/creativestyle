var Page;

(function ($) {
	"use strict";


	Page = function () {

		var selectedClass = 'selected',
			selectorItemOffer = 'div.itemOffer',
			selectorItemOfferRadio = 'div.itemOffer.radioOption',
			selectorItemOfferCheckbox = 'div.itemOffer.checkboxOption',
			selectorTotalPrice = '#price',
			selectorchoosedOption = 'div.choosedOption';


		//
		//
		//
		this.initialize = function () {
			Core.addDOMReadyListener(callself(this, this.DOMReadyHandler));
		};

		//
		//
		//
		this.DOMReadyHandler = function () {
			this.chooseOption(selectorItemOfferRadio);
			this.chooseOption(selectorItemOfferCheckbox);

			this.readValue();

			$(selectorItemOffer).click(callself(this, function () {
				this.readValue();
			}));
		};

		//
		//
		//
		this.chooseOption = function(selector) { 
			$(selector).click(function () {
				var status = $(this).find('input').prop('checked')
				if(status) {
					$(selector).removeClass(selectedClass);
					$(this).closest(selector).addClass(selectedClass);
				} else {
					$(this).closest(selector).removeClass(selectedClass);
				}
			});
		};

		//
		//
		//
		this.readValue = function () {
			var price = 0,
				count = 0;

			this.clearChoosedOptionBox();

			$(selectorItemOffer).each(callself(this, function (inst) {
				if($(inst).find('input').prop('checked')) {
					$(inst).addClass(selectedClass);
					this.setInformation(count, inst);
					count ++;

					price = price + parseFloat($(inst).find('span.price').attr('data'));
				}
			}));

			this.updatePrice(price);	
		};

		//
		//
		//
		this.setInformation = function (count, element) {
			var $selector = $(selectorchoosedOption).find('div.option').eq(count),
				className = $(element).find('span.ico').attr('class'),
				value = $(element).find('h4').text();

			$selector.show()
			$selector.find('span.ico').attr('class', className);
			$selector.find('p').html(value);
		};

		//
		//
		//
		this.clearChoosedOptionBox = function () {
			$(selectorchoosedOption).find('div.option').hide();
		};

		//
		//
		//
		this.updatePrice = function (value) {
			$(selectorTotalPrice).html(value);
		};
	};

	new Page().initialize();

}(jQuery));