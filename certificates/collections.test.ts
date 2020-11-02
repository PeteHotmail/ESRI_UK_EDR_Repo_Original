import request from "supertest";
import { Server, HTTPSServer, HTTPServer } from "../src/server";
import Framework from "../src/framework";
import router from "../src/routes/all";
import dotenv from "dotenv";
import http from "http";

/**
 * Creates the Express framework app
 * @returns {http.RequestListener }
 */
function getFramework(): http.RequestListener {
  const frameworkFactory = new Framework();
  const app = frameworkFactory.createExpressApp(router);
  return app;
}


/** utilise .env file */
function setupEnv(): void {
  dotenv.config();
}


describe("GET /collections on on http", () => {

  let app: http.RequestListener;
  let server: HTTPServer;
  let framework: any;
  beforeAll(() => {
    setupEnv();
    const port = 8081;
    framework = getFramework();
    const serverFactory: Server = new Server();
    server = serverFactory.createHTTPServer(port);
    app = server.start(framework);
  });

  it("/collections should return 200 OK", () => {
    return request(app).get("/collections")
      .expect(200);
  });

  it("/collections/{collectionId} should return 200 OK", () => {
    return request(app).get("/collections/1")
      .expect(200);
  });

  it("/collections/{collectionId}/items should return 200 OK", () => {
    return request(app).get("/collections/1/items")
      .expect(200);
  });

  it("/collections/{collectionId}/instance should return 200 OK", () => {
    return request(app).get("/collections/1/instance")
      .expect(200);
  });

  it("/collections/{collectionId}/locations should return 200 OK", () => {
    return request(app).get("/collections/1/locations")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/locations should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/locations")
      .expect(200);
  });


   // supertest seems unable to send parameters to endpoints. Commeneted out for now
  // in order to progress higher matters in Poc
  // it("/collections/{collectionId}/position should return 200 OK", () => {
  //   return request(app).get("/collections/1/position")
  //     .query({
  //       coords: "POINT(0 51.48)",
  //       parametername: "['StdPressure']"
  //     })
  //     .expect(200);
  // });

  it("/collections/{collectionId}/position should return 404 missing parameters", () => {
    return request(app).get("/collections/1/position")
      .expect(404);
  });

  it("/collections/{collectionId}/radius should return 200 OK", () => {
    return request(app).get("/collections/1/radius")
      .expect(200);
  });


  // supertest seems unable to send parameters to endpoints. Commeneted out for now
  // in order to progress higher matters in Poc

  // it("/collections/{collectionId}/area should return 200 OK", (done) => {
  //   return request(app).get("/collections/1/area?")
  //     .send({coords: "POLYGON((-6.1 50.3,-4.35 51.4,-2.6 51.6,-2.8 50.6,-5.3 49.9,-6.1 50.3))"})
  //     .send({parametername: "['StdPressure']"})
  //     .then((response: any) => {
  //       expect(response.statusCode).toBe(200);
  //       done();
  //     });
  // });

  it("/collections/{collectionId}/area should return 404 missing parameters", () => {
    return request(app).get("/collections/1/area")
      .expect(404);
  });

  it("/collections/{collectionId}/cube should return 200 OK", () => {
    return request(app).get("/collections/1/cube")
      .expect(200);
  });

  it("/collections/{collectionId}/trajectory should return 200 OK", () => {
    return request(app).get("/collections/1/trajectory")
      .expect(200);
  });

  it("/collections/{collectionId}/corridor should return 200 OK", () => {
    return request(app).get("/collections/1/corridor")
      .expect(200);
  });

  it("/collections/{collectionId}/items/{itemId} should return 200 OK", () => {
    return request(app).get("/collections/1/items/1")
      .expect(200);
  });

  it("/collections/{collectionId}/locations/{locId} should return 200 OK", () => {
    return request(app).get("/collections/1/locations/1")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/position should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/position")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/radius should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/radius")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/area should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/radius")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/area should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/area")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/cube should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/cube")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/trajectory should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/trajectory")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/corridor should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/corridor")
      .expect(200);
  });

  it("/collections/{collectionId}/instance/{instanceId}/locations/{locId} should return 200 OK", () => {
    return request(app).get("/collections/1/instance/1/locations/1")
      .expect(200);
  });

});
