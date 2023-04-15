import { render, screen } from '@testing-library/react';
import resultValidator from './utils';

test('resultValidator returns Round Won', () => {
  const gameState = ["x", "x", "x", "", "", "", "", "", ""];
  expect(resultValidator(gameState)).toBe("Round Won");
});

test('resultValidator returns Round Draw', () => {
  const gameState = ["o", "x", "x", "x", "x", "o", "o", "o", "x"];
  expect(resultValidator(gameState)).toBe("Round Draw");
});