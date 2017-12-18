// @flow

import { getBlankGame } from '../../../../reducers/game';
import GamePanel from '../../../GamePanel';

import type { Props } from '../../../GamePanel';

const fixture: { props: Props } = {
  component: GamePanel,

  props: {
    game: {
      ...getBlankGame('S', 'S'),
      users: [
        {
          id: 1,
          status: 'WATCHING'
        },
        {
          id: 2,
          status: 'PLAYING'
        },
        {
          id: 3,
          status: 'PLAYING'
        },
        {
          id: 4,
          status: 'PLAYING'
        }
      ],
      activeUserId: 2
    },
    userId: 1,
    showMenuButton: true,
    onMenu: () => console.log('Show menu')
  }
};

export default fixture;