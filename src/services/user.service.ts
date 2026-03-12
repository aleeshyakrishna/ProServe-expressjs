let users: User[] = [
    {
        id: 1,
        name: "Test User",
        email: "test@example.com"
    }
]
export interface User {
    id: number
    name: string
    email: string
}

export const getUserService = (id: number) => {
    return {
        id: 1,
        name: "Test User",
        email: "test@example.com"
    }
}

export const createUserService = async (userData: Omit<User, "id">): Promise<User> => {
    const { name, email } = userData
    // Simulate user creation logic
    const newUser: User = {
        id: Math.floor(Math.random() * 1000), // Simulated ID generation
        name,
        email
    }
    await users.push(newUser)
    return newUser;
}

export const getAllUserService = () => {
    return users;
}

export const deleteUserService = (id: number) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users.splice(index, 1)
    }
    return;
}

ex