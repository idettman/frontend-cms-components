import BlockLabel from './components/block-header';
import BlockFooter from './components/block-footer';

export default class AbstractBlock {
	
	/**
	 * @param position {number}
	 * @param type {string}
	 * @param labelText {string}
	 * @param iconSrc {string}
	 * @param iconAlt {string}
	 * @param requiredText {string}
	 */
	constructor(position, type, labelText, iconSrc, iconAlt, requiredText) {
		
		/**
		 * @type {number}
		 */
		this.position = position;
		
		/**
		 * @type {string}
		 */
		this.type = type;
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		this.container.style.cssText = [
			'width: 300px',
			'height: 200px',
			'background-color: green',
			'position: relative'
		].join(';');
		
		/**
		 * @type {BlockHeader}
		 */
		this.label = new BlockLabel(labelText, iconSrc, iconAlt);
		this.container.appendChild(this.label.container);
		
		/**
		 * @type {BlockFooter}
		 */
		this.footer = new BlockFooter(requiredText);
		this.container.appendChild(this.footer.container);
	}
	
	destroy() {
		
		this.label.destroy();
		this.label = null;
		
		this.menuToggle.destroy();
		this.menuToggle = null;
		
		this.footer.destroy();
		this.footer = null;
		
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}
};