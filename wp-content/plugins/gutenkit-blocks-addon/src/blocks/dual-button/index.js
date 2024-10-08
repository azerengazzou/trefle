/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * Block icon
	 */
	icon: {
		src: <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 1.5A1.5 1.5 0 011.5 0h17A1.5 1.5 0 0120 1.5v6A1.5 1.5 0 0118.5 9h-5.889a1.5 1.5 0 01-1.5-1.5V5.111a1.111 1.111 0 10-2.222 0V7.5a1.5 1.5 0 01-1.5 1.5H1.5A1.5 1.5 0 010 7.5v-6z" fill="#5C5F62" /><path d="M7 5a3 3 0 016 0v4.384a.5.5 0 00.356.479l2.695.808a2.5 2.5 0 011.756 2.748l-.633 4.435A2.5 2.5 0 0114.699 20H6.96a2.5 2.5 0 01-2.27-1.452l-2.06-4.464a2.417 2.417 0 01-.106-1.777c.21-.607.719-1.16 1.516-1.273 1.035-.148 2.016.191 2.961.82V5zm3-1a1 1 0 00-1 1v7.793c0 1.39-1.609 1.921-2.527 1.16-.947-.784-1.59-.987-2.069-.948a.486.486 0 00.042.241l2.06 4.463A.5.5 0 006.96 18h7.74a.5.5 0 00.494-.43l.633-4.434a.5.5 0 00-.35-.55l-2.695-.808A2.5 2.5 0 0111 9.384V5a1 1 0 00-1-1z" fill="#5C5F62" />
		</svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});
