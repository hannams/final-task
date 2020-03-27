export default function hasSearchedUsers(users, searchValue) {
   return users.every(user => 
      user.name !== searchValue
   )
}