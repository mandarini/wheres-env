describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('sb-env-nx-nx-welcome').should('exist');
  });
});
