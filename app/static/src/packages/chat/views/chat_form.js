define(function(require, exports, module) {
	var Message,
		ChatFormTpl;
	Message = require('packages/chat/models/message');
	ChatFormTpl = require('text!./templates/chat_form.html');
	return Backbone.Marionette.ItemView.extend({
		template: _.template(ChatFormTpl),
		ui: {
			form: 'form[name=chat-form]',
			nicknameBox: 'input[name=nickname]',
			messageBox: 'textarea[name=message]',
			sendMessageBtn: 'input[name=send-message-btn]'
		},
		events: {
			'click input[name=send-message-btn]': 'sendMessage',
			'keydown textarea[name=message]': '_hideError'
		},
		sendMessage: function(e) {
			var text,
				nickname,
				time;
			text = this.ui.messageBox.val();
			if(!text) {
				this._showError();
				return;
			}
			nickname = this.ui.nicknameBox.val();
			time = Date.now();
			var message = new Message({
				nickname: nickname,
				text: text,
				time: time
			});
			this.model.sendMessage(message);
			this._clearMessageBox();
		},
		_showError: function() {
			this.ui.messageBox.addClass('error');
		},
		_hideError: function() {
			this.ui.messageBox.removeClass('error');
		},
		_clearMessageBox: function() {
			this.ui.messageBox.val('');
		}
	});
});
