const UsersController = (function(){

  function createUser(){

    var $name = $('.userName').val()
    var newUser = new User($name)
  }
  return {
    createUser
  }
}())
