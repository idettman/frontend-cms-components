import AbstractBlock from './abstract-block';

export default class TextBlock extends AbstractBlock {
	
	constructor(position) {
		
		super(position, 'text-block', 'Text Block', 'images/textBlockIcon.gif', 'Text Block', 'Required: Text Editor');
	}
}