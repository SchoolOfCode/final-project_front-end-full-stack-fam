// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add("loginsession",(overide = {}) => {
//     Cypress.log({name: "loginbyauth0" })
//     const options = {
//         method: 'POST',
//         url: "https://dev-5vyznydl.us.auth0.com/authorize",
//         body: {
//           grant_type: 'password',
//           username: "rhema24+cypress@gmail.com",
//           password: "Jungle123?",
//           audience: "https://dev-5vyznydl.us.auth0.com/api/v2/",
//           scope: 'openid profile email',
//           client_id: 'zjdgtnQIhKnNygR8WwINXBbEXkSM7Tsz',
//           client_secret: 'LjiwhDcEwryJNpy41QAU3P_Lfv2WsBU3fweD6YNBTknH0lkSYbCBrGBsHw9zRlWi',
//         },
//       };

// //       cy.request(options)
//     // cy.session([email, password]), () => {
//     //   cy.visit('https://jungle-sum.netlify.app/')
//     //   cy.get("#qsLoginBtn").click();
  
//     //   cy.origin(
//     //     "https://https://dev-5vyznydl.us.auth0.com/",
//     //     { args: [email, password] }, ([email, password]) =>  {
//     //       cy.get("#1-email").type(email);
//     //       cy.get("input[type='password']").type(password);
//     //       cy.get("button[type='submit']").click();
//     //     })
//     // //   }

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], ()=> {
      cy.visit("https://jungle-sum.netlify.app/");
      cy.get("button").first().click();
  
      cy.origin(
        "https://dev-5vyznydl.us.auth0.com/",
        {args: [email, password]},
        ([email, password])=>{
        cy.wait(1000)
          cy.get("input[type='email']").type(email);
          cy.get("input[type='password']").type(password);
          cy.get("button[type='submit']").first().click();
        }
      );
  
    });
  });

  