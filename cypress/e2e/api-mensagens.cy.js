describe("Api Adopet", () => {
  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/2ad0233e-83f5-4de5-9fea-515dca3ed604",
      headers: Cypress.env(),
    }).then((resposta) => {
      expect(resposta.status).to.be.equal(200);
      expect(resposta.body).is.not.empty;
      expect(resposta.body).to.have.property("msg");
    });
  });
});
