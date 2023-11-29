describe('Register', () => {
  it('menuju halaman register dan memeriksa URL', () => {
    
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.ico-register').click();
        cy.url().should('include', '/register');
    cy.contains('Register').should('be.visible');
  });

  it('melakukan  register sebagai male', () => {
    
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.ico-register').click();
    cy.get('#gender-male').click();
    cy.get('#FirstName').type('m');
    cy.get('#LastName').type('rusdi');
    cy.get('#Email').type('rusdilubism@gmail.com');
    cy.get('#Password').type('panyabungan');
    cy.get('#ConfirmPassword').type('panyabungan');
    cy.get('#register-button').click();
    
  });

  it('melakukan  register sebagai female', () => {
    
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.ico-register').click();
    cy.get('#gender-male').click();
    cy.get('#FirstName').type('lubis');
    cy.get('#LastName').type('rusdi');
    cy.get('#Email').type('rusdilubis2m@gmail.com');
    cy.get('#Password').type('panyabungan');
    cy.get('#ConfirmPassword').type('panyabungan');
    cy.get('#register-button').click();


    
  });

  it.only('melakukan  register sebagai female tanpa last name', () => {
    
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.ico-register').click();
    cy.get('#gender-male').click();
    cy.get('#FirstName').type('lubis');
    cy.get('#LastName').type(' ');
    cy.get('#Email').type('rusdilubis2m@gmail.com');
    cy.get('#Password').type('panyabungan');
    cy.get('#ConfirmPassword').type('panyabungan');
    cy.get('#register-button').click();
    cy.get('span.field-validation-error[data-valmsg-for="LastName"][data-valmsg-replace="true"] span').should('have.text', 'Last name is required.');

  


  });

});

