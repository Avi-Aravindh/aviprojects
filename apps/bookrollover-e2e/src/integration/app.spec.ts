import { getGreeting } from '../support/app.po';

describe('bookrollover', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bookrollover!');
  });
});
