/**
 * Directive: Quickpost
 */

angular.module('WooferApp')
	.directive('quickpost', function quickpost(){
		'use strict';

		return {
			restrict: "EA",
			replace: true,
			scope: true,
			templateUrl: 'js/directives/quickpost.tmpl.html',
			controllerAs: 'quickpost',

			controller: function(IndexFactory){

				this.offers = [];

				this.addQuickOffer = function(){
					IndexFactory.addQuickOffer();
				}

				// this.goToMessage = function(id){
				// 	InboxFactory.goToMessage(id);
				// };

				// this.deleteMessage = function(id, index){
				// 	InboxFactory.deleteMessage(id, index);
				// };

				// InboxFactory.getMessages().then(angular.bind(this, function then(){
				// 	this.messages = InboxFactory.messages;
				// }) );

			},

			link: function(scope, element, attrs, ctrl){
				/* link function arguments do not need the $prefix, this is to be explicit about the order */
			}
		}
	});