import { render, screen } from "@testing-library/react"
import ExpandableText from "../../src/components/ExpandableText"
import userEvent from "@testing-library/user-event"

describe("ExpandableText component", () => {
  const limit = 255
  const longText = "a".repeat(limit + 1)
  const truncatedText = longText.substring(0, 255) + "..."

  it("must render the full text if less than 255 characters", () => {
    const shortText = "Some short text"
    render(<ExpandableText text={shortText} />)

    expect(screen.getByText(shortText)).toBeInTheDocument()
  })

  it("must render the truncated text if longer than 255 characters", () => {
    render(<ExpandableText text={longText} />)

    expect(screen.getByText(truncatedText)).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Show More')
  })

  it("must expand text when Show More button is clicked", async () => {
    render(<ExpandableText text={longText} />)

    const button = screen.getByRole("button")
    const user = userEvent.setup()
    await user.click(button)

    expect(screen.getByText(longText)).toBeInTheDocument()
    expect(button).toHaveTextContent('Show Less')
  })

  it("must collapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={longText} />)
    const showMoreButton = screen.getByRole("button", {name: 'Show More'})
    const user = userEvent.setup()
    await user.click(showMoreButton)

    const showLessButton = screen.getByRole('button', {name: 'Show Less'})
    await user.click(showLessButton)

    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    expect(showMoreButton).toHaveTextContent("Show More")
  })
})
