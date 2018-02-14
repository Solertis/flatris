// @flow

import { createFixture } from '../../../utils/create-fixture';
import { getBlankPlayer } from '../../../reducers/game';
import PlayerInfo from '../../PlayerInfo';

const user = { id: 'mock', name: 'Treznik' };
const player = {
  ...getBlankPlayer('mock', user),
  score: 355,
  lines: 5
};

export default createFixture({
  component: PlayerInfo,

  container: {
    width: 4,
    height: 4,
    gameHeight: true
  },

  props: {
    player,
    isPlayer1: true,
    showWins: false,
    showReadyState: false
  }
});