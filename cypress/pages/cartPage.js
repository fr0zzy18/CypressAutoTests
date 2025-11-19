class CartPage {
    visit(){
        cy.contains('Cart').click()
    }
    checkout(){
        cy.get('a.check_out').click()
    }
    checkoutAndLogin(){
        cy.get('a.check_out').click()
        cy.get('#checkoutModal a[href="/login"]').click()
    }
        verifySubscribtion(email){
        cy.get('input[placeholder="Your email address"]').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }
    pricesAndQuantity(){
        cy.get('tr[id^="product-"]').each((row) => {
            const priceText = row.find('.cart_price p').text().trim();
            const price = Number(priceText.replace(/[^\d]/g, '')); 

            const qtyText = row.find('.cart_quantity button').text().trim();
            const quantity = Number(qtyText); 
    
            const totalText = row.find('.cart_total_price').text().trim();
            const total = Number(totalText.replace(/[^\d]/g, ''));
    
            const expected = price * quantity;

        expect(total, `Check total for row ${row.attr('id')}`).to.eq(expected);
});
    }
    
}

export const cartPage = new CartPage()