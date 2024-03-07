import { it, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"
import Greet from "../../src/components/Greet"
import "@testing-library/jest-dom/vitest"

describe("Greet component", () => {
  it("must render Hello with the name when name is provided", () => {
    render(<Greet name="BM" />)

    /* Print state of virtual DOM into console on Vitest UI */
    screen.debug()

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Hello BM")
  })

  it("must render login button when name is not provided", () => {
    render(<Greet />)

    /* Print state of virtual DOM into console on Vitest UI */
    screen.debug()

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Login")
  })
})
