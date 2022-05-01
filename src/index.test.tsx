import { Test } from "./index";
import { render } from "@testing-library/react";

describe("test", () => {
  it("should exist", () => {
    const { container } = render(<Test />);
    expect(container).toMatchSnapshot();
  });
});
