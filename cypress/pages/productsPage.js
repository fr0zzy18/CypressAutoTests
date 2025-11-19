class ProductsPage {
    visit(){
        cy.contains('Products').click()
        cy.contains('All Products').should('be.visible')
    }
    verifyProductsList(){
        cy.get('.features_items').should('be.visible')
    }
    viewProduct(){
        cy.get('.nav-pills').eq(1).click()
    }
    verifyProductDetails(){
        cy.get('.product-information').should('be.visible')
    }
    verifyProductSearch(query){
        cy.get('input[placeholder="Search Product"]').type(query)
        cy.get('#submit_search').click()
        cy.get('.productinfo').should('have.length.greaterThan', 0)
    }
    changeProductQuantity(quantity){
        cy.get('input[name="quantity"]').clear().type(quantity)
    }
    addToCart(){
        cy.get('button.cart').click()
        cy.contains('View Cart').click()
    }
    addToCartMultiple(){
        const addProduct = (id, quantity = 1) => {
        for (let i = 0; i < quantity; i++) {
            cy.get(`a[data-product-id="${id}"]`).first().click();
            cy.contains(/continue shopping/i).click(); 
        }
    };
        addProduct(1, 2);
        addProduct(2, 1);
        addProduct(4, 3);
    }
  
    
}

export const productsPage = new ProductsPage()