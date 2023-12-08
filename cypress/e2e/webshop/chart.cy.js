describe('Verify add to chart ', () => {
    it('menuju halaman chart dan memeriksa URL', () => {      
      cy.visit('https://demowebshop.tricentis.com/');
      cy.get('img[alt="Picture of $25 Virtual Gift Card"]').click();
      cy.url().should('eq', 'https://demowebshop.tricentis.com/25-virtual-gift-card');      
    });

    it('gagal cek add to to chart tanpa login tanpa mengisi form ', () => {      
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('img[alt="Picture of $25 Virtual Gift Card"]').click();
        cy.get('#add-to-cart-button-2').click()        
        cy.get('#bar-notification.error').should('be.visible');      
    });
    it('gagal add to to chart dengan email tidak terdaftar dan mengisi form ', () => {      
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('img[alt="Picture of $25 Virtual Gift Card"]').click();
        cy.get('#giftcard_2_RecipientName').type('rusdi')
        cy.get('#giftcard_2_RecipientEmail').type('rusdi@gmail.com')
        cy.get('#giftcard_2_SenderName').type('rusdi@gmail.com')
        cy.get('#giftcard_2_SenderEmail').type('rusdi')
        cy.get('#add-to-cart-button-2').click()        
        cy.get('#bar-notification.error').should('contain.text', 'Enter valid sender email'); 
             
    });

    it('gagal  add to to chart tanpa email valid dan mengisi form ', () => {      
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('img[alt="Picture of $25 Virtual Gift Card"]').click();
        cy.get('#giftcard_2_RecipientName').type('rusdi')
        cy.get('#giftcard_2_RecipientEmail').type('rusdi@gmail.com')
        cy.get('#giftcard_2_SenderName').type('rusdi')
        cy.get('#giftcard_2_SenderEmail').type('rusdi')
        cy.get('#add-to-cart-button-2').click()        
        cy.get('#bar-notification.error').should('be.visible');      
    });


    // it.only('Sukses Menambahkan produk ke chart', () => {      
    //     cy.visit('https://demowebshop.tricentis.com/login');
    //     cy.get('#Email').type('rusdilubism@gmail.com')
    //     cy.get('#Password').type('panyabungan')
    //     cy.get('.login-button').click()
    //     cy.get('div#flyout-cart.flyout-cart').should('be.visible');
    //     cy.get('img[title="Show details for $25 Virtual Gift Card"]').click();
    //     cy.get('#giftcard_2_RecipientName').type('rusdi')
    //     cy.get('#giftcard_2_RecipientEmail').type('rusdi@gmail.com')
    //     cy.get('#giftcard_2_SenderName').type('rusdi@gmail.com')
    //     cy.get('#giftcard_2_SenderEmail').type('rusdi')
    //     cy.get('#addtocart_2_EnteredQuantity').type('2')
    //     cy.get('#add-to-cart-button-2').click()               
    //   });



});



