import { render, screen } from "@testing-library/react";
import ProductInfo from "./ProductInfo";

describe("ProductInfo Component", () => {
  test("Macbook-air image should render correctly", () => {
    render(<ProductInfo />);

    // Image
    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("alt", "MacBook-air");
    expect(imageElement).toHaveClass("img-fluid");
  });

  test("H5, H4 & H3 should render correctly", () => {
    render(<ProductInfo />);

    // Product name
    const header5Element = screen.getByRole("heading", {
      name: "MacBook Air - Gris sidéral",
      level: 5,
    });

    expect(header5Element).toBeInTheDocument();
    expect(header5Element).toHaveClass("mt-0");

    // Product price
    const header4Element = screen.getByRole("heading", {
      name: "1 199,00€",
      level: 4,
    });

    expect(header4Element).toBeInTheDocument();
    expect(header4Element).toHaveClass("green");

    // Heading description
    const header3Element = screen.getByRole("heading", {
      name: "Personnalisez votre MacBook Air - Gris sidéral",
      level: 3,
    });

    expect(header3Element).toBeInTheDocument();
    // expect(header3Element).toHaveClass("mt-0");
  });

  test("ul & li should render correctly", () => {
    render(<ProductInfo />);

    // <ul>
    const productInfoList = screen.getByRole("list");
    expect(productInfoList).toBeInTheDocument();

    // 7 <li>
    const productInfoItem = screen.getAllByRole("listitem");
    expect(productInfoItem.length).toBe(7);

    // Text li
    const featureListText = productInfoItem.map((item) => item.textContent);
    expect(featureListText).toEqual([
      "Puce Apple M1 avec CPU 8 coeurs, GPU 7 coeurs, Neural Engine 16 coeurs",
      "8 Go de mémoire unifiée",
      "SSD de 256 Go",
      "Ecran Retina 13 pouces avec True Tone",
      "Deux ports Thunderbolt/USB 4",
      "Adaptateur secteur USB-C 30 W",
      "Magic Keyboard rétroéclairé avec Touch ID - Français",
    ]);
  });
});
