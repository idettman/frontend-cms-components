import MenuToggle from './popup-menu/menu-toggle';

export default class BlockHeader {
	
	/**
	 * @param labelText {string}
	 * @param iconSrc {string}
	 * @param iconAlt {string}
	 */
	constructor(labelText, iconSrc, iconAlt) {
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		this.container.style.cssText = [
			'background-color: yellow',
			'width: 100%'
		].join(';');
		
		/**
		 * @type {HTMLImageElement}
		 */
		this.icon = document.createElement('img');
		this.icon.style.cssText = [
			'display: inline-block',
			'width: 30px',
			'height: 30px',
			'background-color: purple',
			'vertical-align: bottom',
			'border-image-width: 0',
			'stroke-width: 0'
		].join(';');
		//this.icon.textContent = 'IMG';
		this.icon.src = 'https://lh4.googleusercontent.com/-ezvbqruiEFc/AAAAAAAAAAI/AAAAAAAACfc/oEucR-UBZfE/photo.jpg?sz=48';
		this.icon.alt = iconAlt;
		this.container.appendChild(this.icon);
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.label = document.createElement('div');
		this.label.style.cssText = [
			'display: inline-block',
			'height: 30px',
			'line-height: 30px'
		].join(';');

		this.label.textContent = labelText;
		this.container.appendChild(this.label);

		/**
		 * @type {MenuToggle}
		 */
		this.menuToggle = new MenuToggle();
		this.container.appendChild(this.menuToggle.container);
	}
	
	/**
	 * @param labelText {string}
	 * @param iconPath {string}
	 * @param iconAlt {string}
	 */
	update(labelText, iconPath, iconAlt) {
		this.icon.src = iconPath;
		this.icon.alt = iconAlt;
		this.label.textContent = labelText;
	}
	
	/**
	 * Clear all internal references to the DOM
	 */
	destroy() {
		
		this.container.removeChild(this.icon);
		this.icon = null;
		
		this.container.removeChild(this.label);
		this.label = null;
		
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}
}