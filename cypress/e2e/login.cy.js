describe('Login tests', () => {

    beforeEach(() => {
      cy.visit('http://localhost:8080/login')
    });
  
    it('enter submit without valid email', () => {
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-email-error"]').should('be.visible');
    });
  
    it('enter submit without valid password', () => {
      cy.get('[data-test-id="login-email"]').type('valid_email@example.com');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-password-error"]').should('be.visible');
    });
  
    it('enter invalid email', () => {
      cy.get('[data-test-id="login-email"]').type('invalid_email');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-email-error"]').should('be.visible');
    });
  
    it('enter valid credentials', () => {
      cy.get('[data-test-id="login-email"]').type('valid_email@example.com');
      cy.get('[data-test-id="login-password"]').type('validPassword123');
      cy.get('[data-test-id="login-submit"]').click();
      cy.url().should('not.include', '/login');
    });
  });
  