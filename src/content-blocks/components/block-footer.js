export default class BlockFooter {
	
	/**
	 * @param requiredText {string}
	 */
	constructor(requiredText) {
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		this.container.style.cssText = [
			'position: absolute',
			'bottom: 0',
			'height: 20px',
			'width: 100%',
			'background-color: #666',
			'line-height: 20px'
		].join(';');

		this.container.textContent = requiredText;
	}
	
	destroy() {
		
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}
}