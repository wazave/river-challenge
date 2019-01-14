/**
 *
 * Asynchronously loads the component for PokemonList
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
