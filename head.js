(function(name, definition) {

	if (typeof module != 'undefined' && module.exports) module.exports = definition()
	else if (typeof define == 'function' && define.amd) define(definition)
	else window[name] = definition()

})('<%= name %>', function() {