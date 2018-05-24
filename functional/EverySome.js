//JS which will take a function as argument and will check if list has all things in test list


function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function (user){
			return goodUsers.some(function (validUser){
				return user.id === validUser.id;
			})
		})
	}
}

module.exports = checkUsersValid

/*
 module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }
*/