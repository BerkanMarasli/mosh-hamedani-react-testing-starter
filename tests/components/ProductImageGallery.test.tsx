import { render, screen } from "@testing-library/react"
import ProductImageGallery from "../../src/components/ProductImageGallery"

describe("ProductImageGallery component", () => {
  it("must render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />)

    expect(container).toBeEmptyDOMElement()
  })

  it("must render nothing if given an empty array", () => {
    const imageUrls: string[] = ["url1", "url2"]

    render(<ProductImageGallery imageUrls={imageUrls} />)

    const images = screen.getAllByRole("img")

    expect(images).toHaveLength(2)

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", imageUrls[index])
    })
  })
})
