import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.447 142.447">
			<g>
				<path d="M71.224,0C31.951,0,0,31.951,0,71.224s31.951,71.224,71.224,71.224s71.224-31.951,71.224-71.224
		   S110.496,0,71.224,0z M71.224,127.447C40.222,127.447,15,102.226,15,71.224S40.222,15,71.224,15s56.224,25.222,56.224,56.224
		   S102.226,127.447,71.224,127.447z"/>
				<path d="M100.923,72.016H71.724V46.724c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v32.792
		   c0,4.143,3.357,7.5,7.5,7.5h36.699c4.143,0,7.5-3.357,7.5-7.5S105.065,72.016,100.923,72.016z"/>
			</g>
		</svg>
	},
	/**
	 * @see ./save.js
	 */
	save,
});
