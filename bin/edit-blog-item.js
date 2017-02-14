(function () {
'use strict';

var MenuToggle = function MenuToggle() {

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
};

MenuToggle.prototype.destroy = function destroy () {
	this.container.parentNode.removeChild(this.container);
	this.container = null;
};

MenuToggle.prototype.showMenu = function showMenu () {

};

MenuToggle.prototype.hideMenu = function hideMenu () {

};

var BlockHeader = function BlockHeader(labelText, iconSrc, iconAlt) {
		
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
};
	
/**
	 * @param labelText {string}
	 * @param iconPath {string}
	 * @param iconAlt {string}
	 */
BlockHeader.prototype.update = function update (labelText, iconPath, iconAlt) {
	this.icon.src = iconPath;
	this.icon.alt = iconAlt;
	this.label.textContent = labelText;
};
	
/**
	 * Clear all internal references to the DOM
	 */
BlockHeader.prototype.destroy = function destroy () {
		
	this.container.removeChild(this.icon);
	this.icon = null;
		
	this.container.removeChild(this.label);
	this.label = null;
		
	this.container.parentNode.removeChild(this.container);
	this.container = null;
};

var BlockFooter = function BlockFooter(requiredText) {
		
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
};
	
BlockFooter.prototype.destroy = function destroy () {
		
	this.container.parentNode.removeChild(this.container);
	this.container = null;
};

var AbstractBlock = function AbstractBlock(position, type, labelText, iconSrc, iconAlt, requiredText) {
		
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
	this.label = new BlockHeader(labelText, iconSrc, iconAlt);
	this.container.appendChild(this.label.container);
		
	/**
		 * @type {BlockFooter}
		 */
	this.footer = new BlockFooter(requiredText);
	this.container.appendChild(this.footer.container);
};
	
AbstractBlock.prototype.destroy = function destroy () {
		
	this.label.destroy();
	this.label = null;
		
	this.menuToggle.destroy();
	this.menuToggle = null;
		
	this.footer.destroy();
	this.footer = null;
		
	this.container.parentNode.removeChild(this.container);
	this.container = null;
};

var TextBlock = (function (AbstractBlock$$1) {
	function TextBlock(position) {
		
		AbstractBlock$$1.call(this, position, 'text-block', 'Text Block', 'images/textBlockIcon.gif', 'Text Block', 'Required: Text Editor');
	}

	if ( AbstractBlock$$1 ) TextBlock.__proto__ = AbstractBlock$$1;
	TextBlock.prototype = Object.create( AbstractBlock$$1 && AbstractBlock$$1.prototype );
	TextBlock.prototype.constructor = TextBlock;

	return TextBlock;
}(AbstractBlock));

/**
 * @type {HTMLElement}
 */
var editBlogItemForm = document.getElementById('editBlogItemForm');

var textBlock = new TextBlock(0);
editBlogItemForm.appendChild(textBlock.container);

var textBlock1 = new TextBlock(1);
editBlogItemForm.appendChild(textBlock1.container);

}());
