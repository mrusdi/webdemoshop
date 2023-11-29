describe('Verifikasi Login', () => {
    it('menuju halaman Login dan memeriksa URL', () => {      
      cy.visit('https://demowebshop.tricentis.com/');
      cy.get('.ico-login').click();
      cy.url().should('eq', 'https://demowebshop.tricentis.com/login');
      
    });
    it('Sukses Login dengan Email dan Password yang terdaftar', () => {      
        cy.visit('https://demowebshop.tricentis.com/login');
        cy.get('#Email').type('rusdilubism@gmail.com')
        cy.get('#Password').type('panyabungan')
        cy.get('.login-button').click()
        cy.url().should('eq', 'https://demowebshop.tricentis.com/');        
        
      });

      it('Sukses Login dengan Email benar dan Password kosong', () => {      
        cy.visit('https://demowebshop.tricentis.com/login');
        cy.get('#Email').type('rusdilubism@gmail.com')
        cy.get('#Password').clear()
        cy.get('.login-button').click()
        cy.get('.validation-summary-errors').should('contain.text', 'The credentials provided are incorrect');      
                
      });

      it.only('Sukses Login dengan Email benar dan Password salah', () => {      
        cy.visit('https://demowebshop.tricentis.com/login');
        cy.get('#Email').type('rusdilubism@gmail.com')
        cy.get('#Password').type('asdgydg')
        cy.get('.login-button').click()
        cy.get('.validation-summary-errors').should('contain.text', 'The credentials provided are incorrect');      
                
      });



});
