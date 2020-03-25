export function search(users, value) {

    if(value === '') {
        return []
    }

    return users.filter(user => 
        user.name.toLowerCase().includes(value)
        )
        .sort((a,b) => a.name > b.name ? 1 : -1)
}

export function findUserById(users, id) {
    return users.find(user => user.id === id) || {}
}