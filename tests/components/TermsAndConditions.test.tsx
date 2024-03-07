import { render, screen } from "@testing-library/react"
import TermsAndConditions from "../../src/components/TermsAndConditions"
import userEvent from "@testing-library/user-event"

describe("TermsAndConditions component", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />)

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button", { name: "Submit" }),
    }
  }

  it("must render with correct test and initial state", () => {
    const { heading, checkbox, button } = renderComponent()

    expect(heading).toHaveTextContent("Terms & Conditions")
    expect(checkbox).not.toBeChecked()
    expect(button).toHaveTextContent("Submit")
    expect(button).toBeDisabled()
  })

  it("must enable the button when the checkbox is checked", async () => {
    const { checkbox, button } = renderComponent()
    
    /*
    Simulate user interaction by using @testing-library/user-event
    Prefer this package over fireEvent which is a wrapper around dispatchEvent API (does not simulate truly how users interact)
    */
    const user = userEvent.setup()
    await user.click(checkbox)

    expect(button).toBeEnabled()
  })
})
