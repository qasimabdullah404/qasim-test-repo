const supertest = require("supertest");

let server = supertest.agent("http://localhost:3000");

describe("Simple test", () => {
  it("Would be simply returning homepage", (done) => {
    server
      .get("/")
      .expect("content-type", /text/)
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});
