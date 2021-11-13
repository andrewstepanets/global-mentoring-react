describe('Test the page', () => {
  beforeEach(() => {
    // move to index page for all scenarious
    cy.visit('/');
  });
  it('Verify that page is renedered correctly', () => {
    //Verify that we stayed on the main page
    cy.url().should('include', indexPage);

    // verify that tittle of search is exist
    cy.get('#search-movie-title').contains('Find your movie');

    // verify that search input exist and it is an empty
    cy.get('[name=search]').should('have.value', '');

    // verify that button Ssarch is existed
    cy.get('[type=submit]').should('exist').contains('Search');

    // Verify that search results match the search query.
    cy.get('[name=search]').type(searchInput);
    cy.get('[type=submit]').click();

    // Verify that user should see Fifty Shades Freed
    cy.get('#number-of-movies').contains('1');
    cy.get('#poster-title').contains(searchInput);

    // Click on one of the search results and verify that correct movie page is displayed
    cy.get('#poster-link').should('exist').click({ force: true });
    cy.url().should('include', `${indexPage}/film/337167`);
  });
});

const indexPage = `http://localhost:4001`;
const searchInput = `Fifty Shades Freed`;
