const BASE_URL = "http://localhost:3000";

describe("/ - Todos Feed", () => {
  it("when load, renders the page", () => {
    // Trailing Slash
    cy.visit(BASE_URL);
  });
});
