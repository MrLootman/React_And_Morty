import request from "supertest";

import app from "../index.js";

describe('Test des injections SQL', () => {
  it ('Doit résister aux injections SQL', async () => {
    const badInput = "' OR 1=1 --";
    const response = await request(app) 
      .get(`/characters?name=${badInput}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});