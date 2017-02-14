export default class MenuToggle {

	constructor() {

		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		this.container.style.cssText = [
			'position: absolute',
			'right: 0',
			'top: 0',
			'width: 60px',
			'height: 30px',
			'background-color: grey'
		].join(';');
	}

	destroy() {
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}

	showMenu() {

	}

	hideMenu() {

	}
}