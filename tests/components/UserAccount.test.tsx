import { render, screen } from "@testing-library/react"
import { User } from "../../src/entities"
import UserAccount from "../../src/components/UserAccount"

describe("UserAccount component", () => {
  it("must render user name", () => {
    const user: User = { id: 1, name: "BM" }

    render(<UserAccount user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
  })

  it("must render edit button if user is admin", () => {
    const user: User = { id: 1, name: "BM", isAdmin: true }

    render(<UserAccount user={user} />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Edit")
  })

  it("must not render edit button if user is not admin", () => {
    const user: User = { id: 1, name: "BM", isAdmin: false }

    render(<UserAccount user={user} />)

    /* getByRole will throw an error if button is not in the DOM, hence use queryByRole which will return null */
    const button = screen.queryByRole("button")

    expect(button).not.toBeInTheDocument()
  })
})
