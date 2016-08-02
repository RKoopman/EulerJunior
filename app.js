$(function() {
  $('.newProblem').on('submit', function(){
    event.preventDefault()
    problemsController.createProblem()
  })
})

$(function(){
  $('.newUser').on('submit', function(){
    // debugger
    event.preventDefault()
    UsersController.createUser()
  })
})

// post /users => UsersController#create
