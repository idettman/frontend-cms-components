export default class BlockEditMenuItem {
	
	/**
	 * @param labelText {string}
	 * @param action {Function}
	 */
	constructor(labelText, action) {
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		this.container.textContent = labelText;
		
		/**
		 * @type {Function}
		 */
		this.action = action;
	}
	
	destroy() {
		this.action = undefined;
		
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}
}