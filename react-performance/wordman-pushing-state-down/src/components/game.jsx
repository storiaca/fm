import { useState } from 'react';
import GameInput from './game-input';
import GameStatus from './game-status';
import ColorSwatch from './color-swatch';
import generateRandomColor from '../lib/generate-random-color';
const Game = () => {
  const [colorGuess, setColorGuess] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(() =>
    generateRandomColor(),
  );
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  if (hasGuessed) {
    if (correctAnswer === colorGuess) {
      setIsWinner(true);
    }
  }
  return (
    <div>
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
    </div>
  );
};

export default Game;
