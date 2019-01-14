/**
 *
 * Asynchronously loads the component for PokemonDetails
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
