context("T", ()=>{
  beforeEach(()=>{
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
  });

  // you tests are added from here
  it("testing auth0 login works", ()=>{
    cy.visit("/login")
    cy.get("button")
  })
})
  // cy.get("h2").should("contain", "Ready for another adventure?")
  // cy.contains('Parent Dashboard').click()

  // it('sets auth cookie when logging in via form submission', function () {
  // const { password } = this.currentUser

  
  // {enter} causes the form to submit
  // cy.get('input[password=1234]').type(`${password}{enter}`)
  // cy.get('[data-cy="submit"]').click()

  // cy.get("input[name=password]").type("password", { log: false }).type("{enter}");
  
  // cy.visit('/Parent')
//   cy.loginsession();

  // cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
// //Get an input for a form, type into it and confirm that the value in the form has been submitted.
//       cy.get('.action-form')
//   .find('[type="text"]').type('HALFOFF')
// cy.get('.action-form').submit()
//   .next().should('contain', 'Your form has been submitted!')
  


// cy.get("h1".should("contain", "Welcome"))
