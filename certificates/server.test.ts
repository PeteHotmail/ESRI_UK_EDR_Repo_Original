import request from "supertest";
import {Server, HTTPSServer, HTTPServer} from "../src/server";
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


describe("testing https", () => {

  let app: http.RequestListener;
  let server: HTTPSServer;
  let framework: any;
  beforeAll(() => {
    setupEnv();
    const port = 8043;
    const certPath: string = process.env.CERT_PATH || ".src\certificates\cert.pem";
    const keyPath: string = process.env.KEY_PATH || ".src\certificates\key.pem";
    framework = getFramework();
    const serverFactory: Server = new Server();
    server = serverFactory.createHTTPSServer(port, certPath, keyPath);
    app = server.start(framework);

  });

  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });

  it("should return server instance", () => {
    expect(typeof server.instance).toBe("object");
  });

});

describe("testing http", () => {

  let app: http.RequestListener;
  let server: HTTPServer;
  let framework: any;
  beforeAll(() => {
    setupEnv();
    const port = 8080;
    framework = getFramework();
    const serverFactory: Server = new Server();
    server = serverFactory.createHTTPServer(port);
    app = server.start(framework);
  });
  
  it("should return 200 OK", () => {
      return request(app).get("/")
          .expect(200);
  });

  it("should return server instance", () => {
    expect(typeof server.instance).toBe("object");
  });

});
