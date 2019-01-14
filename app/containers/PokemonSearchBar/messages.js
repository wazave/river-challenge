/*
 * PokemonSearchBar Messages
 *
 * This contains all the text for the PokemonSearchBar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PokemonSearchBar';

export default defineMessages({
  searchPlaceHolder: {
    id: `${scope}.searchPlaceHolder`,
    defaultMessage: 'Search by name or number...',
  },
});
