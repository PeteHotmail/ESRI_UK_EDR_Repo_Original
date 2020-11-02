import Validate from "../src/utils/validation";
import Geometry from "../src/utils/conversion";


describe("testing validation utils", () => {

    it("should validate", () => {
        const input = {coords: "POINT(0 51.48)", parametername: "['StdPressure']"};
        const response = Validate.isValid(input, ["coords", "parametername"]);
        expect(response.valid).toBe(true);
    });

    it("length should return no missing keys ", () => {
        const input = {coords: "POINT(0 51.48)", parametername: "['StdPressure']"};
        const response = Validate.isValid(input, ["coords", "parametername"]);
        expect(response.keys.length).toBe(0);
    });

    it("should fail", () => {
        const input = {coords: "POINT(0 51.48)"};
        const response = Validate.isValid(input, ["coords", "parametername"]);
        expect(response.valid).toBe(false);
    });

    it("should return missing keys", () => {
        const input = {coords: "POINT(0 51.48)"};
        const response = Validate.isValid(input, ["coords", "parametername"]);
        expect(response.keys.length).toBe(1);
    });
  
  });

  
describe("testing geometry utils", () => {

    it("should return point", () => {
        const geom = Geometry.WKTToEsri("POINT(0 51.48)");
        expect(geom).toStrictEqual({"spatialReference": {"wkid": 4326}, "x": 0, "y": 51.48});
    });
  
});