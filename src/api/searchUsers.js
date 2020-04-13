export function search(users, value) {

       return users.filter(user => 
        user.name.toLowerCase().includes(value)
        )
        .sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
}

export function findUserById(users, id) {
    return users.find(user => user.id === id) || {}
}