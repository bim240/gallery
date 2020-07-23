const Image = require("../../models/image");
const imageController = require("../../controller/image");

jest.mock("../../models/image");
beforeEach(() => {
  jest.clearAllMocks();
});
test("", async () => {
  Image.find.mockResolvedValueOnce();
  const res = { json: jest.fn(() => res), status: jest.fn(() => res) };
  const req = {};
  await imageController.getAllImage(req, res);

  expect(Image.find).toHaveBeenCalledTimes(1);
  expect(Image.find).toHaveBeenCalledWith();
  expect(res.json).toHaveBeenCalledTimes(1);
});
