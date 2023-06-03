import rgbHex from 'rgb-hex';

describe('Homepage test', () => {
  it('should open the page', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#home').should('contain.text', "Radu-Andrei Baston")
    cy.get('#FoodVision').click()
    cy.get('[role=dialog]').should('be.visible')
  });

  it('should open the page and change theme', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#themeSwitch").click()
    cy.get('#home').invoke('css','background-color').then((bgcolor) => {
      expect(rgbHex(bgcolor)).to.eq('494949')
    })
  });

  it('should open the page and change language', () => {
    cy.visit('http://localhost:8080/');
    cy.get("#ro-lang").click();
    cy.get('#about').should('contain.text', "Despre mine");
    cy.get("#en-lang").click();
    cy.get('#about').should('contain.text', "About");
  });

})