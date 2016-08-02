var User = (function(){
  var id = 0
  return class {

    constructor(username){
      this.username = username
      this.id = ++id
      // debugger
      store.users.push(this)
    }

  }

}())
