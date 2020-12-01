import {expect} from 'chai';
import {TollStation} from '../../../src/cards/base/TollStation';
import {Color} from '../../../src/Color';
import {Game} from '../../../src/Game';
import {Player} from '../../../src/Player';
import {Resources} from '../../../src/Resources';
import {TestPlayers} from '../../TestingUtils';

describe('TollStation', function() {
  it('Should play', function() {
    const card = new TollStation();
    const player = TestPlayers.BLUE.newPlayer();
    const anotherPlayer = new Player('foo', Color.RED, false);
    const game = new Game('foobar', [player, anotherPlayer], player);
    const action = card.play(player, game);
    expect(action).is.undefined;
    anotherPlayer.playedCards.push(card);
    expect(player.getProduction(Resources.MEGACREDITS)).to.eq(0);
    card.play(player, game);
    expect(player.getProduction(Resources.MEGACREDITS)).to.eq(1);
  });
});