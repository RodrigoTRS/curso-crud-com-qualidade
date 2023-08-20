const BASE_URL = "http://localhost:3000";

describe("/ - Todos Feed", () => {
  it("when load, renders the page", () => {
    cy.visit(BASE_URL);
  });
});
