import { render, screen } from "@testing-library/react"
import UserList from "../../src/components/UserList"
import { User } from "../../src/entities"

describe("UserList component", () => {
  it("must render no users when the users array is empty", () => {
    render(<UserList users={[]} />)

    expect(screen.getByText("No users available.")).toBeInTheDocument()
  })

  it("must render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "BM" },
      { id: 2, name: "SM" },
    ]

    render(<UserList users={users} />)

    users.forEach(user => {
      const link = screen.getByRole("link", { name: user.name })

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", `/users/${user.id}`)
    })
  })
})
