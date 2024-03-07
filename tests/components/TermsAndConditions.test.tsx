import { render, screen } from "@testing-library/react"
import TermsAndConditions from "../../src/components/TermsAndConditions"
import userEvent from "@testing-library/user-event"

describe("TermsAndConditions component", () => {
  it("must render with correct test and initial state", () => {
    render(<TermsAndConditions />)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Terms & Conditions")

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    const button = screen.getByRole("button", { name: "Submit" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Submit")
    expect(button).toBeDisabled()
  })

  it("must enable the button when the checkbox is checked", async () => {
    render(<TermsAndConditions />)

    /*
    Simulate user interaction by using @testing-library/user-event
    Prefer this package over fireEvent which is a wrapper around dispatchEvent API (does not simulate truly how users interact)
    */
    const checkbox = screen.getByRole("checkbox")
    const user = userEvent.setup()
    await user.click(checkbox)

    expect(screen.getByRole("button")).toBeEnabled()
  })
})
