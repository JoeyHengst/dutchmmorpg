import { getGreeting } from '../support/app.po';

describe('mmorpg', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to mmorpg!');
  });
});
