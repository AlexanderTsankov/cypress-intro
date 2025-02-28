describe('Registration tests', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  });

  it('enter submit without valid user name', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]').should('be.visible');
  });

  it('enter invalid email', () => {
    cy.get('[data-test-id="email"]').type('invalid_email');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  });

  it('enter invalid password', () => {
    cy.get('[data-test-id="password"]').type('short');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]').should('be.visible');
  });

  it('enter mismatching password confirmation', () => {
    cy.get('[data-test-id="password"]').type('ValidPassword123');
    cy.get('[data-test-id="password-confirmation"]').type('InvalidPassword123');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-confirmation-error"]').should('be.visible');
  });

  it('select no gender', () => {
    cy.get('[data-test-id="gender"]').select('');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender-error"]').should('be.visible');
  });

});
