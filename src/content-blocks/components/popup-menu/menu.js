import BlockEditMenuItem from './menu-link';

export default class BlockEditMenu {
	
	/**
	 * @param menuItems {Array.<BlockEditMenuItem>}
	 */
	constructor(menuItems) {
		
		/**
		 * @type {HTMLDivElement}
		 */
		this.container = document.createElement('div');
		
		/**
		 * @type {Array.<BlockEditMenuItem>}
		 */
		this.menuItems = menuItems;
		
		/**
		 * @type {DocumentFragment}
		 */
		const fragment = document.createDocumentFragment();
		
		menuItems.forEach((item) => {
			fragment.appendChild(item.container); 
		});
		
		this.container.appendChild(fragment);
	}
	
	/**
	 * Remove internal references and propagate destroy
	 */
	destroy() {
		
		this.menuItems.forEach((item) => {
			item.destroy();
		});
		this.menuItems = null;
		
		this.container.parentNode.removeChild(this.container);
		this.container = null;
	}
}