const request = require("supertest");
const app = require("../app/server");

describe("Application Tests", () => {
  test("GET / should return application message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("CI/CD Pipeline Application is Running!");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
