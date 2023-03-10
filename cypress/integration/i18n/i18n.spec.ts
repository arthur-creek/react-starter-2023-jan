describe('i18n', () => {
  it('should translate site to Polish', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /π΅π±/i }).click();

    cy.findByRole('heading', { name: /nazwa firmy/i }).should('exist');
  });

  it('should translate site to English', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /π΅π±/i }).click();

    cy.findByRole('heading', { name: /nazwa firmy/i }).should('exist');

    cy.findByRole('button', { name: /πΊπΈ/i }).click();

    cy.findByRole('heading', { name: /company name/i }).should('exist');
  });
});
