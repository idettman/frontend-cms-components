import TextBlock from './content-blocks/text-block';

/**
 * @type {HTMLElement}
 */
const editBlogItemForm = document.getElementById('editBlogItemForm');

var textBlock = new TextBlock(0);
editBlogItemForm.appendChild(textBlock.container);

var textBlock1 = new TextBlock(1);
editBlogItemForm.appendChild(textBlock1.container);